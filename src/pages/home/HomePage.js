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
        <Link to="/theme">专题</Link>
        <Link to="/intro">产品介绍</Link>
        <Link to="/about">关于我们</Link>
        <Link to="/contact">联系我们</Link>
        <Link to="/join">招商加盟</Link>
      </div>
    );
  }
}
