import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { IonApp, IonSplitPane, IonPage, IonRouterOutlet } from '@ionic/react';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import List from './pages/List';
import Login from './pages/Login';
import Register from './pages/Register';
import MyPage from './pages/MyPage';
import Parser from './pages/Parser';
import DoneInfo from './pages/DoneInfo';
import Item1 from './pages/Item1Info';
import Item2 from './pages/Item2Info';

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: 'home'
  },
  {
    title: 'Login',
    url: '/home/login',
    icon: 'information-circle-outline'
  },
  {
    title: 'MyPage',
    url: '/home/mypage',
    icon: 'person'
  }
];


const App: React.SFC = () => (
  <Router>
    <Route exact path="/" render={() => <Redirect to="/home"/>} />
    <div className="App">
      <IonApp>
        <IonSplitPane contentId="main">
          <Menu appPages={appPages}/>
          <IonPage id="main">
            <IonRouterOutlet>
              <Route path="/:tab(home)" component={Home} exact={true} />
              <Route path="/:tab(home)/login" component={Login} exact={true} />
              <Route path="/:tab(home)/register" component={Register} exact={true} />
              <Route path="/:tab(home)/mypage" component={MyPage} exact={true} />
              <Route path="/:tab(home)/parser" component={Parser} exact={true} />
              <Route path="/:tab(home)/doneinfo" component={DoneInfo} exact={true} />
              <Route path="/:tab(home)/item1" component={Item1} exact={true}/>
              <Route path="/:tab(home)/item2" component={Item2} exact={true}/>
            </IonRouterOutlet>
          </IonPage>
        </IonSplitPane>
      </IonApp>
    </div>
  </Router>
);

export default App;
