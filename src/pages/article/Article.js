import Breadcrumb from '../../components/breadcrumb';
import { getThemes, indexBy, go, getArticleById } from '../../util';
import Markdown from '../../components/markdown';
import './Article.less';

let themes = getThemes();
themes = indexBy(themes, 'id');

class Article extends React.Component {

  static propTypes = {
    themeId: React.PropTypes.number,
  };

  render() {
    const id = this.props.params.id;
    const { themeId } = this.props.location.query;

    const article = getArticleById(id);
    const theme = themes[themeId];
    return (
      <div className="neo-article">
        <Breadcrumb title={theme.name} goBack={() => {go(`/theme/${theme.id}`)}} />
        <div className="neo-article-main">
          <h4>{article.title}</h4>
          <span className="neo-article-date">{article.date}</span>
          <div className="neo-article-body">
            <Markdown source={article.desc} />

          </div>
        </div>
      </div>
    );
  }
}

export default Article;
