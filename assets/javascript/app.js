

class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.12;
  musicFadeIn = 4000;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];
  brandDescription = ['UD Cheats', 'Trusted Owners', 'Been In Copy Community Since 2022', 'Free Leaks', 'Best 2024 Gorilla Tag QMODS', "i know where you live :)", "Please Boost The Discord", "Buy Our Cheats", "Leaks", "Cracks", "And More :)"];
  UpcomingProjects = ['Watch Mod Menu [FREE]', 'Fortnite Spoofer [FREE]', 'Fortnite Cheat [PAID]', 'CS2 Cheat [PAID]', "EXTERNAL Gorilla Tag [PAID?]" ];

  displayUpcomingProjects() {
    const upcomingProjectsContainer = document.getElementById('upcoming-projects');

    if (!upcomingProjectsContainer) return;

    this.UpcomingProjects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.textContent = project;
      upcomingProjectsContainer.appendChild(projectElement);
    });
  }


  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = urls[counter];

        document.getElementsByTagName('head')[0].appendChild(link);
      } else counter = 0;

      ++counter;
    }, delay);
  };
}

const app = new _app();

app.displayUpcomingProjects();

