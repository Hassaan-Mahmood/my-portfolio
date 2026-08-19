/* =========================================================================
   data.js  —  THIS IS THE ONLY FILE YOU NEED TO EDIT

   The whole website is built from the arrays and objects below.
   Change the values here, save the file, refresh the browser. That is all.
   You never have to touch index.html, style.css or script.js.

   index.html loads this file first, one line above script.js. Every var below
   becomes a global variable, so script.js can read it by name and turn it into
   the page. Keep the var keyword and keep the names spelled the same, because
   script.js looks for these exact names.
   ========================================================================= */

/* ---------- 1) BASIC INFO — shown in the top hero banner --------------- */
var profile = {
  name: "Hassaan Mahmood",
  initials: "HM", // shown in the circle if there is no photo
  photo: "images/profile2.png", // put your image path here, e.g. "images/me.jpg"
  role: "Front End Developer",
  typingRoles: [
    // these words type themselves one by one
    "Front End Developer",
    "JavaScript Learner",
    "UI Enthusiast",
    "Computer Science Student",
  ],
  tagline:
    "I am a computer science student who builds clean, fast and mobile friendly websites with HTML, CSS and JavaScript.",
  location: "Karachi, Pakistan",
  email: "hassaan2980@gmail.com",
  phone: "+92 319 0459182",
  available: true, // true shows the green "open to work" badge
  resume: "images/resume.pdf", // link or file name of your CV
};

/* ---------- 2) NAVIGATION MENU ----------------------------------------- */
var navLinks = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Education", link: "#education" },
  { title: "Services", link: "#services" },
  { title: "Contact", link: "#contact" },
];

/* ---------- 3) SOCIAL LINKS -------------------------------------------- */
var socialLinks = [
  { name: "GitHub", icon: "GH", link: "https://github.com/Hassaan-Mahmood" },
  {
    name: "LinkedIn",
    icon: "in",
    link: "https://linkedin.com/in/hassaan-mahmood007",
  },
  { name: "Twitter", icon: "X", link: "https://twitter.com/hassaan2980" },
  { name: "Email", icon: "@", link: "mailto:hassaan2980@gmail.com" },
];

/* ---------- 4) ABOUT SECTION ------------------------------------------- */
var aboutText = [
  "Hello! I am a computer science student learning web development. I enjoy building websites that look good, load fast and work well on every screen size.",
  "So far I have worked with HTML, CSS and JavaScript, and I have built several small projects along the way. Next on my list are React and Node.js. I learn quickly and I like working with a team.",
];

var aboutFacts = [
  { label: "Full Name", value: "Hassaan Mahmood" },
  { label: "Degree", value: "Full Stack Development" },
  { label: "University", value: "SMIT Institute" },
  { label: "Languages", value: "English, Urdu" },
  { label: "Location", value: "Karachi, Pakistan" },
  { label: "Freelance", value: "Available" },
];

var stats = [
  { number: 20, suffix: "+", label: "Projects Built" },
  { number: 1, suffix: "", label: "Years Learning" },
  { number: 2, suffix: "+", label: "Certificates" },
  { number: 4, suffix: "+", label: "Happy Clients" },
];

/* ---------- 5) SKILLS — grouped by category ---------------------------- */
var skillGroups = [
  {
    category: "Front End",
    icon: "</>",
    skills: [
      { name: "HTML5", percent: 90 },
      { name: "CSS3", percent: 80 },
      { name: "JavaScript", percent: 60 },
      { name: "Bootstrap", percent: 75 },
    ],
  },
  {
    category: "Tools",
    icon: "#",
    skills: [
      { name: "Git and GitHub", percent: 72 },
      { name: "VS Code", percent: 90 },
      { name: "Figma", percent: 50 },
      { name: "Chrome DevTools", percent: 65 },
    ],
  },
  {
    category: "Next Learning",
    icon: "*",
    skills: [
      { name: "React", percent: 0 },
      { name: "Node.js", percent: 0 },
      { name: "Tailwind", percent: 0 },
      { name: "MongoDB", percent: 0 },
    ],
  },
];

/* ---------- 6) PROJECTS ------------------------------------------------- */
/* The filter buttons are created automatically from the category names. */
var projects = [
  {
    title: "Calculator App",
    category: "JavaScript",
    icon: "🔢",
    description:
      "A calculator that handles add, subtract, multiply and divide, and also works with the keyboard.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://calculator-hm-smit.netlify.app/",
    code: "https://github.com/Hassaan-Mahmood/Calculator",
    featured: true,
  },
  {
    title: "To Do List",
    category: "JavaScript",
    icon: "📝",
    description:
      "Add tasks, mark them complete and delete them. Everything is saved in the browser with localStorage.",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    demo: "https://my-todo-hm.netlify.app/",
    code: "https://github.com/Hassaan-Mahmood/My-Todo",
    featured: true,
  },
  {
    title: "Tic Tac Toe",
    category: "JavaScript",
    icon: "❌⭕",
    description:
      "A responsive website for a local restaurant with a menu, a photo gallery and a booking form.",
    tech: ["HTML", "CSS", "Bootstrap"],
    demo: "",
    code: "#",
    featured: false,
  },

  {
    title: "Quiz App",
    category: "JavaScript",
    icon: "❔",
    description:
      "A ten question quiz with a countdown timer and a score screen. Questions are stored in an array of objects.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://quiz-mcqs-app.netlify.app/",
    code: "https://github.com/Hassaan-Mahmood/SMIT_Tic-Tac-Toe",
    featured: false,
  },
  {
    title: "Portfolio Template",
    category: "Website",
    icon: "🖥️",
    description:
      "The portfolio you are looking at right now. Every section is generated from a single data file.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://portfolio-student-813040.netlify.app/",
    code: "https://github.com/Hassaan-Mahmood/Portfolio-website",
    featured: false,
  },
  {
    title: "Digital Clock",
    category: "Website",
    icon: "⏱️",
    description:
      "The Digital Clock you are looking at right now. Every code is written by me.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://digital-clock-hm-smit.netlify.app/",
    code: "https://github.com/Hassaan-Mahmood/Portfolio-website",
    featured: false,
  },
];

