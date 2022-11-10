'use strict';

let languageBar = document.querySelector('#languageBar'),
    en = document.querySelector('#en'),
    ua = document.querySelector('#ua'),
    ru = document.querySelector('#ru'),
    phoneHeader = document.querySelector('.phone'),
    mailHeader = document.querySelector('.mail'),
    phoneFooter = document.querySelector('.phone-footer'),
    mailFooter = document.querySelector('.mail-footer'),
    logotype = document.querySelector('.logotype'),
    titleHeader = document.querySelector('#titleHeader'),
    navList = document.querySelector('#navList'),
    mainAboutUs = document.querySelector('#mainAboutUs'),
    sectionMainDescription = document.querySelector('#sectionMainDescription'),
    buttonAboutUs = document.querySelector('#buttonAboutUs'),
    imgMainAboutUs = document.querySelector('#imgMainAboutUs'),
    mainServices = document.querySelector('#mainServices'),
    sectionCards = document.querySelector('#sectionCards'),
    cardImg = document.querySelector('.card-img'),
    cardTitle = document.querySelector('.card-title'),
    buttonCard = document.querySelector('.button-card'),
    mainContacts = document.querySelector('#mainContacts'),
    allLang = ['en', 'ua', 'ru'];

phoneHeader.innerHTML = passengerTransportation.phone;
phoneHeader.href = `tel:${passengerTransportation.phone}`;
phoneFooter.innerHTML = passengerTransportation.phone;
phoneFooter.href = `tel:${passengerTransportation.phone}`;

mail.innerHTML = passengerTransportation.mail;
mail.href = `mailto:${passengerTransportation.mail}`;
mailFooter.innerHTML = passengerTransportation.mail;
mailFooter.href = `mailto:${passengerTransportation.mail}`;

en.addEventListener('click', urlLanguage);
ua.addEventListener('click', urlLanguage);
ru.addEventListener('click', urlLanguage);

function urlLanguage() {
    let lang = this.textContent;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
};

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);

    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload(); 
    };

    document.querySelector('title').innerHTML = passengerTransportation['title'][hash];
    
    let mainMenuLoop =  passengerTransportation['mainMenu'][hash];
    for(let i = 0; i < mainMenuLoop.length; i++) {
        let list = document.createElement('li');
            list.innerHTML += mainMenuLoop[i];
            navList.append(list);
    };

    let articleHeaderLoop = passengerTransportation['articleHeader'][hash];
    for(let c = 0; c < articleHeaderLoop.length; c++) {   
        titleHeader.innerHTML =  `<span class="title">${articleHeaderLoop[0]}</span>`;
        titleHeader.innerHTML += `<span class="subtitle">${articleHeaderLoop[1]}</span>`;   
    };

    let mainAboutUsLoop = passengerTransportation['aboutUs'][hash];
    for(let x = 0; x < mainAboutUsLoop.length; x++) {   
        mainAboutUs.innerHTML = mainAboutUsLoop[0];
        sectionMainDescription.innerHTML =  mainAboutUsLoop[1];
        buttonAboutUs.innerHTML =  mainAboutUsLoop[2]; 
    };

    let mainServicesLoop = passengerTransportation['services'][hash]['mainTitle'];
    for(let a = 0; a < mainServicesLoop.length; a++) {   
        mainServices.innerHTML = mainServicesLoop[0];
    };

    let sectionCardsLoop = passengerTransportation['services'][hash]['card'];
    
    sectionCardsLoop.forEach((el, i) => {
        let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML += `
                <div class="card-img">
                    <img src="${sectionCardsLoop[i].imgSrc}" alt="NoImage">
                </div>
                
                <h3 class="card-title">${sectionCardsLoop[i].title}</h3>
                <p class="section-main-description">
                    ${sectionCardsLoop[i].description}
                </p>
                <button class="button-card">${sectionCardsLoop[i].btn}</button>
            `;

        sectionCards.append(card);
    });

    let contactsTitleLoop = passengerTransportation['contactsTitle'][hash];
    for(let y = 0; y < contactsTitleLoop.length; y++) {   
        mainContacts.innerHTML = contactsTitleLoop[0];
    };
   
}

changeLanguage();









































