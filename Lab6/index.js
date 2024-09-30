        
        async function fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts = await response.json();
                displayPosts(posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        
        function displayPosts(posts) {
            const postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = ''; 

            posts.forEach(post => {
                const col = document.createElement('div');
                col.className = 'col-lg-4 col-md-6 col-12'; 

                const card = document.createElement('div');
                card.className = 'card';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = post.title;

                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = post.body;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                card.appendChild(cardBody);
                col.appendChild(card);
                postsContainer.appendChild(col);
            });
        }

        
        fetchPosts();