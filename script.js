const sections = [
  {
    title: "Experience",
    description: `
    <h3>Experience</h3>
    <h4>Profile</h4>
    <p>I am an 1st year Dataengineer at NTNU Gjøvik and have finished High School in natural science. 
    I have gained work experience from agriculture, youth 
    sports coaching, retail, and municipal outdoor maintenance. I am motivated, 
    reliable, and eager to learn. I am seeking part-time work in IT to further develop 
    my skills and contribute to a positive and productive work environment.</p>

    <h4>Work Experience</h4>
    <ul>
      <li><strong>Rotnes Bruk AS</strong> — Seasonal Worker (2022–2023)
        <p>Performed a variety of outdoor physical tasks including firewood processing, 
        painting, raking, and surface scraping.</p>
      </li>
      <li><strong>Joker Gan</strong> — Shop Assistant (2023)
        <p>Responsibilities included stocking shelves, maintaining store cleanliness, 
        assisting with postal services, operating the cash register, and providing 
        customer service.</p>
      </li>
      <li><strong>Lillestrøm Municipality</strong> — Outdoor Maintenance (Summer positions 2024 & 2025)
        <p>General maintenance work such as lawn mowing, edge trimming, and care of trees 
        and hedges.</p>
      </li>
      <li><strong>All-Sports</strong> — Youth Sports Coach
        <p>Coached children aged 4–7, developing skills in communication, adaptability, 
        and creating a safe and encouraging environment for learning.</p>
      </li>
    </ul>

    <h4>Education</h4>
    <p><strong>Kristelig Gymnasium | High School(KG VGS)</strong> — Natural Sciences, 2022–2024<br>
    Subjects: Chemistry 1, Information Technology 1–2, Mathematics R1–R2, Exercise Science</p>

    <h4>Supporting Documents</h4>
    <ul>
      <li><a href="other/High_School_grades.jpg" target="_blank">Upper Secondary School Transcript</a></li>
      <li><a href="other/Joker Gan referal.pdf" target="_blank">Reference – Joker Gan</a></li>
      <li><a href="other/LillestrømKommune work 2024and2025.pdf" target="_blank">Work Confirmation – Lillestrøm Municipality (2024)</a></li>
      <li><a href="other/middleschool.pdf" target="_blank">Lower Secondary School Certificate</a></li>
      <li><a href="other/middleschoolawardforbeingthekindest.pdf" target="_blank">Kindness Award – Lower Secondary School</a></li>
      <li><a href="other/work Lillestrøm City referal.pdf" target="_blank">Reference – Lillestrøm Municipality</a></li>
      <li><a href="other/studentIDNTNUGjøvik.jpg" target="_blank">Student ID – NTNU Gjøvik</a></li>
    </ul>
  `
  },
  {
    title: "Skills",
    img: "project2.jpg",
    description: `
    <h3>Skills</h3>

    <h4>Technical Skills</h4>
    <ul>
      <li>Foundational knowledge in cybersecurity, with practical training via TryHackMe</li>
      <li>Knowledge in: Python, Java, Javascript, HTML and CSS</li>
      <li>Scripting and small automation projects</li>
      <li>Introductory experience with game development (Pygame)</li>
    </ul>

    <h4>Personal Skills</h4>
    <ul>
      <li>Physically fit and capable of performing demanding tasks</li>
      <li>Strong work ethic, discipline, and reliability</li>
      <li>Effective communicator and honest</li>
      <li>Analytical thinking and creative problem-solving</li>
      <li>Entrepenual mindset</li>
      <li>Driver’s License (Category B) and Boat License</li>
    </ul>

    <h4>Interests</h4>
    <ul>
      <li>Love investing and create small buisness projects</li>
      <li>High tech / futuristic things / problem solving technology</li>
      <li>Regular strength training at the gym, coding as a hobby, and spending time with friends and family</li>
    </ul>
  `
  },
  {
    title: "Main Project",
    description: `
      <h3>Block Catcher</h3>
      <p>A game i coded when i was in High School as a final grade</p>
      <hr>
      <a href="other/Block_Catcher.zip" target="_blank">Block Catcher Download.zip</a>
    `
  },
  {
    title: "Other Projects",
    description: `
      <h3>Projects</h3>
      <h4>Ev3 Mindstorm Track Project</h4>
      <p>...</p>
      <hr>
      <p>This e-portfolio: Built with HTML, CSS and JavaScript. Responsive and easy to extend.</p>
    `
  }
];

function showSection(idx) {
  const modal = document.getElementById('section-modal');
  const body = document.getElementById('section-modal-body');
  // wrap content so padding stays inside rounded container
  body.innerHTML = `<div class="modal-inner">${sections[idx].description}</div>`;
  // hide the grid of cards so the panel fills the space
  const list = document.querySelector('.section-list');
  if (list) list.classList.add('hidden');
  modal.style.display = 'block';
  // ensure the panel scrolls to top when opened
  const content = modal.querySelector('.modal-content');
  if (content) content.scrollTop = 0;
}

function closeModal() {
  const modal = document.getElementById('section-modal');
  modal.style.display = 'none';
  const list = document.querySelector('.section-list');
  if (list) list.classList.remove('hidden');
}

// Accessibility: Close modal with ESC
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") closeModal();
});