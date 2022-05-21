const changeModeButton = document.getElementById('changeModeButton')
const playAudioButton = document.getElementById('playAudioButton')

const oceanAudio = new Audio('audios/UnderwaterSoundEffect.wav')
oceanAudio.loop = true

const INFORMATIVE_MODE = 'INFORMATIVE'
const FOO_MODE = 'FOO'

const modes = [
    INFORMATIVE_MODE,
    FOO_MODE
]

let selectedModeIndex = 0
let playingAudio = false

function onModeChange(mode) {
    hideAllContent()
    switch (mode) {
        case INFORMATIVE_MODE:
            showInformativeData()
            break
        case FOO_MODE:
            showFooData()
            break
        default:
            break
    }
}

function hideAllContent() {
    const elements = []
        .concat(Array.from(document.getElementsByClassName('zone-header')))
        .concat(Array.from(document.getElementsByClassName('zone-body')))
        .concat(Array.from(document.getElementsByClassName('foo')))
    elements.forEach(element => element.style.visibility = 'hidden')
}

function showInformativeData() {
    changeModeButton.innerHTML = 'Z'
    const elements = []
        .concat(Array.from(document.getElementsByClassName('zone-header')))
        .concat(Array.from(document.getElementsByClassName('zone-body')))
    elements.forEach(element => element.style.visibility = 'visible')
}

function showFooData() {
    changeModeButton.innerHTML = 'F'
    const elements = Array.from(document.getElementsByClassName('foo'))
    elements.forEach(element => element.style.visibility = 'visible')
}

changeModeButton.addEventListener('click', () => {
    if (selectedModeIndex < modes.length - 1) selectedModeIndex++
    else selectedModeIndex = 0
    onModeChange(modes[selectedModeIndex])
})

playAudioButton.addEventListener('click', () => {
    if (playingAudio) {
        oceanAudio.pause()
        oceanAudio.currentTime = 0
    } else oceanAudio.play()
    playAudioButton.innerHTML = playingAudio ? 'PLAY AUDIO' : 'STOP'
    playingAudio = !playingAudio
})

function start() {
    hideAllContent()
    showInformativeData()
}

start()