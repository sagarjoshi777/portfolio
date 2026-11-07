/* =====================================================================
   YOUR CONTENT LIVES HERE  (the only file you need to edit regularly)
   ---------------------------------------------------------------------
   Rules for editing:
   - Keep the quotes "like this" and the commas , at the end of lines.
   - Lines starting with // are comments (notes for you, ignored by the browser).
   - To ADD an item to a list, copy one { ... } block and paste it below it.
   - To REMOVE an item, delete its whole { ... } block.
   ===================================================================== */

const PORTFOLIO = {

  /* ---------- BASIC INFO ---------- */
  name: "Sagar Joshi",
  hello: "Hi there, I'm",                       // small greeting above your name
  role: "Computer Engineer · Developer",         // line under your name
  tagline: "I love building things that work, understanding how they work, and learning something new every single day.",
  email: "its.sagarjoshi.com",              // EDIT: your real email
  initials: "SJ",                                // shown if the photo file is missing

  /* ---------- PHOTO & CV ---------- */
  photo: "assets/photo.jpg",                     // put your picture in the assets folder with this name
  cv: "assets/cv.pdf",                           // put your CV in the assets folder with this name
  cvFileName: "Sagar-Joshi-CV.pdf",              // name of the file when someone downloads it

  /* ---------- SOCIAL LINKS (shown under the buttons) ---------- */
  socials: [
    { label: "GitHub",   url: "https://github.com/its-sagarjoshi" },          // EDIT
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-username" }, // EDIT
    { label: "Email",    url: "mailto:sagarofficial6767@gmail.com" }              // EDIT
  ],

  /* ---------- TERMINAL ANIMATION ----------
     cmd = what gets "typed", out = lines printed as the result. */
  terminal: [
    { cmd: "whoami",           out: ["sagar-joshi  # computer engineer"] },
    { cmd: "cat languages.txt", out: ["C   C++   Python   HTML   CSS"] },
    { cmd: "ls ~/interests",   out: ["data-science/  devops/  linux/  open-source/"] },
    { cmd: "echo $MOOD",       out: ["curious, positive, always shipping :)"] }
  ],

  /* ---------- ABOUT ME (each line = one paragraph) ---------- */
  about: [
    "I'm Sagar, a computer engineer who enjoys turning ideas into working software. I started with C and C++, which taught me how computers really think, and I've been exploring wider ever since.",
    "I like solving problems with Python and data, working comfortably in the Linux terminal, and learning DevOps so the things I build can be shipped smoothly and reliably.",
    "I believe every bug is just a lesson in disguise. I'm always open to new projects, internships and good conversations about tech."
    // EDIT: make these yours: add your college, what you're proud of, your goals, etc.
  ],

  /* ---------- SKILLS ----------
     Each group has a title and a list of skills.
     Add a new group any time, for example:
     { group: "Databases", items: ["SQL", "SQLite"] }                */
  skills: [
    { group: "Programming",     items: ["C", "C++", "Python", "Bash"] },
    { group: "Web",             items: ["HTML", "CSS", "JavaScript"] },
    { group: "Data science",    items: ["NumPy", "Pandas", "Matplotlib", "Jupyter"] },
    { group: "Tools & DevOps",  items: ["Git", "GitHub", "Linux", "Docker", "CI/CD"] },
    { group: "Computer engineering", items: ["Data structures", "Algorithms", "Operating systems", "Networking"] }
  ],

  /* ---------- PROJECTS ----------
     title = name, desc = 1-2 sentences, tags = technologies used,
     repo = GitHub link, demo = live link (use "" if there is none).  */
  projects: [
    {
      title: "Data analysis project",                       // EDIT
      desc: "Cleaned and explored a real dataset with Python, then turned the findings into clear charts.",
      tags: ["Python", "Pandas", "Matplotlib"],
      repo: "https://github.com/your-username/project-one",
      demo: ""
    },
    {
      title: "Systems project in C/C++",                    // EDIT
      desc: "A low-level project, like a mini shell or memory allocator, built to understand how the OS works.",
      tags: ["C", "C++", "Linux"],
      repo: "https://github.com/your-username/project-two",
      demo: ""
    },
    {
      title: "DevOps pipeline",                             // EDIT
      desc: "A containerised app with automated tests and deployment that runs on every push to GitHub.",
      tags: ["Docker", "GitHub Actions", "Linux"],
      repo: "https://github.com/your-username/project-three",
      demo: ""
    }
    // To add another project, copy a block above, add a comma after the previous }, and paste here.
  ],

  /* ---------- JOURNEY / TIMELINE (newest first) ----------
     Use it for education, internships, courses, achievements.  */
  timeline: [
    { when: "2026",  title: "Learning DevOps & data science", place: "Self-study and projects", text: "Building projects on GitHub and growing my skills every day." },
    { when: "2023", title: "B.E. Computer Engineering",     place: "kantipur engineering college,ioe",       text: "Studying core computer engineering: algorithms, operating systems, networks." },  // EDIT year/college
    { when: "2023", title: "Wrote my first program",         place: "kantipur engineering college",    text: "Fell in love with C and the Linux command line." }
  ]
};
