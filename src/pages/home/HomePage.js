/**
 * Created by ssehacker on 2017/4/15.
 */
import './HomePage.less';
import { go, request } from '../../util';

const { Link } = ReactRouter;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  goto(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    return (
      <div className="ws-home">
        <div className="ws-banner">
          <img src="/images/banner.jpeg" />
        </div>
        <div className="ws-box theme" onClick={this.goto.bind(this, '/theme')}>
          <i className="iconfont icon-category" />
          <a>专题</a>
        </div>
        <div className="ws-box product" onClick={() => { window.location.href = 'https://kdt.im/l5ZB6h';}}>
          <i className="iconfont icon-shop" />
          <a>微商城</a>
        </div>
        <div className="ws-box about" onClick={this.goto.bind(this, '/about')}>
          <i className="iconfont icon-about" />
          <Link to="/about">关于我们</Link>
        </div>
        <div className="ws-box join" onClick={this.goto.bind(this, '/join')}>
          <i className="iconfont icon-woshou" />
          <Link to="/join">招商加盟/人才招聘</Link>
        </div>
      </div>
    );
  }
}
