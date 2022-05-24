import { Tabs as AntdTabs, TabsProps } from "antd";

import "./index.css";

const Tabs = (props) => {
  return <AntdTabs className="custom-tabs" {...props} />;
};

export default Tabs;
