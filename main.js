const block_one = document.querySelector('.block_one')
const btnClose = document.getElementById('btn_close')
let modal  = document.getElementById("modal")
let left  = document.getElementById("left")
let carousel  = document.querySelector(".carousel")
let right  = document.getElementById("right")

block_one.addEventListener("click",()=>{
    openmodal()
})

function closeModal() {
    modal.innerHTML=``
}

function openmodal() {
    modal.innerHTML+=`  <article class="modal"> <img src="./images/img6.jpg" alt=""> <button onClick="closeModal()">Закрыть</button></article>`
}
let img1 = "./images/img2.jpg"
let img2 = "./images/img7.jpg"
let img3 = "./images/img8.jpg"
let arr =[img1,img2,img3]
let num1 = 1
let num2 = 2


left.addEventListener("click",()=>{
   
   num1 >0? prev():next()
})
function prev() {
    num1-=1
    num2-=1
    
    for (let i = num1; i < num2; i++) {
        const element = arr[i];
        carousel.innerHTML=""
        carousel.innerHTML+=`
                <img class="img1 img" src=${num1 == 0? arr[num2]:arr[num1+1]} alt="">
                <img class="main_img" src=${element} alt="">
                <img class="img2 img" src=${num2 == 2? arr[num1-1]:arr[num2+1]} alt="">`
     console.log("num1:", num1);
    console.log("i:",i);
    console.log("num2:", num2);
        
    }
   
    
}
right.addEventListener("click",()=>{
    num2 < arr.length? next():prev()
})
function next() {
    num1+=1
    num2+=1
    
        for (let i = num1; i < num2; i++) {
        const element = arr[i];
        carousel.innerHTML=""
        carousel.innerHTML+=`
                <img class="img1 img" src=${num1 == 2? arr[num1-2]:arr[num1+1]} alt="">
                <img class="main_img" src=${element} alt="">
                <img class="img2 img" src=${num2 == 3 ? arr[num1-1]:arr[num2]} alt="">`
      console.log("num1:", num1);
    console.log("i:",i);
    console.log("num2:", num2);
    }
 
}

function Getcarousel() {
    for (let i = num1; i < num2; i++) {
        const element = arr[i];
        carousel.innerHTML=""
        carousel.innerHTML+=`
                <img class="img1 img" src=${arr[num1-1]} alt="">
                <img class="main_img" src=${element} alt="">
                <img class="img2 img" src=${arr[num2]} alt="">`

                console.log("num1:", num1);
                console.log("i:",i);
                console.log("num2:", num2);
        
    }

}
Getcarousel()