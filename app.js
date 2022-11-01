let allDivs = document.querySelectorAll('div')
//console.log(allDivs)

for ( el of allDivs){
    if( el.classList.contains('wrapper')){
        console.log(el)
    }
}

const newElement = document.createElement('img')
newElement.style.width="200px"
newElement.style.height="300px"
newElement.style.position="absolute"
newElement.style.top="0px"
newElement.style.left="0px"
newElement.src="cloud.jpg"
document.body.appendChild(newElement)



const array = ["hello","world"]
let count = 0 
setInterval ( ()=>{
    console.log("click")

    if ( count==0){
        document.getElementById("text").innerHTML=array[0]
        count++
    }else{
        document.getElementById("text").innerHTML=array[1]
        count--
    }

},1000)
