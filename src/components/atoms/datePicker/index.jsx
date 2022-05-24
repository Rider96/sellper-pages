import koKR from "antd/lib/date-picker/locale/ko_KR";
import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";
import generatePicker from "antd/es/date-picker/generatePicker";
import "antd/es/date-picker/style/index";

import "./index.css";

const SetDatePicker = generatePicker(dateFnsGenerateConfig);

const DatePicker = (props) => {
  koKR.lang.locale = "ko";

  return <SetDatePicker {...props} locale={koKR} />;
};

export default DatePicker;
