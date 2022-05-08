const foos = [
    {
        image: 'https://scuba-people.com/wp-content/uploads/2018/05/244-metres-lhopital-pour-herbert-nitsch.jpg',
        depth: 253,
        title: 'Free Dive Record',
        description: 'On June 6, 2012, Herbert Nitsch, a free diver holding over 30 world records, set the bar for the deepest free dive ever by descending 253 meters in Greece.'
    },
    {
        image: 'https://maisgeek.com/wp-content/uploads/2021/07/whale.jpg',
        depth: 2992,
        title: 'Whale Dive Record',
        description: "Whales are accomplished divers. The deepest whale dive recorded so far was made by a Cuvier's beaked whale. A 2014 study used satellite-linked tags to follow the dives of eight beaked whales off the southern California coast. The deepest recorded dive was 2,992 metres, breaking the record for diving mammals."
    },
    {
        image: 'https://veja.abril.com.br/wp-content/uploads/2020/12/TITANIC-FUNDO-DO-MAR-CAPSULA-TITAN-1.jpg?quality=70&strip=info&w=680&h=453&crop=1',
        depth: 3962.4,
        title: 'RMS Titanic',
        description: 'RMS Titanic was a British passenger liner, operated by the White Star Line, which sank in the North Atlantic Ocean on 15 April 1912 after striking an iceberg during her maiden voyage from Southampton, UK, to New York City. Of the estimated 2,224 passengers and crew aboard, more than 1,500 died, which made the sinking possibly one of the deadliest for a single ship up to that time.'
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
        depth: 8848.86,
        title: 'Mount Everest',
        description: 'Mount Everest is the highest mountain on Earth. Mount Everest is in the Himalayas, a mountain range. It is about 8,848.86 metres high.'
    }
]

const generateFoo = (fooData) => {
    // Dot
    const fooDot = document.createElement('div')
    fooDot.className = 'foo'
    fooDot.style.top = `calc(${fooData.depth}px * var(--scale))`

    // Card
    const fooCard = document.createElement('div')
    fooCard.className = 'foo-card'

    // Image
    const fooCardImage = document.createElement('img')
    fooCardImage.className = 'foo-image'
    fooCardImage.src = fooData.image

    // Content container
    const fooCardContentContainer = document.createElement('div')
    fooCardContentContainer.className = 'foo-content-container'

    // Content container's title
    const contentContainerTitle = document.createElement('h1')
    contentContainerTitle.innerHTML = `${fooData.title}<br />${fooData.depth}m`

    // Content container's description
    const contentContainerDescription = document.createElement('p')
    contentContainerDescription.innerHTML = fooData.description

    // Appends
    fooCardContentContainer.appendChild(contentContainerTitle)
    fooCardContentContainer.appendChild(document.createElement('br'))
    fooCardContentContainer.appendChild(contentContainerDescription)
    fooCard.appendChild(fooCardImage)
    fooCard.appendChild(fooCardContentContainer)
    fooDot.appendChild(fooCard)

    return fooDot
}

foos.forEach(foo => {
    const oceanLevel = document.getElementById('oceanLevel')
    oceanLevel.appendChild(generateFoo(foo))
});
