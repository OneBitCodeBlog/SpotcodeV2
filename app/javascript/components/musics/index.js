import React, { Fragment, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Music from './music';
import { Button, Columns } from 'react-bulma-components';
import RecentlyHeardsService from '../../services/recently_heards';


const PlaySequenceButton = styled(Button)`
  margin-bottom: 30px;
`

const Musics = (props) => {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState([]);
  const AudioRef = useRef();
  const [playRandom, setPlayRandom] = useState(false);

  const NextSong = () => {
    if(playRandom) {
      let index = Math.floor(Math.random() * props.songs.length);
      setPlaying(props.songs[index]);
    } else
      setPlaying([]);
  }

  const SwitchRandom = () => {
    if(playRandom) {
      setPlayRandom(false);
      setPlaying([]);
    } else 
      setPlayRandom(true);
  }

  useEffect(() => {
    if(playRandom)
      NextSong();
  }, [playRandom]);

  useEffect(() => {
    if (AudioRef.current !== null) {
      AudioRef.current.pause();
      AudioRef.current.load();
      if(playing.id) {
        AudioRef.current.play();
        RecentlyHeardsService.create(playing.album_id)
      }
    }
  }, [playing]);

  useEffect(() => {
    setSongs(props.songs.map((song, key) => 
      <Music 
        song={song}
        playing={playing.id == song.id} 
        setPlaying={setPlaying}
        key={key}
      />
    ));

  }, [props.songs, playing]);


  return (
    <Fragment>
      <Columns className='is-mobile is-centered'>
        <Columns.Column desktop={{ size: 2 }} mobile={{ size: 12 }} className='has-text-centered'>
          <PlaySequenceButton
            className='is-medium'
            color='primary'
            outlined
            onClick={() => SwitchRandom()}
            >
            {playRandom == true ? 'Parar de tocar' : 'Tocar aleatoriamente'}
          </PlaySequenceButton>
          <audio controls ref={AudioRef} onEnded={() => NextSong()} className='is-hidden'>
            <source src={playing.file_url}/>
          </audio>
        </Columns.Column>
      </Columns>
      {songs}
    </Fragment>
  );
}
export default Musics;