import Breadcrumb from '../../components/breadcrumb';
import './About.less';

class About extends React.Component {

  render() {
    return (
      <div className="neo-about">
        <Breadcrumb />
        <div className="ws-articles">
          <div className="ws-article">
            <h3>公司简介</h3>
            <div className="ws-article-content">
              <span className="ws-highlight">五之行生物科技有限公司</span>成立于2016年3月30日，总部设在佛山市南海区，拥有合作门店达60多家，主要分布在广州及佛山，设有专门的质量管理监督部门、仓储物流配送中心及系统完善的数据处理中心。现有员工40多人，公司本着“城市做人，踏实经营，把健康幸福带给您”的企业经营宗旨，坚持“以人为本，顾客至上”的企业经营理念，提倡“诚信、团结、敬业、奋斗”的企业精神文化，努力不懈地为广大群众提供优质的产品与真诚、专业的服务，深受广大消费者的青睐。
            </div>
          </div>
          <div className="ws-article">
            <h3>联系方式</h3>
            <div className="ws-article-content">
              <p>电话： 0757-86766670</p>
              <p>邮箱： xxx@gmail.com</p>
              <p>想加入我们吗？发送简历到<span className="ws-highlight">xxx@gmail.com</span>。</p>
            </div>
          </div>
          <div className="ws-article">
            <h3>地址</h3>
            <div className="ws-article-content">
              广东省佛山市南海区平洲镇平西金穗花园
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
