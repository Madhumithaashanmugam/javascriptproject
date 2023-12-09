var popupbackground = document.querySelector(".popup")
var popuphere = document.querySelector(".popuphere")
var button = document.getElementById("click-button")
button.addEventListener("click",function(){
    popupbackground.style.display="block"
    popuphere.style.display="block"
})

var cancle = document.getElementById("cancle")
cancle.addEventListener("click",function(event){
    event.preventDefault
    popupbackground.style.display="none"
    popuphere.style.display="none"

})


//select book-container,addbutton,book-name,author-name,texthere
var container = document.querySelector(".book-container")

var addbutton =document.getElementById("addbutton")
var bookname = document.getElementById("book-name")
var author = document.getElementById("author-name")
var textarea = document.getElementById("texthere")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","container-here")
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h3>${author.value}</h3>
    <p>${textarea.value}</p>
    <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
    popupbackground.style.display="none"
    popuphere.style.display="none"


})
function deletebook(event){
    event.target.parentElement.remove()
}

