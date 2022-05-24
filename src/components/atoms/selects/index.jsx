import { Select as AntdSelect } from "antd";

import "./index.css";

const { Option } = AntdSelect;

const Select = (props) => {
  const options = props.data.map((d) => (
    <Option value={d.value}>{d.label}</Option>
  ));

  return (
    <div className="select-wrapper" style={props.wrapperStyle}>
      <img
        src="./assets/icons/drop_down.png"
        alt="drop_down"
        className="select-icon"
      ></img>
      <AntdSelect
        suffixIcon={<></>}
        size={"large"}
        className="custom-select"
        {...props}
      >
        {options}
      </AntdSelect>
    </div>
  );
};

export default Select;
