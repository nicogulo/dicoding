import Home from '../views/pages/home';
// import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {

  '/home': Home,
  // '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
