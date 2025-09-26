const getGifts = async () => {
    const mainContent = document.getElementById('main-content')
    const response = await fetch('/events')
    const eventsData = await response.json()
    eventsData.map((event) => {
        const card = document.createElement('div')
        const cardLogo = document.createElement('img')
        cardLogo.src = event.image



        mainContent.append(card)
    })
    

}

getGifts();

