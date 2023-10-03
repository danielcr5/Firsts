// hier selecteer ik de stages button


// function toggleDarkMode() {
    
//   }
  

  // DARK MODE
// Onder selecteer ik het element met de class "dark-mode-toggle", knop voor dark mode.
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// BRON: MDN
// BRON: HULP VAN SEP DUIKERSLOOT
// Wanneer er op de donkere modus knop wordt geklikt, voeg ik of verwijder ik de class "dark-mode" van de body.
// Dit schakelt tussen de donkere en lichte modus.
darkModeToggle.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-mode');
    console.log("toggled dark mode");

});





// JAVASCRIPT VOOR HET MENU
// Ik selecteer het icoontje voor het menu.
const menuIcon = document.querySelector('.menu-icon');

// Ik selecteer het menu zelf.
const menu = document.querySelector('.menu');

// Wanneer er op het menu-icoontje wordt geklikt, toon ik of
//  verberg ik het menu door de "display" stijl aan te passen.
menuIcon.addEventListener('click', () => {

  // Dit is als een schakelaar voor het menu. Als het menu op dit
  //  moment te zien is (als "block"), dan maakt deze regel het 
  // onzichtbaar (verbergt het). Maar als het menu niet te zien is
  //  (als iets anders dan "block"), dan maakt deze regel het zichtbaar
  //  (toont het).

  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Hier zeg ik we dat ik wil weten wanneer ergens op de hele
// webpagina wordt geklikt.
document.addEventListener('click', (e) => {

  // Nu, als er ergens wordt geklikt, wil ik controleren of 
  // het geklikte ding niet binnen het menu zit en niet het
  //  menu-icoontje zelf is.
  if (!menu.contains(e.target) && e.target !== menuIcon) {
    menu.style.display = 'none';
  }
  // Ik controleer of het geklikte ding niet deel uitmaakt van 
  // het menu.
});


// Hier maak ik variabelen aan en selecteer ik de buttons
var audioElements = document.querySelectorAll(".audio");
var playButtons = document.querySelectorAll("nav>img:nth-child(3)");
var toggleButtons = document.querySelectorAll("nav>button:first-of-type");


// Hier zeg ik dat ik voor elk knopje in de lijst van knopjes
//  (toggleButtons) iets willen doen.
toggleButtons.forEach(function (button, index) {

  //Ik vertel het programma dat wanneer er op een knopje 
  // wordt geklikt, er iets moet gebeuren.
    button.addEventListener("click", function () {

      // Ik maak een "audio" variabele die we koppelen aan 
      // het bijbehorende geluidselement in de lijst van geluiden
      //  (audioElements). We weten welk geluid we moeten gebruiken 
      // door naar dezelfde positie in de lijst te kijken als het 
      // knopje waarop is geklikt (aangegeven door index).
        var audio = audioElements[index];
        var playButton = playButtons[index];

        if (audio.paused) {
            audio.play();
            playButton.src = "/images/pause-button.png"; // Change to a pause button image
        } else {
            audio.pause();
            playButton.src = "/images/play-button.png"; // Change back to the play button image
        }
    });
});


//  Function om te checken of element in viewport zit

function isInViewport(element) {

    // BRON: MDN 
      // Haal de afmetingen van het element op, zoals de bovenkant,
      //  onderkant, links en rechts
    const rect = element.getBoundingClientRect();
    return (

  // Controleer of de bovenkant van het element zich boven de onderkant van het venster bevindt
  // en of de linkerzijde van het element zich links van de rechterzijde van het venster bevindt
  // en of de onderkant van het element zich onder de bovenkant van het venster bevindt
  // en of de rechterzijde van het element zich rechts van de linkerzijde van het venster bevindt
      rect.top >= 0 &&
      rect.left >= 0 && 
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  } 

  // Function to handle scroll event
  function handleScroll() {
    const cards = document.querySelectorAll('.cards-section, .page2');
    const video = document.querySelector('.scroll-effect');

    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });

    if (isInViewport(video)) {
      video.style.opacity = '1';
      video.style.transform = 'translateY(0)';
    }
  }

  // Add a scroll event listener to trigger the animation
  window.addEventListener('scroll', handleScroll);

  // Trigger the animation once on page load
  if (window.location.href === 'index.html') {
    handleScroll()
  };


  document.querySelectorAll('header button').forEach(function(button) {
    button.addEventListener('click', function() {
      const textElements = document.querySelectorAll('body *');
      
      textElements.forEach(function(element) {
        element.classList.toggle('party-mode');
      });
    });
  });

     
  function togglePartyMode() {
    const headers = document.querySelectorAll('.party-mode-toggle');
    headers.forEach((header) => {
      header.classList.toggle('party-mode');
    });
  }
  
  // Add a click event listener to all "Party Mode" buttons with the party-mode-button class
  const partyModeButtons = document.querySelectorAll('.party-mode-button');
  partyModeButtons.forEach((button) => {
    button.addEventListener('click', togglePartyMode);
  });



const stagesButton = document.querySelector('.grid-intro button:nth-child(2)');

// hier selecteer ik de classes van de stages en timetable
const timelineGridWrapper = document.querySelector('.timeline-grid-wrapper');
const bigListSection = document.querySelector('.big-list');

if (window.location.href === 'line-up.html') {
// Add a click event listener to the STAGES button
stagesButton.addEventListener('click', () => {
  // Toggle the 'hidden' class to hide/show elements
  console.log("button clicked")
  timelineGridWrapper.classList.toggle('hidden');
  bigListSection.classList.toggle('hidden');
  
});

// Initially hide the big-list section
bigListSection.classList.add('hidden');

}