const { ReactComponent } = require("*.svg");
import React from 'react';
import ReactPlayer from 'react-player';


class PlayerWrapper extends React.Component{
    state = {
        url: '../site-content/trabalho.mp3',
        pip: false,
        playing: true,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
      }

    render(){
        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
        return(
            <ReactPlayer/>
        );
    }
}