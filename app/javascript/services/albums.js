import Api from './api';

const AlbumsService = {
    index: () => Api.get('/dashboard'),
    show:  (id) => Api.get(`/albums/${id}`)
}

export default AlbumsService;