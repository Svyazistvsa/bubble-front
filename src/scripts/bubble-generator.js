let screen = document.querySelector('#screen'),
    ww = window.innerWidth,
    wh = window.innerHeight; 

window.addEventListener("resize", winWidth);

function winWidth(ww, wh){
    ww = window.innerWidth;
    wh = window.innerHeight;
}


function generator(ww, wh){
    
    let div = document.createElement('div'),
        bottomPoint = getRandomInt(50, ww-50),
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