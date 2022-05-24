import "./index.css";

const MobileModal = (props) => {
  return (
    <div className="custom-mask">
      <div className="custom-modal">{props.children}</div>
    </div>
  );
};

export default MobileModal;
