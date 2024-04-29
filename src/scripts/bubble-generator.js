"use strict"

let screen = document.querySelector('#screen'),
    ww = window.innerWidth; 

window.addEventListener("resize", () => winWidth());

function winWidth(){    
    ww = window.innerWidth;
    screen.style.cssText = `width: ${ww}px`;
    
}

function generator(){    
    let div = document.createElement('div'),
        bottomPoint = getRandomInt(150, ww-150),
        diametr = getRandomInt(10, 300);
    div.classList.add('backB');
    div.style.cssText += `
        --castomD: ${diametr}px;
        --castomL: ${bottomPoint}px;
        `
    ;
    screen.append(div);
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function destroy(){
    let arr = document.querySelectorAll(".backB");
    for(let i=0; i<arr.length; i++){
        arr[i].remove();
    }
  }  
  
  let timerId = setInterval(generator, 1000);
  let timerIdd = setInterval(destroy, 20000);