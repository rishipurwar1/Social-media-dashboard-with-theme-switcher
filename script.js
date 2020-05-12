const body = document.querySelector('body');
const toggleBtn = document.getElementById('toggle-btn');
const social = document.getElementById('social');
const follower = document.getElementById('followers');
const dark = document.getElementById('dark');
const cardBg = document.querySelectorAll('.card-bg');
const number = document.querySelectorAll('.number');
const username = document.querySelectorAll('.user');
const overview = document.querySelectorAll('.overview h2');
const status = document.querySelectorAll('.heading h4');
const num = document.querySelectorAll('.count h3');
const instagramBg = document.getElementById('insta');


// Addevent Listeners
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('bg');
    social.classList.toggle('socialHeading');
    follower.classList.toggle('follower');
    dark.classList.toggle('mode');
    cardBg.forEach((card) => {
        card.classList.toggle('card');
    });
    number.forEach((number) => {
        number.classList.toggle('follower');
    });
    username.forEach((user) => {
        user.classList.toggle('name');
    });
    overview.forEach((heading) => {
        heading.classList.toggle('head');
    });
    status.forEach((item) => {
        item.classList.toggle('status');
    });
    num.forEach((item) => {
        item.classList.toggle('number');
    })
    instagramBg.classList.toggle('instabg')

    toggleBtn.classList.toggle('toggled');
    toggleBtn.classList.toggle('rounded');
});