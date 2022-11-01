let allDivs = document.querySelectorAll('div')
//console.log(allDivs)

for ( el of allDivs){
    if( el.classList.contains('wrapper')){
        console.log(el)
    }
}

const newElement = document.createElement('img')
newElement.style.width="200px"
newElement.style.height="200px"
newElement.style.position="absolute"
newElement.style.top="0px"
newElement.style.left="0px"
newElement.style.src="https://cdn-icons-png.flaticon.com/512/252/252035.png"
document.body.appendChild(newElement)