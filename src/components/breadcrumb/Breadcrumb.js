/**
 * Created by ssehacker on 2017/5/1.
 */
import classnames from 'classnames';
import { go } from '../../util';
import './Breadcrumb.less';

export default class Breadcrumb extends React.Component {

  static propTypes = {
    goBack: React.PropTypes.func,
    title: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  goIndex() {
    go('/');
  }

  render() {
    const { title, goBack } = this.props;
    const { goIndex } = this;
    return (
      <div className="ws-breadcrumb">
        <i
          onClick={goBack}
          className={classnames({ iconfont: true, 'icon-left': true, 'ws-hidden': !title})}
        />
        <span>{title}</span>
        <i
          onClick={goIndex}
          className="iconfont icon-index"
        />
      </div>
    );
  }
}