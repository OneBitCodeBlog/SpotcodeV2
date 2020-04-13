import Api from '.api';

const AlbumsService = {
    index: () => Api.get('/dashboard')
}

export default AlbumsService;