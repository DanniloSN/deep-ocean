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
    }
]

const generateFoo = (fooData) => {
    const foo = document.createElement('div')
    foo.className = 'foo'
    foo.style.top = `${fooData.depth}px`

    const fooCard = document.createElement('div')
    fooCard.className = 'foo-card'

    const fooImage = document.createElement('img')
    fooImage.className = 'foo-image'
    fooImage.src = fooData.image

    const fooCardTitle = document.createElement('h1')
    fooCardTitle.innerHTML = `${fooData.title} - ${fooData.depth}m`

    const fooCardDescription = document.createElement('p')
    fooCardDescription.innerHTML = fooData.description

    fooCard.appendChild(fooImage)
    fooCard.appendChild(fooCardTitle)
    fooCard.appendChild(document.createElement('br'))
    fooCard.appendChild(fooCardDescription)

    foo.appendChild(fooCard)

    return foo
}

foos.forEach(foo => {
    const oceanLevel = document.getElementById('oceanLevel')
    oceanLevel.appendChild(generateFoo(foo))
});