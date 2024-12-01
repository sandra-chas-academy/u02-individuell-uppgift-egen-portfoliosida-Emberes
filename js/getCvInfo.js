async function getCvInfo(filePath) { 
    try {
        const response = await fetch(filePath);
        if(!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const cvArray = await response.json();
        console.log(cvArray);
        const container = document.getElementById('all-cv-experience');
        cvArray.forEach(cv => {
            const cvEntry = document.createElement('div');
            cvEntry.id = 'experience-item';
            const topInfo = document.createElement('div');
            topInfo.id = 'top-info';
            const title = document.createElement('h4');
            title.id = 'title';
            title.textContent =  `${cv.title}`;
            topInfo.appendChild(title);
            cvEntry.appendChild(topInfo);
            const type = document.createElement('span');
            if (cv.type === 'Job'){
                type.id = 'pill-job'
            } else {
                type.id = 'pill-edu'
            }
           topInfo.appendChild(type);
            type.textContent =  `${cv.type}`;
            const timeSpan = document.createElement('span');
            timeSpan.id = 'date';
            timeSpan.textContent =  `${cv.startDate} - ${cv.endDate}`;
            cvEntry.appendChild(timeSpan);

            
            const place = document.createElement('p');
            place.id = 'place';
            const buildingIcon = document.createElement('i');
            buildingIcon.id = 'job-symbols-building';
            buildingIcon.classList.add('fa-solid', 'fa-building');
            place.appendChild(buildingIcon);
            place.appendChild(document.createTextNode(` ${cv.place}`));
            cvEntry.appendChild(place);


            const city = document.createElement('p');
            const locationIcon = document.createElement('i');
            locationIcon.id = 'job-symbols-location';
            locationIcon.classList.add('fa-solid', 'fa-location-dot');
            city.id = 'city';
            city.appendChild(locationIcon);
            city.appendChild(document.createTextNode(` ${cv.city}`));
            cvEntry.appendChild(city);
            const description = document.createElement('p');
            description.id = 'description';
            description.textContent =  `${cv.description}`;
            cvEntry.appendChild(description);
        

            const separator = document.createElement('hr');
            cvEntry.appendChild(separator);
            container.appendChild(cvEntry);
        });
        document.body.appendChild(container);
    } catch(error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

getCvInfo('cv.json');