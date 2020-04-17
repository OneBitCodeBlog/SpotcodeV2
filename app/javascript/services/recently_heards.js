import Api from './api';

const RecentlyHeardsService = {
  create: (id) => Api.post(`/albums/${id}/recently_heards`),
}

export default RecentlyHeardsService;