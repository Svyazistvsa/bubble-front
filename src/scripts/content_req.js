"use strict"

let contentBox = document.querySelector('main');
let run = async () => {
    try {
        let response = await fetch('https://localhost:3000/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let content = await response.text();
        contentBox.innerHTML = `<p>${content}</p>`;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}
run();