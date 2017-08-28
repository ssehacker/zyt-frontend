
import * as util from '../../util';
import Breadcrumb from '../../components/breadcrumb';
import Card from '../../components/card';
import './Theme.less';

class Theme extends React.Component {

  renderBreadCrumbs() {
    return (
      <Breadcrumb title="主题列表" goBack={() => {util.go('/theme')}} />
    )
  }

  handleCardClick(e, id, themeId) {
    util.go(`article/${id}?themeId=${themeId}`);
  }

  getArticleList() {
    const themeId = this.props.routeParams.id;
    return util.getArticleByThemeId(themeId);
  }

  renderArticleList() {
    const { handleCardClick } = this;
    const themeId = this.props.routeParams.id;
    const list = this.getArticleList();
    return list.map(item => {
      const props = {...item, desc: util.removeExpress(item.desc)};
      return (
        <Card
          {...props}
          key={String(item.id)}
          onClick={(e) => {handleCardClick(e, item.id, themeId)}}
        />)
      }
    )
  }

  render() {
    const me = this;
    return (
      <div className="ws-theme">
        {me.renderBreadCrumbs()}
        <div className="ws-theme-body">
          {me.renderArticleList()}
        </div>
      </div>
    );
  }
}

export default Theme;
