'use strict';

// Selected elements
const timeLapseLinks = document.querySelectorAll('.timeLapse--link');
const workHrs = document.querySelector('.work--summary--hrs');
const workSpan = document.querySelector('.work--summary--previous');
const playHrs = document.querySelector('.play--summary--hrs');
const playSpan = document.querySelector('.play--summary--previous');
const studyHrs = document.querySelector('.study--summary--hrs');
const studySpan = document.querySelector('.study--summary--previous');
const exerciseHrs = document.querySelector('.exercise--summary--hrs');
const exerciseSpan = document.querySelector('.exercise--summary--previous');
const socialHrs = document.querySelector('.social--summary--hrs');
const socialSpan = document.querySelector('.social--summary--previous');
const selfCareHrs = document.querySelector('.selfCare--summary--hrs');
const selfCareSpan = document.querySelector('.selfCare--summary--previous');

timeLapseLinks.forEach(el => {
    el.addEventListener('click', function () {
        alert(`${el.textContent} was clicked!!`);
    });
});