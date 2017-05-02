
import { go } from '../../util';
import Breadcrumb from '../../components/breadcrumb';
import './Theme.less';

class Theme extends React.Component {

  renderBreadCrumbs() {
    const id = this.props.routeParams.id;
    return (
      <Breadcrumb title={id} goBack={() => {go('/theme')}} />
    )
  }

  render() {
    const me = this;
    return (
      <div className="ws-theme">
        {me.renderBreadCrumbs()}
        <div className="ws-theme-body">
          待定
        </div>
      </div>
    );
  }
}

export default Theme;
