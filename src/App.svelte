<script>
  import { onMount } from 'svelte';

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
      date: "Dec 2024 - Jan 2025",
      description: "• Implemented a web application using the Svelte framework and Rust back-end to convert speech to text and text to speech.\n• Used piper-rs for text-to-speech and whisper models for speech-to-text."
    },
    {
      title: "Eyewi",
      image: "/svelte-gh-pages/assets/project2.jpg",
      color: "#1a1a1a",
      link: "https://github.com/exavadw/Eyewi",
      date: "Nov - Dec 2024",
      description: "• Created an instant replay application for athletes with Python designed to capture, manage and display videos.\n• Feeds are saved locally or uploaded to Google Drive using the Google Cloud API.\n• Runs on Windows, Mac, and Linux including Raspberry Pi.\n• Currently used at a local business with expansion planned."
    },
    {
      title: "TMGE",
      image: "/svelte-gh-pages/assets/project3.jpg",
      color: "#2c4a3e",
      link: "https://github.com/exavadw/TMGE",
      date: "March - May 2023",
      description: "• Collaborated with a team of 5 to create an engine for tile-based games, such as Tetris and Bejeweled, in Java.\n• Integrated the game engine into the abstraction layer and authored engine design documentation."
    },
    {
      title: "Perfect Storm",
      image: "/svelte-gh-pages/assets/project4.jpg",
      color: "#4d4a1f",
      link: "https://github.com/exavadw/Perfect-Storm-API",
      date: "Aug 2020 - Aug 2021",
      description: "• Led a team of 3 programmers to create a mod of Naruto Storm 4 adding new content and fixing bugs.\n• Reverse engineered x86 binary without any source code, using x86 Assembly, and C/C++.\n• Mod received millions of views with international showcase."
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
      year: "Oct 2024 - Present",
      title: "CA Tricking Demo Team | Performance Coordinator",
      location: "Orange County, CA",
      description: "• Organize performances with a team of martial arts trickers in our local community.\n• Emcee, communicate with event staff, and coordinate on-site so that events run smoothly.\n• Performed for audiences of up to 500: Orange County Japan Fair and Anime Expo Chibi."
    },
    {
      year: "Sept 2018 - Present",
      title: "Taekwondo | 3rd Degree Black Belt",
      location: "Ellicott City, MD / Irvine, CA",
      description: "• National Champion | 1st place at National Collegiate Taekwondo Association Nationals for Board Breaking in the Black Belt Division (2024)\n• Taekwondo/Summer Camp Instructor (Sept 2018 - Aug 2022)"
    },
    {
      year: "Jan 2022 - June 2024",
      title: "UCI Jazz Band | Trombone Section Leader",
      location: "Irvine, CA",
      description: "• Coordinated schedules, led weekly practices, and organized/hosted band-wide social events."
    }
  ];

  // Add new skills section
  const skills = [
    {
      category: "Languages",
      items: "• C++, Python, Java, Javascript, Typescript, Rust, C, x86 Assembly"
    },
    {
      category: "Tools/Frameworks",
      items: "• VS Code, Cursor, HTML, CSS, Svelte, Wordpress, DigitalOcean, IDA Pro, Cheat Engine, Turborepo"
    },
    {
      category: "Libraries",
      items: "• SDL2, Piper-RS, Whisper, Google Cloud API, IMGUI, tkinter"
    }
  ];

  let currentSlide = 0;
  let isMobile = false;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;

  function updateIsMobile() {
    isMobile = window.innerWidth < 768;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % projects.length;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + projects.length) % projects.length;
  }

  function handleTouchStart(e) {
    isDragging = true;
    startX = e.touches[0].clientX;
    currentX = startX;
  }
  
  function handleTouchMove(e) {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    e.preventDefault(); // Prevent scrolling while swiping
  }
  
  function handleTouchEnd(e) {
    if (!isDragging) return;
    
    const swipeThreshold = 50;
    const swipeDistance = currentX - startX;
    
    // Only handle as swipe if moved more than threshold
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      // Prevent click when swiping
      e.preventDefault();
      e.stopPropagation();
    }
    
    isDragging = false;
    startX = 0;
    currentX = 0;
  }

  function handleClick(e, link) {
    // Only open link if not dragging
    if (!isDragging) {
      window.open(link, '_blank');
    }
    e.preventDefault();
  }

  onMount(() => {
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  });
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
    white-space: pre-line;
    text-align: left;
    width: 100%;
    padding: 0 1rem;
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

  @media (max-width: 768px) {
    .projects {
      display: block;
      position: relative;
      height: 300px;
      margin: 0 auto 4rem auto;
    }

    .carousel-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .project-card {
      position: absolute;
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      transition: transform 0.3s ease-in-out;
      opacity: 0;
      pointer-events: none;
    }

    .project-card.active {
      opacity: 1;
      pointer-events: all;
      transform: translateX(0);
    }

    .project-card.prev {
      transform: translateX(-100%);
    }

    .project-card.next {
      transform: translateX(100%);
    }

    .carousel-button {
      position: absolute;
      bottom: 1rem;
      top: auto;
      transform: none;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: white;
      font-size: 1.5rem;
      z-index: 2;
    }

    .carousel-button:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .carousel-button.prev {
      left: 10px;
    }

    .carousel-button.next {
      right: 10px;
    }

    .carousel-dots {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 1rem;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      cursor: pointer;
    }

    .dot.active {
      background: white;
    }
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
{#if isMobile}
  <div class="projects">
    <div class="carousel-container"
      on:touchstart={handleTouchStart}
      on:touchmove={handleTouchMove}
      on:touchend={handleTouchEnd}
    >
      {#each projects as project, i}
        <a 
          href={project.link}
          class="project-card {i === currentSlide ? 'active' : i === (currentSlide - 1 + projects.length) % projects.length ? 'prev' : 'next'}"
          style="background-color: {project.color}"
          on:click={(e) => handleClick(e, project.link)}
          rel="noopener"
        >
          <div>{project.title}</div>
          <div class="project-date">{project.date}</div>
          <div class="project-description">{project.description}</div>
        </a>
      {/each}
      <button class="carousel-button prev" on:click={prevSlide}>←</button>
      <button class="carousel-button next" on:click={nextSlide}>→</button>
    </div>
    <div class="carousel-dots">
      {#each projects as _, i}
        <div 
          class="dot {i === currentSlide ? 'active' : ''}"
          on:click={() => currentSlide = i}
        ></div>
      {/each}
    </div>
  </div>
{:else}
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
{/if}

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

<h2 class="section-title">Skills</h2>
<div class="experiments">
  {#each skills as skill}
    <div class="experiment">
      <div class="experiment-year">{skill.category}</div>
      <div class="experiment-content">
        <div class="experience-description">{skill.items}</div>
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
