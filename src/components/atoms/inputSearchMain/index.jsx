import "./index.css";

const InputSearchMain = (props) => {
  return (
    <div className="wrapper-main" style={props.wrapperStyle}>
      <img
        src="./sellper-pages/assets/icons/search.png"
        alt="search"
        className="icon-main"
      ></img>
      <input
        className="custom-input-search-main"
        type="text"
        name="name"
        style={props.style}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputSearchMain;
