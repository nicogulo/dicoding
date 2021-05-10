import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async homeList() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  // static async upcomingMovies() {
  //   const response = await fetch(API_ENDPOINT.UPCOMING);
  //   const responseJson = await response.json();
  //   return responseJson.results;
  // }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
export default TheRestoDbSource;
