import { deleteMessage } from "./fetch.js";

const messageContainer = document.querySelector('#messageContainer');

const ulEL = document.createElement('ul');
ulEL.id = 'unOrdermessage';
messageContainer.append(ulEL);


function displayMessage(message){
    ulEL.innerHTML = '';
    // console.log(message);
    // console.log(typeof message);

    for (const popName in message) {
   
        console.log(message[popName]);
        console.log(popName);
     
        const textListEl = document.createElement('li');
        textListEl.id = popName;
        ulEL.append(textListEl);
        textListEl.innerText = message[popName].text;

        // const timeEl = document.createElement('p');
        // timeEl.id = 'timeELStyle';
        // timeEl.innerText = message[popName].time;
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteButton');
        
    
        textListEl.append(deleteBtn);
    }

}

// const boldStyle = document.querySelector('#boldStyle');
// boldStyle.addEventListener('click', ()=>{
//     boldStyle.classList.toggle('boldStyle');

// })


function createAndAppendElement(type,content,container){
    const element = document.createElement(type);
    element.innerText = content;
    container.append(element);
}

export{
    displayMessage
}