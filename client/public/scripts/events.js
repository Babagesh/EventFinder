const getGifts = async () => {
    const mainContent = document.getElementById('main-content')
    mainContent.classList.add("grid")
    const response = await fetch('/events')
    const eventsData = await response.json()

    eventsData.map((event) => {
        const card = document.createElement('div')
        const topContainer = document.createElement('div')
        topContainer.classList.add('top-container')
        const cardLogo = document.createElement('img')
        cardLogo.src = event.image
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

        const more = document.createElement('a')
        more.href = `/events/${event.id}`
        more.textContent = 'Read More'
        more.setAttribute('role', 'button')
        bottomContainer.appendChild(more)

        card.append(topContainer)
        card.append(bottomContainer)
        mainContent.append(card)
    })
}

getGifts();

