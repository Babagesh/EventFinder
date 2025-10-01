const header = document.querySelector('header')
header.className = 'container'

// Left Header
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/assets/concert.jpg'
headerLogo.className = 'header-logo'

const headerTitle = document.createElement('h2')
headerTitle.textContent = "EventMania"
headerTitle.className = 'header-title'

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)
header.appendChild(headerLeft)

// Right Header
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = "Home"
headerButton.addEventListener('click', (e) => {
    window.location = "/"
})
headerButton.className = 'outline'
headerRight.appendChild(headerButton)
header.appendChild(headerRight)

