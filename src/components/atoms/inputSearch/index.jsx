import "./index.css";

const InputSearch = (props) => {
  return (
    <div className="wrapper" style={props.wrapperStyle}>
      <img
        style={props.iconStyle}
        onClick={props.onClick}
        src="/assets/icons/search.png"
        alt="search"
        className="icon"
      ></img>
      <input
        className="custom-input-search"
        type="text"
        name="name"
        style={props.style}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default InputSearch;
