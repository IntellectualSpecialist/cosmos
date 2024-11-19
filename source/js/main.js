import { initNavBurger } from './burger-menu';
import { initSlider } from './slider';
import { initFeaturesTabs } from './features-tabs';
import { initInfrastructureTabs } from './infrastructure-tabs';

window.addEventListener('DOMContentLoaded', () => {
  initNavBurger();
  initSlider();
  initFeaturesTabs();
  initInfrastructureTabs();
});
