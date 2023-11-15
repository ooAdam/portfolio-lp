
const getStartedButton = document.querySelector('#get-started-button');
const aboutMeSection = document.querySelector('#about-me-section');

getStartedButton.addEventListener('click', () => {
  aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});
