<script>
  const socialLinks = {
    github: "https://github.com/exavadw",
    instagram: "https://www.instagram.com/henry.baror/",
    linkedin: "https://linkedin.com/in/henrybaror",
    resume: "./Resume.pdf",
    youtube: "https://www.youtube.com/@henrybaror",
    email: "mailto:ebaror@uci.edu"
  };

  const projects = [
    {
      title: "Speech-to-Text/Text-to-Speech",
      image: "/svelte-gh-pages/assets/project1.jpg",
      color: "#3d3d4d",
      link: "https://github.com/exavadw/stt-tts",
      date: "January 2025",
      description: "Real-time voice transcription and text synthesis using OpenAI's Whisper and Piper"
    },
    {
      title: "Eyewi",
      image: "/svelte-gh-pages/assets/project2.jpg",
      color: "#1a1a1a",
      link: "https://github.com/exavadw/Eyewi",
      date: "December 2024",
      description: "Instant Replay Camera for Sports"
    },
    {
      title: "TMGE",
      image: "/svelte-gh-pages/assets/project3.jpg",
      color: "#2c4a3e",
      link: "https://github.com/exavadw/TMGE",
      date: "March 2024 - May 2024",
      description: "Java-based game engine supporting multiple tile-matching games with custom UI framework"
    },
    {
      title: "Perfect Storm",
      image: "/svelte-gh-pages/assets/project4.jpg",
      color: "#4d4a1f",
      link: "https://github.com/exavadw/Perfect-Storm-API",
      date: "Aug 2020 - Aug 2021",
      description: "Source Code for Naruto Storm 4 Mod"
    }
  ];

  const professionalExperience = [
    {
      year: "2020 - Present",
      title: "The Light Brigade LLC | Webmaster/Audio Engineer",
      location: "Remote",
      description: `• Create and manage <a href="https://pillarsofwealth.com" target="_blank" rel="noopener">pillarsofwealth.com</a> using Wordpress, CSS/HTML5, JS, and DigitalOcean to host.
• Edit audio files used for audiobook containing site content hosted on Audible.`
    }
  ];

  const education = [
    {
      year: "September 2021 - Present",
      title: "University of California, Irvine",
      location: "Irvine, CA",
      description: "• B.S. Software Engineering Expected Graduation: June 2025"
    }
  ];

  const activities = [
    {
      year: "2024 - Present",
      title: "CA Tricking Demo Team | Performance Coordinator",
      location: "Orange County, CA",
      description: "• Organize performances with a team of martial arts trickers in our local community.\n• Emcee, communicate with event staff, and coordinate on-site so that events run smoothly.\n• Performed for audiences of up to 500: Orange County Japan Fair and Anime Expo Chibi."
    },
    {
      year: "2018 - Present",
      title: "Taekwondo | 3rd Degree Black Belt",
      location: "Ellicott City, MD / Irvine, CA",
      description: "• National Champion | 1st place at National Collegiate Taekwondo Association Nationals for Board Breaking in the Black Belt Division (2024)\n• Taekwondo/Summer Camp Instructor (Sept 2018 - Aug 2022)"
    },
    {
      year: "2018 - Present",
      title: "Self-Employed | Computer Sales Specialist",
      location: "MD, Orange County, CA",
      description: "• Sell and customize electronic hardware such as computer and video games both online and locally, meeting client needs for gaming, professional, and general use.\n• Provide technical advice to customers, ensuring compatibility and optimal performance of computer parts and components."
    },
    {
      year: "2022 - 2024",
      title: "UCI Jazz Band | Trombone Section Leader",
      location: "Irvine, CA",
      description: "• Coordinated schedules, led weekly practices, and organized/hosted band-wide social events."
    }
  ];
</script>

