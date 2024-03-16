'use strict';

const navBtn = document.querySelector('.nav-btn');
const navbar = document.querySelector('.navbar');
const navClose = document.querySelector('.nav-close');

navBtn.addEventListener('click', () => navbar.classList.add('show-nav'));
navClose.addEventListener('click', () => navbar.classList.remove('show-nav'));
