
const apiUrl = 'https://api.nasa.gov/planetary/apod?';
const apiKey = 'api_key=euBoeTcP81SdVRxfcbjbD3gPtpXukMIBla6Uox9i'
let currentDate;
let date = document.querySelector('#inputDate')
const mainButton = document.querySelector('#mainButton');
let toBeFilled = document.querySelector('#toBeFilled')

let imageTitle = document.querySelector('#imageTitle');
let imageExplanation = document.querySelector('#imageExplanation');
let image = document.querySelector('#image')
let newParagraph = document.createElement('p');


mainButton.addEventListener('click', getImage);

function getImage(){
    let apiDate = `&date=${date.value}`
    let completeUrl = `${apiUrl}${apiKey}${apiDate}`
    // console.log(completeUrl);


    fetch(completeUrl)
    .then((response) => response.json())
    .then((data) => {
        getImageUrl = data.url;
        getTitle = data.title;
        getExplanation = data.explanation;
        
        if (data.code) {
            toBeFilled.innerHTML = 'ERROR! Please insert a valid data. <br>The minimum search date is 6/16/1995 and the maximum is today. '
            imageTitle.innerHTML = ''
            newParagraph.innerHTML = '';
            imageExplanation.removeChild(newParagraph);
            image.setAttribute('src', '')
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






