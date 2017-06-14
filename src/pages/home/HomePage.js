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

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <div className="ws-home">
        <div className="ws-banner">
          五之行
        </div>
        <div className="ws-box theme">
          <Link to="/theme">专题</Link>
        </div>
        <div className="ws-box product">
          <Link to="/intro">产品介绍</Link>
        </div>
        <div className="ws-box about">
          <Link to="/about">关于我们</Link>
        </div>
        <div className="ws-box join">
          <Link to="/join">招商加盟/人才招聘</Link>
        </div>
      </div>
    );
  }
}
