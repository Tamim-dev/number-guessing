let btn1 = document.querySelector(".btn1")
let in1 = document.querySelector(".in1")
let err1 = document.querySelector(".err1")
let btn2 = document.querySelector(".btn2")
let in2 = document.querySelector(".in2")
let err2 = document.querySelector(".err2")
let player = document.querySelector(".player")
let counter = document.querySelector(".counter")
let count = document.querySelector(".count")

let chance = 5

btn1.addEventListener("click",function(){
    if(!in1.value){
        err1.innerHTML = "Please Enter a value"
        err1.style.color ="red"
    }else if((in1.value - 12) == 0 ? false : !(in1.value - 12) ){
        err1.innerHTML = "Please give a number"
        err1.style.color ="red"
    }else if(in1.value - 12){
        if(!(in1.value >=1 && in1.value <=10)){
            err1.innerHTML = "please Enter (1-10)"
        }else{
            err1.innerHTML = ""
            btn1.style.display ="none"
            in1.style.display ="none"
            btn2.style.display ="inline-block"
            in2.style.display ="inline-block"
            player.innerHTML ="Player 2"
            counter.style.display ="block"
            count.innerHTML = chance
        }
    }
})

btn2.addEventListener("click",function(){

    if(chance > 1){
        chance--
        count.innerHTML = chance
    }else{
        player.innerHTML = "Player 1 winer"
        btn2.style.display = "none"
    }
    
    if(in1.value == in2.value){
        player.innerHTML = "Player 2 winer"
        btn2.style.display = "none"
    }

})