<style>
  @font-face {
    font-family: 'Chubbo';
    src: url('./fonts/Chubbo-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Supreme';
    src: url('./fonts/Supreme-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  :global(body) {
    margin: 0;
    padding: 2rem;
    font-family: "Supreme", system-ui, sans-serif;
    background-color: #2b2b2b;
    color: #ffffff;
  }

  .header {
    margin-bottom: 4rem;
  }

  h1 {
    font-size: 2.8rem;
    margin: 0;
    font-weight: bold;
    font-family: "Chubbo", system-ui, sans-serif;
  }

  .intro {
    max-width: 600px;
    margin: 1rem 0 2rem 0;
    color: #cccccc;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .social-links a {
    color: #ffffff;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  h2.section-title {
    font-family: "Chubbo", system-ui, sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 3rem 0 2rem 0;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .project-card {
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    transition: transform 0.2s;
    cursor: pointer;
    text-decoration: none;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    font-family: "Chubbo", system-ui, sans-serif;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  .project-date, .project-description {
    font-family: "Supreme", system-ui, sans-serif;
    font-weight: normal;
  }

  .project-date {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    font-weight: normal;
    opacity: 0.9;
  }

  .project-description {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    font-weight: normal;
    opacity: 0.9;
  }

  .experiments {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .experiment {
    display: flex;
    gap: 2rem;
  }

  .experiment-year {
    flex-shrink: 0;
    width: 80px;
    color: #cccccc;
  }

  .experiment-content {
    flex-grow: 1;
  }

  .experiment-title {
    font-family: "Chubbo", system-ui, sans-serif;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .experience-location {
    color: #cccccc;
    font-size: 0.9rem;
    margin-top: 0.2rem;
  }

  .experience-description {
    font-family: "Supreme", system-ui, sans-serif;
    color: #cccccc;
    line-height: 1.6;
    white-space: pre-line;
    margin-top: 0.5rem;
  }

  .experience-description :global(a) {
    color: #cccccc;
    text-decoration: underline;
    transition: opacity 0.2s;
  }

  .experience-description :global(a:hover) {
    opacity: 0.8;
  }

  .social-links a:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
</style>

<div class="header">
  <h1>Henry Bar-Or</h1>
  <p class="intro">Based in Irvine, CA, I'm a student studying Software Engineering and a National Taekwondo Champion.</p>
  <div class="social-links">
    <a href={socialLinks.github} target="_blank" rel="noopener">GitHub</a>
    <a href={socialLinks.instagram} target="_blank" rel="noopener">Instagram</a>
    <a href={socialLinks.linkedin} target="_blank" rel="noopener">LinkedIn</a>
    <a href={socialLinks.resume} target="_blank" rel="noopener">Resume</a>
    <a href={socialLinks.youtube} target="_blank" rel="noopener">YouTube</a>
    <a href={socialLinks.email}>Email</a>
  </div>
</div>

<h2 class="section-title">Work</h2>
<div class="projects">
  {#each projects as project}
    <a 
      href={project.link}
      class="project-card" 
      style="background-color: {project.color}"
      target="_blank"
      rel="noopener"
    >
      <div>{project.title}</div>
      <div class="project-date">{project.date}</div>
      <div class="project-description">{project.description}</div>
    </a>
  {/each}
</div>

<h2 class="section-title">Professional Experience</h2>
<div class="experiments">
  {#each professionalExperience as experience}
    <div class="experiment">
      <div class="experiment-year">{experience.year}</div>
      <div class="experiment-content">
        <div class="experiment-title">{experience.title}</div>
        <div class="experience-location">{experience.location}</div>
        <div class="experience-description">
          {@html experience.description}
        </div>
      </div>
    </div>
  {/each}
</div>

<h2 class="section-title">Education</h2>
<div class="experiments">
  {#each education as edu}
    <div class="experiment">
      <div class="experiment-year">{edu.year}</div>
      <div class="experiment-content">
        <div class="experiment-title">{edu.title}</div>
        <div class="experience-location">{edu.location}</div>
        <div class="experience-description">{edu.description}</div>
      </div>
    </div>
  {/each}
</div>

<h2 class="section-title">Activities</h2>
<div class="experiments">
  {#each activities as activity}
    <div class="experiment">
      <div class="experiment-year">{activity.year}</div>
      <div class="experiment-content">
        <div class="experiment-title">{activity.title}</div>
        <div class="experience-location">{activity.location}</div>
        <div class="experience-description">{activity.description}</div>
      </div>
    </div>
  {/each}
</div>
