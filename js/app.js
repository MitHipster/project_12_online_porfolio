/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, alert*/

$(document).foundation();

window.sr = ScrollReveal(
  {
//    origin: 'top',
    duration: 900,
    delay: 100,
    rotate: {
      x: 0, y: 0, z: 0
    },
    opacity: 0,
    scale: 1
  }
);
sr.reveal('.sr-links', 300);
