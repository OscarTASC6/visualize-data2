// const first = list[0]
const main = document.querySelector("main")

const createCard = (obj, indx) => {
    const newCard = document.createElement("div")
    newCard.className = "card"
    newCard.id = indx
    const face = document.createElement("img")
    face.className = "people"
    face.src = obj.picture.large
    face.alt = "Portrait";
    const newText = document.createElement("p")
    newText.innerText = `${obj.name.first} ${obj.name.last}
    ${obj.location.city} ${obj.location.state}
    ${obj.email}
    ${obj.gender}`
    

    const skin= [obj.gender]

    const result = skin
    console.log(result)
    
    newCard.appendChild(newText)
    newCard.appendChild(face);
    main.appendChild(newCard);
};
// const result = obj.gender.filter(gender=>obj.gender > "female")
// console.log(result)

const loopcreate = arr => {
    for (let i = 0; i < arr.length; i++) {
        createCard(arr[i], i);
    }
}
loopcreate(list)

document.getElementsByClassName("main-element")

const images = document.getElementsByClassName("people");
const imagesArray = [... images]

// for (let i = 0; i<imagesArray.length; i ++){
//     imagesArray[i].style.opacity = "1";
//     imagesArray[i].style.transition = ".5s ease";
//     imagesArray[i].style.backgroundColor = "red";
//     currentElement= imagesArray[i];
//     imagesArray[i].addEventListener("mouseover", diffCss)
//     imagesArray[i].addEventListener("mouseout", sameCss)
// }



function sameCss(event){
    event.target.style.opacity = "1";
}

function diffCss(){
    event.target.style.opacity = "0";
    event.target.style.backgroundColor= "red";
}

function sortData(event){
    if (obj.gender ===""){
        document
    }
}