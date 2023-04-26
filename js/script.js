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



var typed =  new Typed(".typing",{
    strings:["", "a web designer", "a Data analyst", "a cyber-security"],
    typeSpeed:100,
    BackSpeed: 60,
    loop: true
});