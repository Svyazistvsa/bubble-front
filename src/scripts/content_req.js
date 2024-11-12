"use strict"

let contentBox = document.querySelector('main');
let run = async () => {let response = await fetch('https://localhost:3000/');

let content = await response.json();
contentBox.innerHTML = content;}

run();