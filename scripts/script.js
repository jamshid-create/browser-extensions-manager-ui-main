import { data } from "../data/data.js";

const btnDayNight = document.getElementById('btn-day-night-change');
const extensionsEl = document.getElementsByClassName('extensions');
const bodyEl = document.querySelector('body');
const headerPageEl = document.querySelector('.header-page');
const logoImageEl = document.querySelector('.logo-image');
const imageIconEl = document.querySelector('.img-icon');
const headerNameEl = document.querySelector('.header-name');
const btnAllEl = document.getElementById('btn-all');
const btnActiveEl = document.getElementById('btn-active');
const btnInActiveEl = document.getElementById('btn-inactive');
const namesEl = document.getElementsByClassName('name');
const textsEl = document.getElementsByClassName('text');
const removeBtnsEl = document.getElementsByClassName('remove-btn')
const slidersEl = document.getElementsByClassName('slider');
const extensionContainerEl = document.querySelector('.extensions-container');
const toggleSwitchEl = document.getElementsByClassName('toggle-switch');

showExtensions();
activeToggle();

function addActiveForExtensions() {
  if (bodyEl.classList.contains('active')) {
    for (let i = 0; i < extensionsEl.length; i++) {
      extensionsEl[i].classList.add('active');
  }

    for (let i = 0; i < namesEl.length; i++) {
      namesEl[i].classList.add('active');
    }

    for (let i = 0; i < textsEl.length; i++) {
      textsEl[i].classList.add('active');
    }

    for (let i = 0; i < removeBtnsEl.length; i++) {
      removeBtnsEl[i].classList.add('active');
    }

    for (let i = 0; i < slidersEl.length; i++) {
      slidersEl[i].classList.add('active');
    }
  }
}

function activeToggle() {
  let slider = [];
  let index = 0;

  for (let i = 0; i < slidersEl.length; i++) {
    slider.push(slidersEl[i]);
  }

  data.forEach((d) => {
    if (d.isActive == true) {
      slider[index].classList.add('checked');
      index++;
    }
  });

  slider.forEach((s) => {
    s.addEventListener('click', () => {
      if (s.classList.contains('checked')) {
        s.classList.remove('checked');
      }
    });
  });

  
}



function switchDayNight() {
  bodyEl.classList.toggle('active');
  headerPageEl.classList.toggle('active');
  btnDayNight.classList.toggle('active');
  logoImageEl.classList.toggle('active');
  headerNameEl.classList.toggle('active');
  imageIconEl.classList.toggle('active');
  btnActiveEl.classList.toggle('active');
  btnAllEl.classList.toggle('active');
  btnInActiveEl.classList.toggle('active');


  for (let i = 0; i < extensionsEl.length; i++) {
    extensionsEl[i].classList.toggle('active');
  }

  for (let i = 0; i < namesEl.length; i++) {
    namesEl[i].classList.toggle('active');
  }

  for (let i = 0; i < textsEl.length; i++) {
    textsEl[i].classList.toggle('active');
  }

  for (let i = 0; i < removeBtnsEl.length; i++) {
    removeBtnsEl[i].classList.toggle('active');
  }

  for (let i = 0; i < slidersEl.length; i++) {
    slidersEl[i].classList.toggle('active');
  }
}

function changeIcon() {
  if(!bodyEl.classList.contains('active')){
    imageIconEl.src = ".././assets/images/icon-moon.svg";
  } else if (bodyEl.classList.contains('active')){
    imageIconEl.src = ".././assets/images/icon-sun.svg";
  }
}

btnDayNight.addEventListener('click', () => {
  switchDayNight();
  changeIcon();
});

function showExtensions() {
  let HTML = '';

  data.forEach((d, index) => {

    HTML += `
      <div class="extensions">
        <div class="top">
          <div>
            <img src="${d.logo}" alt="${d.name}">
          </div> 
          <div class="info-container">
            <div class="name" id="name">${d.name}</div>
            <p class="text">
              ${d.description}
            </p>
          </div>
        </div>
        <div class="bottom">
          <button class="remove-btn">Remove</button>
          <label class="toggle-switch">
            <input type="checkbox" class="toggle">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    `;
  });


  extensionContainerEl.innerHTML = HTML;
  activeToggle();
}


btnActiveEl.addEventListener('click', () => {
  btnAllEl.classList.remove('choose-btn');
  btnActiveEl.classList.add('choose-btn');
  btnInActiveEl.classList.remove('choose-btn');
  

  let HTML = '';

  data.forEach((d) => {
    if (d.isActive === true) {
      HTML += `
      <div class="extensions">
        <div class="top">
          <div>
            <img src="${d.logo}" alt="${d.name}">
          </div> 
          <div class="info-container">
            <div class="name" id="name">${d.name}</div>
            <p class="text">
              ${d.description}
            </p>
          </div>
        </div>
        <div class="bottom">
          <button class="remove-btn">Remove</button>
          <label class="toggle-switch">
            <input type="checkbox" class="toggle">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    `;
    }
  });

  extensionContainerEl.innerHTML = HTML;
  addActiveForExtensions();
  activeToggle();
});

btnInActiveEl.addEventListener('click', () => {
  btnAllEl.classList.remove('choose-btn');
  btnActiveEl.classList.remove('choose-btn');
  btnInActiveEl.classList.add('choose-btn');

  let HTML = '';

  data.forEach((d) => {
    if (d.isActive === false) {
      HTML += `
      <div class="extensions">
        <div class="top">
          <div>
            <img src="${d.logo}" alt="${d.name}">
          </div> 
          <div class="info-container">
            <div class="name" id="name">${d.name}</div>
            <p class="text">
              ${d.description}
            </p>
          </div>
        </div>
        <div class="bottom">
          <button class="remove-btn">Remove</button>
          <label class="toggle-switch">
            <input type="checkbox" class="toggle">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    `;
    }
  });

  extensionContainerEl.innerHTML = HTML;
  addActiveForExtensions();
});

btnAllEl.addEventListener('click', () => {
  showExtensions();
  btnAllEl.classList.add('choose-btn');
  btnActiveEl.classList.remove('choose-btn');
  btnInActiveEl.classList.remove('choose-btn');
  addActiveForExtensions();
  
});





