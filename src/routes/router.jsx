import { Route, Switch, Redirect } from "react-router-dom";

import Main from "../pages/main";
import Membership from "../pages/membership";
import ShoppingTrend from "../pages/shoppingTrend";
import Service from "../pages/service";
import MyPage from "../pages/myPage";
import InquiryCreate from "../pages/inquiryCreate";
import ConsultingReady from "../pages/consultingReady";
import Consulting from "../pages/consulting";
import KeywordTrend from "../pages/keywordTrend";

import Login from "../pages/login";
import Register from "../pages/register";
import PasswordFind from "../pages/passwordFind";

const Router = () => {
  return (
    <Switch>
      <Route exact={true} path="/main" component={Main} />

      <Route path="/shoppingTrend/:key" component={ShoppingTrend} />
      <Route path="/shoppingTrend" component={ShoppingTrend} />

      <Route path="/membership" component={Membership} />

      <Route path="/service/:key" component={Service} />
      <Route path="/service" component={Service} />

      <Route path="/myPage/:key" component={MyPage} />
      <Route path="/myPage" component={MyPage} />

      <Route path="/inquiryCreate" component={InquiryCreate} />

      <Route path="/keywordTrend/:key" component={KeywordTrend} />
      <Route path="/keywordTrend" component={KeywordTrend} />

      <Route path="/consulting/:key" component={Consulting} />
      <Route path="/consulting" component={Consulting} />

      <Route path="/consultingReady/:key" component={ConsultingReady} />
      <Route path="/consultingReady" component={ConsultingReady} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/passwordFind" component={PasswordFind} />

      {/* Not Found */}
      <Route component={() => <Redirect to="/main" />} />
    </Switch>
  );
};

export default Router;
