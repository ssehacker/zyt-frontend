import Breadcrumb from '../../components/breadcrumb';
import { getThemes, indexBy, go } from '../../util';
import './Article.less';

let themes = getThemes();
window.themes = themes;
window.indexBy = indexBy;
themes = indexBy(themes, 'id');

class Article extends React.Component {

  static propTypes = {
    themeId: React.PropTypes.number,
  };

  render() {
    const { themeId } = this.props.location.query;
    const theme = themes[themeId];
    return (
      <div className="neo-article">
        <Breadcrumb title={theme.name} goBack={() => {go(`/theme/${theme.id}`)}} />
        <div className="neo-article-main">
          <h4>特朗普称若情况允许愿与金正恩会面</h4>
          <span className="neo-article-date">2017/5/5</span>
          <div className="neo-article-body">
            <p>特朗普当天在白宫椭圆办公室接受彭博社专访时做出上述表态。特朗普说，“如果与他(金正恩)会面是一件可行之事，我肯定会这么做，并且会感到荣幸，但前提是情况要允许。”他说，“大多数政治人物不会明确表态愿意与金正恩会面，但我愿意。”</p>
            <p>特朗普当天在白宫椭圆办公室接受彭博社专访时做出上述表态。特朗普说，“如果与他(金正恩)会面是一件可行之事，我肯定会这么做，并且会感到荣幸，但前提是情况要允许。”他说，“大多数政治人物不会明确表态愿意与金正恩会面，但我愿意。”</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
