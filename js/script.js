gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".heading").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 90%",
    end: "bottom 10%",
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.35,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.35,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});






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







var typed =  new Typed(".typing",{
    strings:["", " web designer", " Data analyst", " cyber-security consultant"],
    typeSpeed:80,
    BackSpeed: 60,
    loop: true
});




function typeParagraph(elementId, text, speed, loopCount, delayBeforeRestart) {
  const element = document.getElementById(elementId);
  let index = 0;
  let loop = 0;

  // Function to type a character with a delay based on the speed
  function typeCharacter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeCharacter, speed);
    } else {
      // Check if the loop count is reached
      loop++;
      if (loop < loopCount) {
        setTimeout(restartTyping, delayBeforeRestart);
      }
    }
  }

  // Function to restart typing after a delay
  function restartTyping() {
    index = 0;
    element.textContent = "";
    typeCharacter();
  }

  // Start typing the paragraph
  typeCharacter();
}

// Call the function with your desired parameters
typeParagraph("text1", "In my free time, I enjoy contributing to open-source projects, attending tech meetups, and learning new programming languages. I'm excited to continue growing in my career and collaborating with other like-minded individuals to create innovative solutions that make a difference.", 50, 5, 100);