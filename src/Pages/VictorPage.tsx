import React, { useState } from 'react'
const song = require('../assets/song.mp3') // this is typescript specific

const VictorPage: React.FC = () => {  
  const [playing, setPlaying] = useState(false)
  console.log(playing)

  const audio = new Audio(song)

  const handlePlay = () => {
    audio.play()
  }

  const handlePause = () => {
    audio.pause()
  }

  return (
    <div>
        This is the victor page
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
    </div>
  )
}

export default VictorPage