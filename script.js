
const apiUrl = 'https://api.nasa.gov/planetary/apod?';
const apiKey = 'api_key=euBoeTcP81SdVRxfcbjbD3gPtpXukMIBla6Uox9i'
let currentDate;
let getDay = document.querySelector('#inputDay');
let getMonth = document.querySelector('#inputMonth');
let getYear = document.querySelector('#inputYear');
const mainButton = document.querySelector('#mainButton');
let toBeFilled = document.querySelector('#toBeFilled')

let imageTitle = document.querySelector('#imageTitle');
let imageExplanation = document.querySelector('#imageExplanation');
let image = document.querySelector('#image')
let newParagraph = document.createElement('p');


mainButton.addEventListener('click', getImage);

function getImage(){
    let day = getDay.value;
    let month = getMonth.value;
    let year = getYear.value;
    currentDate = `${year}-${month}-${day}`;
    let apiDate = `&date=${currentDate}`
    let completeUrl = `${apiUrl}${apiKey}${apiDate}`
    // console.log(completeUrl);

    fetch(completeUrl)
    .then((response) => response.json())
    .then((data) => {
        getImageUrl = data.url;
        getTitle = data.title;
        getExplanation = data.explanation;
        
        if (data.code) {
            toBeFilled.innerHTML = 'ERROR! Please insert a valid data.'
        } else {
            toBeFilled.innerHTML = ''
            imageTitle.innerHTML = `Title: ${getTitle}`
            newParagraph.innerHTML = getExplanation;
            imageExplanation.appendChild(newParagraph);
            image.setAttribute('src', getImageUrl)

        }
    })
}




let link = document.querySelector('#link');
link.addEventListener('click', aboutThis);

function aboutThis(){
    const paragraphAboutThis = document.querySelector('#aboutThis');
    paragraphAboutThis.innerHTML = 'This website uses the JavaScript Fetch method to connect with APOD API from <a href="https://api.nasa.gov/" target="_blank">NASA</a> and return the image of that day, along with the image title and description.'
}






