const changeModeButton = document.getElementById('changeModeButton')
const playAudioButton = document.getElementById('playAudioButton')

const oceanAudio = new Audio('audios/UnderwaterSoundEffect.wav')
oceanAudio.loop = true

const INFORMATIVE_MODE = 'INFORMATIVE'
const LIFE_MODE = 'LIFE'
const FOO_MODE = 'FOO'

const modes = [
    INFORMATIVE_MODE,
    LIFE_MODE,
    FOO_MODE
]

let selectedModeIndex = 0
let playingAudio = false

const changeMode = () => {
    if (selectedModeIndex < modes.length-1) selectedModeIndex++
    else selectedModeIndex = 0
    onModeChange(modes[selectedModeIndex])
}

const onModeChange = (mode) => {
    hideAllContent()
    switch (mode) {
        case INFORMATIVE_MODE:
            showInformativeData()
            break
        case LIFE_MODE:
            showLifeData()
            break
        case FOO_MODE:
            showFooData()
            break
        default:
            break
    }
}

const hideAllContent = () => {
    const elements = []
        .concat(Array.from(document.getElementsByClassName('zone-header')))
        .concat(Array.from(document.getElementsByClassName('foo')))
    elements.forEach(element => element.style.display = 'none')
}

const showInformativeData = () => {
    const elements = Array.from(document.getElementsByClassName('zone-header'))
    elements.forEach(element => element.style.display = 'block')
}

const showLifeData = () => {
    const elements = Array.from(document.getElementsByClassName(''))
    elements.forEach(element => element.style.display = 'block')
}

const showFooData = () => {
    const elements = Array.from(document.getElementsByClassName('foo'))
    elements.forEach(element => element.style.display = 'block')
}

const playAudio = () => {
    if (playingAudio) {
        oceanAudio.pause()
        oceanAudio.currentTime = 0
    } else oceanAudio.play()
    playingAudio = !playingAudio
}

changeModeButton.addEventListener('click', () => changeMode())
playAudioButton.addEventListener('click', () => playAudio())
