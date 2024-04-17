let screen = document.querySelector('#screen'),
    ww = window.innerWidth,
    wh = window.innerHeight; 

screen.style.width = window.innerWidth;

window.addEventListener("resize", () => winWidth(ww,wh));

function winWidth(ww, wh){
    ww = window.innerWidth;
    wh = window.innerHeight;
    screen.style.cssText = `width: ${ww}px`;
   
}

function generator(ww, wh ){    
    
    let div = document.createElement('div'),
        bottomPoint = getRandomInt(150, ww-250),
        diametr = getRandomInt(10, 300);
    div.classList.add('backB');
    div.style.cssText += `
        left: ${bottomPoint}px;
        width: ${diametr}px;
        height: ${diametr}px;
    `;
    screen.append(div);
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  let timerId = setInterval(generator, 500, ww, wh);