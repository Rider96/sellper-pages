import { Checkbox as AntdCheckbox } from "antd";

import "./index.css";

const CheckBox = (props) => {
  return <AntdCheckbox className="custom-checkbox" {...props} />;
};

export default CheckBox;
