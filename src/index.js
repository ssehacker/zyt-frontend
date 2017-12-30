import './App.less';
import './app/common.less';
import {
  HomePage,
  ThemeListPage,
  ThemePage,
  IntroductionPage,
  About,
  Contact,
  Join,
  Article,
  Jobs,
} from './pages';

let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <div className="ws-app">
        {children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="theme" component={ThemeListPage} />
      <Route path="theme/:id" component={ThemePage} />
      <Route path="intro" component={IntroductionPage} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="join" component={Join} />
      <Route path="jobs" component={Jobs} />
      <Route path="article/:id" component={Article} />
    </Route>
  </Router>
), document.getElementById('app'));