/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, ScrollReveal, sr, alert*/

//$(document).foundation();



// Default overrides for all ScrollReveal elements
const defaults = {
  origin: 'left',
  duration: 1000,
  delay: 300,
  distance: '30%',
  viewFactor: 0.6,
  viewOffset: {
    top: 50
  }
};

// Default interval for nav links
const defaultInterval = 300;

// Nav Link options
const srLink = {
  container: '.sticky',
  origin: 'top',
  duration: 1000,
  scale: 1,
  viewOffset: {
    top: 0
  }
};

// Callout options
const srNameTitle = {
  duration: 600,
  delay: 0
};

// Portfolio image options
const srPortImg = {
  origin: 'bottom'
};

// Portfolio descriptions options for right side layout. Left side layout uses default settings
const srPortDescRight = {
  origin: 'right'
};

// Get In Touch options
const srGetInTouch = {
  origin: 'bottom'
};

// Contact Info options. Message form uses default options
const srContact = {
  origin: 'right'
};

// Initialize ScrollReveal
window.sr = ScrollReveal(defaults);
// Call ScrollReveal passing container and custom / default options
sr.reveal('.sr-link', srLink, defaultInterval);
sr.reveal('.sr-name-title', srNameTitle);
sr.reveal('.sr-port-img', srPortImg);
sr.reveal('.sr-port-desc-r', srPortDescRight);
sr.reveal('.sr-port-desc-l');
sr.reveal('.sr-get-in-touch', srGetInTouch);
sr.reveal('.sr-form');
sr.reveal('.sr-contact', srContact);
