import { desktopWidth } from './const';

const tabsContainerElements = document.querySelectorAll('.js-tabs');
const bodyElement = document.querySelector('.page__body');

const ininTabs = (tabs, currentTab = 0) => {

  const buttonTrigger = tabs.querySelector('.tabs__trigger');
  const tabButtonsListElement = tabs.querySelector('.tabs__list');
  const tabButtonsElements = tabButtonsListElement.querySelectorAll('.tabs__button');
  const tabsElements = tabs.querySelectorAll('.tabs__tab');


  const updateActiveButton = () => {
    tabButtonsElements.forEach((tab) => {
      tab.classList.remove('tabs__button--active');
    });
    tabButtonsElements[currentTab].classList.add('tabs__button--active');
  };

  const updateTab = () => {
    updateActiveButton();
    tabsElements.forEach((tab) => {
      const currentId = tab.dataset.tabId;
      if (Number(currentId) === currentTab) {
        tab.classList.add('tabs__tab--current');
      } else {
        tab.classList.remove('tabs__tab--current');
      }
    });
  };

  const onTabButtonClick = (evt) => {
    if (evt.target.matches('.tabs__button')) {
      currentTab = Number(evt.target.dataset.tabId);
      updateTab();
      tabButtonsListElement.classList.add('tabs__list--hidden');
      buttonTrigger.textContent = evt.target.textContent;
    }
  };

  function onBodyClick(evt) {
    if (evt.target.closest('.tabs__list-wrapper')) {
      evt.stopPropagation();
    } else {
      tabButtonsListElement.classList.add('tabs__list--hidden');
    }
  }

  const onTriggerClick = () => {
    tabButtonsListElement.classList.toggle('tabs__list--hidden');

    if (!tabButtonsListElement.classList.contains('tabs__list--hidden')) {
      bodyElement.addEventListener('click', onBodyClick);
    } else {
      bodyElement.removeEventListener('click', onBodyClick);
    }
  };

  const registerTabButtonEvents = () => {
    tabButtonsListElement.addEventListener('click', onTabButtonClick);
  };

  updateTab();
  registerTabButtonEvents();
  buttonTrigger.addEventListener('click', onTriggerClick);

  if (window.innerWidth < desktopWidth) {
    bodyElement.removeEventListener('click', onBodyClick);
  }
};

const initAllTabs = () => {
  if (tabsContainerElements) {
    tabsContainerElements.forEach((item) => {
      let currentTab = 0;
      if (item.classList.contains('js-tabs-features')) {
        currentTab = 4;
      }
      ininTabs(item, currentTab);
    });
  }
};

export { initAllTabs };
