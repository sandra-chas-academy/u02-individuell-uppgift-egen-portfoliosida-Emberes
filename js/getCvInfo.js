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
            const type = document.createElement('span');
            type.textContent =  `${cv.type}`;
            cvEntry.appendChild(type);
            const title = document.createElement('h4');
            title.textContent =  `${cv.title}`;
            cvEntry.appendChild(title);
            const timeSpan = document.createElement('span');
            timeSpan.id = 'date';
            timeSpan.textContent =  `${cv.startDate} - ${cv.endDate}`;
            cvEntry.appendChild(timeSpan);
            const place = document.createElement('p');
            place.textContent =  `${cv.place}`;
            cvEntry.appendChild(place);
            const city = document.createElement('p');
            city.textContent =  `${cv.city}`;
            cvEntry.appendChild(city);
            const description = document.createElement('p');
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