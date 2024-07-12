//Remove element
document.querySelector('main#main').remove();
//Create new element
const newHeader = document.createElement('h1');
//Set id and innerHTML
newHeader.id = 'victory';
newHeader.innerHTML = 'Amwenya is the champion';
//Append to body
document.body.appendChild(newHeader);