import Breadcrumb from '../../components/breadcrumb';
import './Jobs.less';

class Jobs extends React.Component {

  render() {
    return (
      <div className="neo-join">
        <Breadcrumb />
        <div className="ws-articles">
          <div className="ws-article">
            <h3>人才招募</h3>
            <div className="ws-article-content">
              <h4>微商培训讲师</h4>
              <p>职位月薪：8000-15000元/月</p>
              <p>工作地点：广东佛山-南海区</p>
              <p>工作性质：全职</p>
              <p>工作经验：1-3年</p>
              <p>最低学历：大专</p>
              <p>最低学历：大专</p>
              <p>职位类别：企业培训师/讲师</p>
              <a className="title">岗位职责</a>
              <p>1. 微商讲师负责公司产品的功能及代理的宣讲，对客户进行相关销售方面的培训讲课</p>
              <p>2. 负责为微商代理及意向代理进行培训讲课</p>
              <p>3. 培训课件的开发制作</p>
              <p>4. 公司招商会、展会的主持及宣讲</p>
              <a className="title">任职要求</a>
              <p>1. 大专以上学历；有化妆品、医疗器械相关经验者优先；懂中医养生知识</p>
              <p>2. 熟悉互联网、微商培训模式</p>
              <p>3. 个性开朗，现场把控能力强，具有较强的感染力、学习能力、应变能力</p>
              <p>4. 适应出差</p>
            </div>
            <a className="tips">发送简历到：hisangchunw@foxmail.com</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
