import { Input as AntdInput } from "antd";
import "./index.css";

const { TextArea } = AntdInput;

const TextAreaInput = (props) => {
  return <TextArea className="custom-textarea" {...props} />;
};

export default TextAreaInput;
