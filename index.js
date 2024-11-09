
const imagecontainer = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    addNewImages();
})

function addNewImages(){
    const newImg = document.createElement("img")
    newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() *2000 )}`;
imagecontainer.appendChild(newImg);
}

