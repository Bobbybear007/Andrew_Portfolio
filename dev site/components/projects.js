document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.querySelector(".projects-grid");
  
    const projects = [

        {
            title: "Star Trek Designs in Unreal Engine",
            description: "Explore the work of creating my own Star Trek Sets, blending Starfleet design with Unreal Engine 5's cutting-edge technology.",
            image: "assets/images/ststuff/Andromeda1.png",
            url: "https://dev.andrewzambazos.com/projects/StarTrekUE5"
          },

        
          {
            title: "Star Wars Set Design in Unreal Engine",
            description: "Look at this Star Wars level I made in Unreal Engine 5",
            image: "assets/images/StarWars/Corridor3.jpg",
            url: "https://dev.andrewzambazos.com/projects/StarWarsUE5"
          },


          {
            title: "An Old Mine / New Hideout",
            description: "An old mine converted into a hideout for a group of rebels. First project in UEFN.",
            image: "assets/images/Hideout/Hideout1.png",
            url: "https://dev.andrewzambazos.com/projects/Hideout"
          },
      
      
      
      
      
      
      
      
        {
        title: "STFU: Game Jam Entry",
        description: "A puzzle-platformer where you manipulate time and collaborate with your past self to fix temporal anomalies.",
        image: "assets/images/STFU/STFU-Thumbnail2.jpg",
        url: "https://dev.andrewzambazos.com/projects/STFU"
      },

      {
        title: "Mr. Brown's Smuggle Run: Game Jam Entry",
        description: "A stealth game where you smuggle contraband into prisons while evading security.",
        image: "assets/images/MrB/MrB.jpg",
        url: "https://dev.andrewzambazos.com/projects/Browns"
      },



      {
        title: "Fallout Modding",
        description: "A look into my work as a level designer on fallout mods.",
        image: "assets/images/falloutwork/PrePromo2.PNG",
        url: "https://dev.andrewzambazos.com/projects/Fallout"
      },
     
    ];
  
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <div class="window-bar">
          <span class="window-btn red"></span>
          <span class="window-btn yellow"></span>
          <span class="window-btn green"></span>
          <div class="project-url">${project.url}</div>
        </div>
        <img src="${project.image}" alt="${project.title}">
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;
      projectsContainer.appendChild(card);
    });
  });
  