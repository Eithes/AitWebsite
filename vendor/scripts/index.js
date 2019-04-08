import './picturefill';

import './feedback';
import './order';
import './menu';
import './components/careouselBox';
import './components/search';
import './components/upArrow';
import './parallax/headerParallax';
import './parallax/photoesParallax';

import Slider from './components/Slider';
import showMap from './map/map';

if (document.querySelector('.slider')) {
  const slider = new Slider({ slider: document.querySelector('.slider') });
  slider.startAutoSlide(5000);
}

showMap();
