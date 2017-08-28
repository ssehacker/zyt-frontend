import classnames from 'classnames';
import './Card.less';

const PropTypes = React.PropTypes;
class Card extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, // 时间戳
    image: PropTypes.string,
    desc: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { title, date, image, desc, onClick } = this.props;
    return (
      <div className="ws-card" onClick={onClick}>
        <h4 title={title}>{title}</h4>
        <cite>{new Date(date).toLocaleDateString()}</cite>
        <div className={classnames({ 'ws-card-cover': true, 'ws-hidden': !image })}>
          <img src={image} />
        </div>
        <p>{desc}</p>
        <a><span>阅读全文</span><i className="iconfont icon-right" /></a>
      </div>
    )
  }
}

export default Card;
