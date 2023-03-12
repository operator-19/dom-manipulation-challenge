const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a glorious text-content!';

container.appendChild(content)

// const pContainer = document.querySelector('#pContainer');

const pContent = document.createElement('p')
pContent.classList.add('pContent')
pContent.textContent = "Hey I'm Red!"
pContent.style.color = 'red'

container.appendChild(pContent)

const h3Content = document.createElement('h3')
h3Content.classList.add('h3Content')
h3Content.textContent = "Hey I'm Blue h3!"
h3Content.style.color = 'blue'

container.appendChild(h3Content)

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv')
newDiv.textContent = "newDiv"
newDiv.style.cssText = 'border: 2px solid black; background: pink;' 

container.appendChild(newDiv)

const newContainer = document.querySelector('.newDiv');

const h1Content = document.createElement('h1')
h1Content.classList.add('h1Content')
h1Content.textContent = "I'm in a div"

newContainer.appendChild(h1Content)

const p2Content = document.createElement('p')
p2Content.classList.add('p2Content')
p2Content.textContent = "ME TOO!"

newContainer.appendChild(p2Content)

