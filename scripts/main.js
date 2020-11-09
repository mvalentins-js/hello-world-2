let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/orange-cake.jpg') {
      myImage.setAttribute('src','images/orange-dessert.jpg');
    } else {
      myImage.setAttribute('src','images/orange-cake.jpg');
    }
}

// Personalized welcome message code 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Are you hungry, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Are you hungry, ' + storedName;
  }

 myButton.onclick = function() {
    setUserName();
  }


 
 
  
  