/* ---------- 7) EDUCATION AND EXPERIENCE TIMELINE ------------------------ */
var timeline = [
  {
    type: "education",
    year: "2024 - 2026",
    title: "Associate Degree in Science",
    place: "Shah Abdul Latif University, Khairpur",
    detail:
      "A two-year undergraduate degree providing a a strong foundation in scientific and analytical studies. I have successfully completed ADS part-I with 65% marks and am currently pursuing ADS part-II",
  },
  {
    type: "education",
    year: "2021 - 2023",
    title: "Intermediate, Pre Engineering",
    place: "Govt Boys Higher Secondary School, Khanpur Mahar",
    detail:
      "Graduated with an B grade and served as an active member of the college computer society.",
  },
  {
    type: "experience",
    year: "March 2026 - Present",
    title: "Full Stack Development",
    place: "Saylani Mass IT Training",
    detail:
      "Also, Currently pursuing a Web Development Course at Saylani Mass IT Training (SMIT), gaining practical experience in HTML, CSS, Bootstrap, JavaScript, DOM manipulation, Git & Github through hands-on projects and assignment.",
  },
];

/* ---------- 8) CERTIFICATES --------------------------------------------- */
var certificates = [
  {
    title: "Web Development Bootcamp",
    issuer: "BanoQabil",
    year: "2024",
    link: "https://banoqabil.pk",
  },
  {
    title: "MS Office",
    issuer: "Al Shams Institute",
    year: "2024",
    link: "#",
  },
];

/* ---------- 9) SERVICES ------------------------------------------------- */
var services = [
  {
    icon: "01",
    title: "Website Development",
    detail:
      "A clean and fast website for your business that looks right on every screen size.",
  },
  {
    icon: "02",
    title: "Responsive Design",
    detail:
      "Layouts that work just as well on a phone and a tablet as they do on a desktop.",
  },
  {
    icon: "03",
    title: "Landing Pages",
    detail:
      "A single focused page for a product or service, complete with a working contact form.",
  },
  {
    icon: "04",
    title: "Bug Fixing",
    detail:
      "Fix the broken parts of an existing website and make the pages load faster.",
  },
];

/* ---------- 10) TESTIMONIALS -------------------------------------------- */
var testimonials = [
  {
    name: "Bilal Ahmed",
    role: "Owner, Bilal Traders",
    message:
      "The work was delivered on time and the website turned out exactly the way I described it. Communication was clear throughout.",
  },
  {
    name: "Sana Malik",
    role: "Classmate",
    message:
      "A huge help on our semester project. The way JavaScript concepts were explained finally made them click for me.",
  },
  {
    name: "Usman Sheikh",
    role: "Team Lead, TechSol",
    message:
      "Genuinely eager to learn during the internship and finished every assigned task ahead of the deadline.",
  },
];

/* ---------- 11) CONTACT CARDS ------------------------------------------- */
var contactInfo = [
  {
    icon: "@",
    label: "Email",
    value: "hassaan2980@gmail.com",
    link: "mailto:hassaan2980@gmail.com",
  },
  {
    icon: "#",
    label: "Phone",
    value: "+92 319 0459182",
  },
  { icon: "^", label: "Location", value: "Karachi, Pakistan", link: "#" },
  {
    icon: "*",
    label: "Freelance",
    value: "Available for work",
    link: "#contact",
  },
];

/* ---------- 12) CONTACT NOTE — the line and button under the cards ------- */
var contactNote = {
  text: "Email is the fastest way to reach me. I am open to internships, freelance projects and questions about code.",
  buttonText: "Send Me An Email",
};

/* ---------- 13) FOOTER --------------------------------------------------- */
var footerInfo = {
  about:
    "A computer science student building clean, accessible websites with HTML, CSS and JavaScript. Open to internships and junior front end roles.",
  linksHeading: "Quick Links",
  servicesHeading: "What I Do",
  contactHeading: "Get In Touch",
  ctaText: "Have a project in mind?",
  ctaSub: "I reply to every message, usually within a day.",
  ctaButton: "Start a conversation",
  owner: "Hassaan Mahmood", // the year is added automatically, so it never goes stale
  rights: "All rights reserved.",
  builtWith: "Built with HTML, CSS and vanilla JavaScript.",
};
