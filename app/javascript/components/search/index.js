import React, { Fragment, useEffect, useState } from 'react';
import SearchBar from './search_bar';
import Categories from '../common/categories';
import { Columns } from 'react-bulma-components';
import SearchService from '../../services/search';
import CategoriesService from '../../services/categories';
import ResultsTabs from '../common/results_tabs'

const Search = () => {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  
  async function fetchCategorySearch(id) {
    const response = await CategoriesService.show(id);
    setAlbums(response.data['albums']);
    setArtists(response.data['artists']);
    setSongs(response.data['songs']);
  }

  async function fetchSearch(query) {
    const response = await SearchService.index(query);
    setAlbums(response.data['albums']);
    setArtists(response.data['artists']);
    setSongs(response.data['songs']);
  }

  return (
    <Fragment>
      <Columns>
        <Columns.Column desktop={{ size: 6, offset: 3 }} mobile={{ size: 12 }}>
          <SearchBar fetchSearch={fetchSearch}/>
        </Columns.Column>
      </Columns>

      <ResultsTabs albums={albums} artists={artists} songs={songs}/>
      <Categories fetchCategorySearch={fetchCategorySearch}/>
      
    </Fragment>
  );
}
export default Search;