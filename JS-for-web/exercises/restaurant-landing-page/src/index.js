import './style.css';
import _ from 'lodash';
// Images must be default imported
import hiveDecorPath from '../resources/honeycomb.svg';
import beePath from '../resources/bee.svg';
import drippingPath from '../resources/dripping.png';


const addImgToBtn = function () {
    const coverBtns = document.querySelectorAll('.cover');
    console.log(coverBtns);
    coverBtns.forEach((el) => {
        console.log('hi');
        const img = document.createElement('img');
        img.classList.add('dripping');
        img.src = drippingPath;
        el.appendChild(img);
    })
}();

// function activateButton(state = 'home' | 'menu' | 'contact') {
//     const img = document.createElement('img');
//     img.src = drippingPath;
//     img.classList.add('dripping');

//     let target = null;
//     switch (state) {
//         case 'home':
//             target = document.getElementById('coverhome');
//             break;
//         case 'menu':
//             target = document.getElementById('covermenu');
//             break;
//         case 'contact':
//             target = document.getElementById('covercontact');
//             break;
//     }

//     target.appendChild(img);
//     console.log(target);
// }


const renderHomepage = function () {

    // Nav buttons rendering
    // activateButton('home');

    // Parent containers
    const content = document.getElementById('content');
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

    // Child -- Heading container
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

    // Child -- Review outer
    const reviewInner = document.createElement('div');
    const reviewInnerReviewParagraph = document.createElement('p');
    const reviewInnerCustomerParagraph = document.createElement('p');

    reviewInnerReviewParagraph.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    reviewInnerCustomerParagraph.textContent = 'Goldilocks';

    reviewInnerReviewParagraph.classList.add('review');
    reviewInnerCustomerParagraph.classList.add('customer');
    reviewInner.classList.add('comb-inner');
    reviewInner.classList.add('review-inner');

    reviewInner.appendChild(reviewInnerReviewParagraph);
    reviewInner.appendChild(reviewInnerCustomerParagraph);
    reviewOuter.appendChild(reviewInner);

    // Child -- Hours outer
    const infoHoursInner = document.createElement('div');
    const infoHoursInnerH3 = document.createElement('h3');
    const sunday = document.createElement('p');
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');

    infoHoursInner.classList.add('comb-inner');
    infoHoursInner.classList.add('info-hours-inner');
    infoHoursInnerH3.classList.add('hours');
    sunday.classList.add('sunday');
    monday.classList.add('monday');
    tuesday.classList.add('tuesday');
    wednesday.classList.add('wednesday');
    thursday.classList.add('thursday');
    friday.classList.add('friday');
    saturday.classList.add('saturday');

    infoHoursInnerH3.textContent = 'Hours';
    sunday.textContent = 'Sunday: 8am - 8pm';
    monday.textContent = 'Monday: 6am - 6pm';
    tuesday.textContent = 'Tuesday: 6am - 6pm';
    wednesday.textContent = 'Wednesday: 6am - 6pm';
    thursday.textContent = 'Thursday: 6am - 10pm';
    friday.textContent = 'Friday: 6am - 10pm';
    saturday.textContent = 'Saturday: 8am - 10pm';

    infoHoursInner.appendChild(infoHoursInnerH3);
    infoHoursInner.appendChild(sunday);
    infoHoursInner.appendChild(monday);
    infoHoursInner.appendChild(tuesday);
    infoHoursInner.appendChild(wednesday);
    infoHoursInner.appendChild(thursday);
    infoHoursInner.appendChild(friday);
    infoHoursInner.appendChild(saturday);
    infoHoursOuter.appendChild(infoHoursInner);


    // Child -- Location outer
    const infoLocationInner = document.createElement('div');
    const infoLocationInnerH3 = document.createElement('h3');
    const infoLocationInnerAddress = document.createElement('p');

    infoLocationInnerH3.classList.add('location');
    infoLocationInnerAddress.classList.add('address');
    infoLocationInner.classList.add('comb-inner');
    infoLocationInner.classList.add('info-location-inner');

    infoLocationInnerH3.textContent = 'Location';
    infoLocationInnerAddress.textContent = '123 Forest Drive, Forestville, Maine';

    infoLocationInner.appendChild(infoLocationInnerH3);
    infoLocationInner.appendChild(infoLocationInnerAddress);
    infoLocationOuter.appendChild(infoLocationInner);

    // Add all
    content.appendChild(headingContainer);
    content.appendChild(reviewOuter);
    content.appendChild(infoHoursOuter);
    content.appendChild(infoLocationOuter);
    content.appendChild(hiveDecor);

}();

