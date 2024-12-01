async function getRepos(username) { 
    const url = `https://api.github.com/users/${username}/repos`;
    const headers = { 
        'Accept': 'application/vnd.github.v3+json'
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const loadingSpinner = document.querySelector('.lds-heart');

    try {
        loadingSpinner.style.display = 'block';
        await sleep(3000);
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        const container = document.getElementById('repo_container');

        data.forEach(repo => {
            const repoEntry = document.createElement('div');
            const name = document.createElement('h4');
            name.id = 'h4-projects'
            name.textContent =  `${repo.name}`;
            repoEntry.appendChild(name);

            const description = document.createElement('p');
            description.textContent = `${repo.description}`;
            repoEntry.appendChild(description);

            const languages = document.createElement('p');
            repoEntry.appendChild(languages);
            fetch(repo.languages_url, { headers })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(languagesData => {
                if (Object.keys(languagesData).length > 0 ) {
                    const languagesString = Object.keys(languagesData).join(', ');
                    languages.textContent = `Tech stack: ${languagesString}`;
                } else {
                    languages.textContent = `Languages: None`;
                }
            })
            .catch(error => {
                languages.textContent = 'Languages: None';
                console.error('There was a problem with the fetch operation:', error);
            });

            const icon = document.createElement('i');
            icon.classList.add('fa-brands', 'fa-github'); 
            const iconLink = document.createElement('a');
            iconLink.id = 'github-icon';
            iconLink.setAttribute('href', repo.html_url); 
            iconLink.appendChild(icon);
            repoEntry.appendChild(iconLink);

            const url = document.createElement('a');
            url.setAttribute('href', repo.html_url);
            url.innerHTML = 'View GitHub repo here';
            url.id='repo-tag';
            repoEntry.appendChild(url);

            const separator = document.createElement('hr');
            repoEntry.appendChild(separator);
            container.appendChild(repoEntry);
        });

        document.body.appendChild(container);
    } 
    catch(error) {
        console.error('There was a problem with the fetch operation:', error);
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

// Fetch public repos for a specific user
getRepos('emberes');