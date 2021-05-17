import { Switch, Route } from 'react-router-dom';

import Browse from '../views/Browse';
import Favorites from '../views/Favorites';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Browse} />
      <Route exact path="/favorites" component={Favorites} />
    </Switch>
  );
}

export default Router;
