
    const aboutLink = document.querySelector(".aboutDiv a");
    const techStackLink = document.querySelector(".techStackDiv a");
    const projectsLink = document.querySelector(".projectsDiv a");
    const contactLink = document.querySelector(".contactDiv a");

    aboutLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("aboutSection").scrollIntoView({
        behavior: "smooth",
      });
    });

    techStackLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("techContainer").scrollIntoView({
        behavior: "smooth",
      });
    });

    projectsLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("myProjects").scrollIntoView({
        behavior: "smooth",
      });
    });

    contactLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("contactMe").scrollIntoView({
        behavior: "smooth",
      });
    });

    setTimeout(() => {
      let helloWorld = document.getElementById("preloadertext");
      helloWorld.classList.add("show");
    },500)
    setTimeout(() => {
      let helloWorld = document.getElementById("preloadertext");
      helloWorld.classList.add("show2");
    },3000)


    var loader = document.getElementById("preloader");
    setTimeout(() => {
      loader.classList.add("easingOut");
      
    }, 4000);
    window.addEventListener("load",setTimeout(() => {
      loader.style.display = "none"
      document.body.style.overflow = "auto"
    },5500));


  


