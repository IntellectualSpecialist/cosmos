let currentTab = 4;
const featuresTabsElement = document.querySelector('.js-tabs-features');
let tabButtonsListElement;
let tabButtonsElements;
let tabsElements;
let buttonTrigger;
const bodyElement = document.querySelector('.page__body');

if (featuresTabsElement) {
  buttonTrigger = featuresTabsElement.querySelector('.tabs__trigger');
  tabButtonsListElement = featuresTabsElement.querySelector('.tabs__list');
  tabButtonsElements = tabButtonsListElement.querySelectorAll('.tabs__button');
  tabsElements = featuresTabsElement.querySelectorAll('.tabs__tab');
}

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

const initFeaturesTabs = () => {
  if (featuresTabsElement) {
    updateTab();
    registerTabButtonEvents();
    buttonTrigger.addEventListener('click', onTriggerClick);
  }
};

export { initFeaturesTabs };
