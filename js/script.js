let menu =document.querySelector('#menu-bars');
let header =document.querySelector('header')


menu.onclick = () => {
    header.classList.toggle('active');
    menu.classList.toggle('fa-times')
}

window.onscroll = () => {
    header.classList.remove('active');
    menu.classList.remove('fa-times')
}




let cusor1 =document.querySelector('.cusor-1')
let cusor2 =document.querySelector('.cusor-2')



window.onmousemove = (e) => {
    cusor1.style.top = e.pageY + 'px';
    cusor1.style.left = e.pageX + 'px';
    cusor2.style.top = e.pageY + 'px';
    cusor2.style.left = e.pageX + 'px';
}



let typingText = document.querySelector(".change_txt")
 let text = ["web developer","Cyber-Security", "ICT support personel"]

let arrayIndex = 1;

function ChangingTxt(){
    if (arrayIndex<text.length){
        typingText.innerHTML="Hi I am a " + text[arrayIndex]
        arrayIndex = arrayIndex + 1
    }
    else {
        arrayIndex = 0;
        typingText.innerHTML= "Hi I am a " + text[arrayIndex]
        arrayIndex = arrayIndex + 1
    }
    
}

ChangingTxt();
setInterval(ChangingTxt, 1000);