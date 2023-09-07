export const NAV_ITEMS = ["about", "skills", "projects", "contact"];

export const SKILLS = [
  { name: "nodejs", display: "NodeJS" },
  { name: "react", display: "React" },
  { name: "typescript", display: "TypeScript" },
  { name: "javascript", display: "Javascript" },
  { name: "html", display: "HTML" },
  { name: "css", display: "CSS" },
  { name: "sql", display: "SQL Server" },
  { name: "mongo", display: "MongoDB" },
  { name: "git", display: "GIT" },
  { name: "python", display: "Python" },
];

export const EXTRAS = [
  { name: "express", display: "Express" },
  { name: "mui", display: "Material UI" },
  { name: "redux", display: "Redux" },
  { name: "socketio", display: "Socket.io" },
  { name: "npm", display: "NPM" },
  { name: "jira", display: "Jira" },
  { name: "linux", display: "Linux" },
  { name: "github", display: "GitHub" },
];

export const PROJECTS = [
  {
    name: "Facial Recognition App",
    description: "Private project for Claims Conference. Sorry!",
    url: "",
    image: "/projects/fr.png",
    repo: "",
  },
  {
    name: "Alternative create-react-app",
    url: "https://www.npmjs.com/package/create-react-vite",
    description: "Doesn't create-react-vite sound better?",
    image: "/logos/npm.svg",
    repo: "https://github.com/Ultragliass/create-react-vite",
  },
  {
    name: "My portfolio",
    description: "You're in it right now!",
    url: "https://github.com/Ultragliass/portfolio",
    image: "/projects/portfolio.png",
    repo: "https://github.com/Ultragliass/portfolio",
  },
  {
    name: "test4",
    url: "https://test.test",
    description: "test",
    image: "/placeholder.jpg",
    repo: "https://test.test",
  },
  {
    name: "test5",
    url: "https://test.test",
    description: "test",
    image: "/placeholder.jpg",
    repo: "https://test.test",
  },
  {
    name: "test6",
    url: "https://test.test",
    description: "test",
    image: "/placeholder.jpg",
    repo: "https://test.test",
  },
];

const MAIL_TO_DETAILS = {
  email: "michaelhahmigery@gmail.com",
  subject: "From the portfolio",
  body: "Hello,",
};

export const CONTACT = [
  {
    name: "linkedin",
    display: "LinkedIn",
    url: "https://www.linkedin.com/in/michael-hahmigery-464b661b8/",
  },
  { name: "github", display: "GitHub", url: "https://github.com/Ultragliass" },
  {
    name: "gmail",
    display: "Email",
    url: `mailto:${MAIL_TO_DETAILS.email}?subject=${encodeURIComponent(
      MAIL_TO_DETAILS.subject
    )}&body=${encodeURIComponent(MAIL_TO_DETAILS.body)}`,
  },
];
