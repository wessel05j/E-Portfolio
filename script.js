const projects = [
    {
        title: "CTF Platform",
        img: "project1.jpg",
        description: `
      <h3>CTF Platform</h3>
      <p>En plattform for Capture The Flag konkurranser med fokus på sikkerhet og brukervennlighet.</p>
      <p>Bygget med Python og JavaScript. Inkluderer oppgavegenerator, scoring og sikker innlogging.</p>
    `
    },
    {
        title: "Pygame Game",
        img: "project2.jpg",
        description: `
      <h3>Pygame Game</h3>
      <p>Et spill laget med Pygame som demonstrerer kreativitet og programmeringsferdigheter.</p>
      <p>Spillet har flere nivåer, animasjoner og lyd.</p>
    `
    },
    {
        title: "Web Automation Scripts",
        img: "project3.jpg",
        description: `
      <h3>Web Automation Scripts</h3>
      <p>Automatiserte skript for web scraping og testing, skrevet i Python og JavaScript.</p>
      <p>Bruker Selenium og Requests for effektiv automatisering.</p>
    `
    },
    {
        title: "Portfolio Website",
        img: "project4.jpg",
        description: `
      <h3>Portfolio Website</h3>
      <p>Min egen portefølje med moderne design og sikkerhetsfokus.</p>
      <p>Bygget med HTML, CSS og JavaScript. Responsivt og lett å utvide.</p>
    `
    }
];

function showProject(idx) {
    const modal = document.getElementById('project-modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = projects[idx].description;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Accessibility: Close modal with ESC
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") closeModal();
});