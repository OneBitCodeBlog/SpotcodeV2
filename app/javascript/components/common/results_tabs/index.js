import React, { Fragment, useState, useEffect } from 'react';
import { Columns, Tabs } from 'react-bulma-components';
import styled, { css } from 'styled-components';
import Album from '../../common/album';
import Musics from '../../musics';

const CustomTab = styled(Tabs.Tab)`
  a{
    color: white;
    ${({ active }) => active && css`
      color: hsl(171, 100%, 41%) !important;
      border-color: hsl(171, 100%, 41%) !important;
    `}
  }
`

const ResultsTabs = (props) => {
  const [active_tab, setActiveTab] = useState("albums");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setAlbums(props.albums.map((album, key) =>
    	<Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
    	  <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}/>
      </Columns.Column>
  ));
  }, [props.albums]);

  return (
    <Fragment>
      <Tabs
        style={{ display: props.albums.length || props.artists.length || props.songs.length ? "" : "none" }}
        align='centered' size='medium'
      >
        <CustomTab active={active_tab == 'albums' ? true : false} onClick={() => setActiveTab('albums')}>
          Álbums
      </CustomTab>
        <CustomTab active={active_tab == 'artists' ? true : false} onClick={() => setActiveTab('artists')}>
          Artistas
      </CustomTab>
        <CustomTab active={active_tab == 'songs' ? true : false} onClick={() => setActiveTab('songs')}>
          Músicas
      </CustomTab>
      </Tabs>

      <div>
        <div style={{ display: active_tab != 'albums' ? "none" : "" }}>
          <Columns className="columns is-mobile is-multiline">
            {albums}
          </Columns>
        </div>

        <div style={{ display: active_tab != 'artists' ? "none" : "" }}>
          <div className="columns is-mobile is-multiline">
            Artists
          </div>
        </div>

        <div style={{ display: active_tab != 'songs' ? "none" : "" }}>
          <div className="columns is-multiline">
            <div className="column is-12">
              <Musics songs={props.songs || []}/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ResultsTabs;