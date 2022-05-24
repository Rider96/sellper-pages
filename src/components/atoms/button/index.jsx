import { Button as AntdButton } from "antd";

import "./index.css";

const Button = (props) => {
  return <AntdButton className="custom-button" {...props} />;
};

export default Button;
