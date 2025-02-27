document.addEventListener('DOMContentLoaded', () => {
    fetch('project1-content.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('project-title').textContent = data.title;
            document.getElementById('project-subtitle').textContent = data.subtitle;
            document.getElementById('project-overview').textContent = data.overview;

            const featuresList = document.getElementById('project-features');
            data.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });

            const technologiesList = document.getElementById('project-technologies');
            data.technologies.forEach(tech => {
                const li = document.createElement('li');
                li.textContent = tech;
                technologiesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching project content:', error));
});
