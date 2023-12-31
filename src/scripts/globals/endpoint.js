import CONFIG from './config';

const ENDPOINT = {
  LIST_REST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default ENDPOINT;
