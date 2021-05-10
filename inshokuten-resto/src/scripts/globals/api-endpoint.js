/* eslint-disable max-len */
import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  // HOME: `${CONFIG.BASE_URL}/list/?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  // UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  // DETAIL: (id) => `${CONFIG.BASE_URL}list/${id}?api_key=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
