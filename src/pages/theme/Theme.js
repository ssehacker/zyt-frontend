
import { go, indexBy } from '../../util';
import Breadcrumb from '../../components/breadcrumb';
import Card from '../../components/card';
import './Theme.less';

class Theme extends React.Component {

  renderBreadCrumbs() {
    return (
      <Breadcrumb title="主题列表" goBack={() => {go('/theme')}} />
    )
  }

  handleCardClick(e, id, themeId) {
    go(`article/${id}?themeId=${themeId}`);
  }

  renderArticleList() {
    const { handleCardClick } = this;
    const themeId = this.props.routeParams.id;
    const list = [
      {
        id: '1',
        title: '特朗普称若情况允许愿与金正恩会面 白宫:目前不行',
        date: Date.now(),
        image: 'http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg',
        desc: '特朗普当天在白宫椭圆办公室接受彭博社专访时做出上述表态。特朗普说，“如果与他(金正恩)会面是一件可行之事，我肯定会这么做，并且会感到荣幸，但前提是情况要允许。”他说，“大多数政治人物不会明确表态愿意与金正恩会面，但我愿意。”'
      },
      {
        id: '2',
        title: '俄罗斯大火烧入大兴安岭伊木河林场 李克强作批示',
        date: Date.now(),
        desc: '国家森林防火指挥部发布最新消息，4月30日14时，俄罗斯森林火灾烧入我国内蒙古大兴安岭 北部原始林区乌玛林业局伊木河林场。截至目前，火场东线有600米火线，北线有200米火线，西线有2条20米断续火线。当地共调集1345人进行扑救，已有860人进入火场，全力扑救。国家森防指紧急协调7架直升机在火场执行兵力运送、火场侦察和吊桶灭火任务，今日(1日)共运兵20架次，吊桶灭火14架次。火场靠近边境，偏远无路，地势陡峭，扑救困难。火场天气多云，东北风2级，气温17度。'
      },
      {
        id: '3',
        title: '俄罗斯大火烧入大兴安岭伊木河林场 李克强作批示2',
        date: Date.now(),
        desc: '国家森林防火指挥部发布最新消息，4月30日14时，俄罗斯森林火灾烧入我国内蒙古大兴安岭 北部原始林区乌玛林业局伊木河林场。截至目前，火场东线有600米火线，北线有200米火线，西线有2条20米断续火线。当地共调集1345人进行扑救，已有860人进入火场，全力扑救。国家森防指紧急协调7架直升机在火场执行兵力运送、火场侦察和吊桶灭火任务，今日(1日)共运兵20架次，吊桶灭火14架次。火场靠近边境，偏远无路，地势陡峭，扑救困难。火场天气多云，东北风2级，气温17度。'
      },
      {
        id: '4',
        title: '俄罗斯大火烧入大兴安岭伊木河林场 李克强作批示3',
        date: Date.now(),
        desc: '国家森林防火指挥部发布最新消息，4月30日14时，俄罗斯森林火灾烧入我国内蒙古大兴安岭 北部原始林区乌玛林业局伊木河林场。截至目前，火场东线有600米火线，北线有200米火线，西线有2条20米断续火线。当地共调集1345人进行扑救，已有860人进入火场，全力扑救。国家森防指紧急协调7架直升机在火场执行兵力运送、火场侦察和吊桶灭火任务，今日(1日)共运兵20架次，吊桶灭火14架次。火场靠近边境，偏远无路，地势陡峭，扑救困难。火场天气多云，东北风2级，气温17度。'
      },
    ];
    return list.map(item => (<Card {...item} key={item.id} onClick={(e) => {handleCardClick(e, item.id, themeId)}} />))
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
