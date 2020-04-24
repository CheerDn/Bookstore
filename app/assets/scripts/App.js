import '../styles/styles.css';
import $ from 'jquery';
import lightbox from 'lightbox2'

import RevealOnScroll from './modules/RevealOnScroll'

//for hot module replacement of webpack dev server
if (module.hot) {
  module.hot.accept();
}

/* 
* In fact I prefer document.querySelector. 
* Here's just a trivial showcase for using jQuery :)
*/

$(document).ready(function() {
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

});
