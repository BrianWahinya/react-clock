import Icon from "../Icon/Icon";
import "./css/btnmodal.css";

const BtnModal = (props) => {
  const { icon, cls, name, onClick, ...rest } = props;
  return (
    <button className={`btn-modal ${cls}`} onClick={onClick} {...rest}>
      <Icon type={icon} />
      <span>{name}</span>
    </button>
  );
};

export default BtnModal;
