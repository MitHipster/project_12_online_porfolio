/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, ScrollReveal, sr, alert*/

$(document).foundation();

// Default overrides for all ScrollReveal elements
const defaults = {
  origin: 'left',
  duration: 300,
  delay: 500,
  distance: '600px',
  scale: 1
};

const defaultInterval = 300;

const srLinks = {
  origin: 'bottom',
  duration: 1000,
  distance: '40px'
};

const srNameTitle = {
  origin: 'left',
  duration: 500,
  distance: '40px',
  delay: 0
};

window.sr = ScrollReveal(defaults);
sr.reveal('.sr-links', srLinks, defaultInterval);
sr.reveal('.sr-name-title', srNameTitle, 0);
