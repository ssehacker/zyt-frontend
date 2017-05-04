/**
 * Created by ssehacker on 2017/4/18.
 */
import { go, request, getThemes } from '../../util';
import Breadcrumb from '../../components/breadcrumb';
import './ThemePage.less';

export default class PaySuccessPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  renderList() {
    return getThemes().map((item) => {
      return (
        <li key={item.id}>
          <a onClick={() => {go(`/theme/${item.id}`);} }>
            <cite><i className="iconfont icon-collect" /></cite>
            <span>{item.name}</span>
            <i className="iconfont icon-right" />
          </a>
        </li>
      );
    });
  }

  renderBreadCrumbs() {
    return (
      <Breadcrumb/>
    )
  }

  render() {
    const me = this;
    return (
      <div className="ws-theme-list-page">
        {me.renderBreadCrumbs()}
        <ul className="ws-theme-list">
          {me.renderList()}
        </ul>
      </div>
    );
  }
}
