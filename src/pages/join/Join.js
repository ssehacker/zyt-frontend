import Breadcrumb from '../../components/breadcrumb';
import './Join.less';

class Join extends React.Component {

  renderList = () => {
    const list = [
      '营销模式支持（一套如何卖产品的模式）',
      '培训支持',
      '网络广告支持',
      '产品广告片支持',
      '销售文案支持',
      '客户服务支持',
      '物流支持',
      '产品售后服务支持',
    ];

    return list.map((item, index) => {
      if (index === list.length - 1) {
        return (
          <span key={index}>{item}。</span>
        );
      }
      return (
        <span key={index}>{item}，</span>
      );
    });
  };

  render() {
    return (
      <div className="neo-join">
        <Breadcrumb />
        <div className="ws-articles">
          <div className="ws-article">
            <h3>招商加盟</h3>
            <div className="ws-article-content">
              <p>我们全球首创家用矿石中药热敷理疗，获得多项技术专利，绿色安全健康。</p>
              <p>质量安全保证品牌，只做良心产品，金牌质量安全保证，1年免费保修（全国首创），半年以内保修免运费。</p>
              <div>
                <a>品牌帮扶政策</a>
                {this.renderList()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
