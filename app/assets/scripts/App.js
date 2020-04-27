import '../styles/styles.css';

import RevealOnScroll from './modules/RevealOnScroll'

// for hot module replacement of webpack dev server
if (module.hot) {
  module.hot.accept();
}

/* 
* In fact I prefer document.querySelector. 
* Here's just a simple showcase for using jQuery :)
*/

$(document).ready(function() {
  
  // for better demo experience
  $('a[href="#"]').on("click", function(event) {
    event.preventDefault();
  });

  $('.nav__hamburger').click(function() {
    $('.nav').toggleClass('change');
  });

  // make lightbox appear faster, and connect the last one and the first one.
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  /*
  * My component in previous project is used here. It's good at performance 
  * efficiency (through lodash and removing event listener after revealing) 
  * and suitable after resizing the window.
  */
  new RevealOnScroll(document.querySelectorAll('.gallery__img--row-one'),75);
  new RevealOnScroll(document.querySelectorAll('.gallery__img--row-two'),75);


  // change books beside the accordion
  $('.writers-accordion').click(function(event) {
     if(event.target.id.split('-')[0] === 'button') {
       $('#book-1').attr('src', 'assets/images/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
       $('#book-2').attr('src', 'assets/images/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
    }

  });

});
