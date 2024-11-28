async function getRepos(url) { 
    // const headers = {
    //     'Authorization': `token ${token}`,
    //     'Accept': 'application/vnd.github.v3+json'
    // };

    try {
        const response = await fetch (url, { headers });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        const container = document.getElementById('repo_container');

            data.forEach(repo => {
                if (repo.owner.login === 'Emberes'){
                    console.log(repo);
                    console.log(`Repository Name: ${repo.name}`); 
                    console.log(`Repository URL: ${repo.html_url}`);
                    console.log(`Repository Description: ${repo.description}`);
                    const repoEntry = document.createElement('div');
                    const name = document.createElement('h4');
                    name.textContent =  `Repo Name: ${repo.name}`;
                    repoEntry.appendChild(name);
    
                    const description = document.createElement('p');
                    description.textContent = `Description: ${repo.description}`;
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
                    iconLink.setAttribute('href', repo.html_url); 
                    iconLink.appendChild(icon);
                    repoEntry.appendChild(iconLink);

                    const url = document.createElement('a');
                    url.setAttribute('href', repo.html_url);
                    url.innerHTML = 'View GitHub repo here';
                    repoEntry.appendChild(url);
    
                    const separator = document.createElement('hr');
                    repoEntry.appendChild(separator);
                    container.appendChild(repoEntry);
                }
            });

            document.body.appendChild(container);
        } 
         catch(error) {
            console.error('There was a problem with the fetch operation:', error);
        };
}

getRepos('https://api.github.com/user/repos');