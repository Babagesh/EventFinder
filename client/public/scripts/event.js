const getGift = async() => {
    const eventContent = document.getElementById('event-content')
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch(`/events`)
    const events = await response.json()
    const event = events.find(event => event.id === requestedID)


    const card = document.createElement('div')
    card.className = 'card'
    const topContainer = document.createElement('div')
    topContainer.classList.add('top-container')
    const cardLogo = document.createElement('img')
    cardLogo.src = event.image
    cardLogo.style.maxWidth = "100%"
    cardLogo.style.height = "auto"
    topContainer.appendChild(cardLogo)

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')

    const artist = document.createElement('h3')
    artist.textContent = event.artist
    bottomContainer.appendChild(artist)

    const genre = document.createElement('p')
    genre.textContent = event.type
    bottomContainer.appendChild(genre)

    const time = document.createElement('p')
    time.textContent = event.time
    bottomContainer.appendChild(time)

    card.append(topContainer)
    card.append(bottomContainer)

    eventContent.appendChild(card)

}
getGift()