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
    strings:["", " web designer", " Data analyst", " cyber-security consoltunt"],
    typeSpeed:80,
    BackSpeed: 60,
    loop: true
});

var typed =  new Typed("#text1",{
    strings:[`I am passionate about using technology to solve real-world 
                problems and create innovative solutions.  My expertise includes front-end
                 development with HTML, CSS, and JavaScript, as well as back-end development
                  using Node.js and databases such as MongoDB and MySQL.</br> I have a keen eye for 
                  design and user experience, and I always strive to create intuitive, 
                  responsive, and scalable web applications.`],
    typeSpeed:35,
    BackSpeed: 60,
    showCursor: false,
    loop: false

});




new fullpage('#fullpage', {
	onSlideLeave: function( section, origin, destination, direction, trigger){
		var leavingSlide = this;

		if(section.index == 1 && origin.index == 0 && direction == 'right'){
			const image1 = document.getElementById("#image1")
		}

		
		if(section.index == 1 && origin.index == 2 && direction == 'left'){
			
		}
	}
});