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

      PlayPause = () => {
        this.setState({ playing: !this.state.playing })
        console.log('run');
      }

      ChangePlayed = (slayed) => {
          this.setState({played: slayed})
      }

      ref = player => {
        this.player = player
      }

    render(){
        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
        return(
            <div>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='100%'
                height='100%'
                url={url}
                pip={pip}
                playing={playing}
                controls={controls}
                light={light}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={this.handlePlay}
                onEnablePIP={this.handleEnablePIP}
                onDisablePIP={this.handleDisablePIP}
                onPause={this.handlePause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={this.handleEnded}
                onError={e => console.log('onError', e)}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration}
                />

                <button className="playbutton" onClick={this.PlayPause}>PLAY</button>

            </div>
        );
    }
}

export default PlayerWrapper;