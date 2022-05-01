const foos = {
    surface: [],
    epipelagic: [
        {
            depth: 100,
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            depth: 200,
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            depth: 300,
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ]
}

const generateFoo = (fooData) => {
    const foo = document.createElement('div')
    foo.className = 'foo'
    foo.style.top = `${fooData.depth}px`

    const fooCard = document.createElement('div')
    fooCard.className = 'foo-card'

    const fooCardTitle = document.createElement('h1')
    fooCardTitle.innerHTML = `${fooData.depth}m`

    const fooCardDescription = document.createElement('p')
    fooCardDescription.innerHTML = fooData.description

    fooCard.appendChild(fooCardTitle)
    fooCard.appendChild(document.createElement('br'))
    fooCard.appendChild(fooCardDescription)

    foo.appendChild(fooCard)

    return foo
}

foos.epipelagic.forEach(foo => {
    const oceanLevel = document.getElementById('oceanLevel')
    oceanLevel.appendChild(generateFoo(foo))
});