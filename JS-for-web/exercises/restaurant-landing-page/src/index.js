import './style.css';
import _ from 'lodash';
// Images must be default imported
import hiveDecorPath from '../resources/honeycomb.svg';
import beePath from '../resources/bee.svg';

const renderHomePage = function () {
    // Parent containers
    const body = document.querySelector('body');
    const headingContainer = document.createElement('div');
    const reviewOuter = document.createElement('div');
    const infoHoursOuter = document.createElement('div');
    const infoLocationOuter = document.createElement('div');
    const hiveDecor = document.createElement('img');

    headingContainer.classList.add('heading-container');
    reviewOuter.classList.add('comb-outer');
    reviewOuter.classList.add('review-outer');
    infoHoursOuter.classList.add('comb-outer');
    infoHoursOuter.classList.add('info-hours-outer');
    infoLocationOuter.classList.add('comb-outer');
    infoLocationOuter.classList.add('info-location-outer');
    hiveDecor.classList.add('decorations');
    hiveDecor.classList.add('hive');
    hiveDecor.src = hiveDecorPath;

    // Child elements
    const beeLeft = document.createElement('img');
    const beeRight = document.createElement('img');
    const heading = document.createElement('div');
    const headingH1 = document.createElement('h1');
    
    headingH1.textContent = "Beary's Breakfast Bar";
    heading.classList.add('heading');
    beeLeft.src = beePath;
    beeLeft.classList.add('decorations');
    beeLeft.classList.add('bee-left');
    beeRight.src = beePath;
    beeRight.classList.add('decorations');
    beeRight.classList.add('bee-right');

    heading.appendChild(headingH1);

    headingContainer.appendChild(beeLeft);
    headingContainer.appendChild(beeRight);
    headingContainer.appendChild(heading);

    // Add all
    body.appendChild(headingContainer);
    body.appendChild(reviewOuter);
    body.appendChild(infoHoursOuter);
    body.appendChild(infoLocationOuter);
    body.appendChild(hiveDecor);

}();

