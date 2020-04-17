import React, { Fragment, useState, useEffect } from 'react';
import FavoritesService from '../../services/favorites';
import ResultsTabs from '../common/results_tabs';

const Favorites = () => {
  const [favorites, setFavorites] = useState({});

  async function fetchFavorites() {
    const response = await FavoritesService.index();
    await setFavorites(response.data);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <Fragment>
       <ResultsTabs albums={favorites.albums || []} artists={favorites.artists || []} songs={favorites.songs || []}/>
    </Fragment>
  );
}
export default Favorites;