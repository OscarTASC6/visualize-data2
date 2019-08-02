const first = list[0]
const main =document.querySelector("main")
const createCard= obj => {
const newCard= document.createElement("div")
newCard.className="card"

const face=document.createElement("img")
face.src=obj.picture.medium
face.alt="Portrait";


newCard.appendChild(face);
    




main.appendChild(newCard)
};

createCard(first);