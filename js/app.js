/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, ScrollReveal, sr, alert*/

$(document).foundation();

// Default overrides for all ScrollReveal elements
const defaults = {
  origin: 'left',
  duration: 750,
  delay: 500,
  distance: '100px'
};

const defaultInterval = 300;

const srLink = {
  origin: 'bottom',
  duration: 1000,
  distance: '40px',
  viewOffset: {
    bottom: 50
  }
};

const srNameTitle = {
  duration: 600,
  delay: 0
};

const srPortImg = {
  origin: 'bottom'
};

const srPortDescRight = {
  origin: 'right'
};

window.sr = ScrollReveal(defaults);
sr.reveal('.sr-link', srLink, defaultInterval);
sr.reveal('.sr-name-title', srNameTitle);
sr.reveal('.sr-port-img', srPortImg);
sr.reveal('.sr-port-desc-r', srPortDescRight);
sr.reveal('.sr-port-desc-l');
