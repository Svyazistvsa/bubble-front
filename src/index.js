import trees from './images/trees.jpg'
import gene from './images/gene.svg'
import './styles/main.scss'

const heading = document.createElement('h1')
heading.textContent = 'Как интересно!'

// добавляем заголовок в DOM
const root = document.querySelector('#root')
root.append(heading)