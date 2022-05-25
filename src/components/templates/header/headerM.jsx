import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import SideMenu from "../sideMenu/sideMenu";

const Layout = styled.div`
  display: flex;
  background: #ffffff;
  height: 60px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`;

function HeaderM(props) {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const isLogin = localStorage.getItem("isLogin");
  const history = useHistory();

  return (
    <Layout>
      {isSideMenu ? <SideMenu {...props} close={setIsSideMenu} /> : null}

      <img
        onClick={() => {
          setIsSideMenu(true);
        }}
        style={{
          cursor: "pointer",
          width: 20,
          height: 12,
        }}
        src="./sellper-pages/assets/icons/menu_m.png"
        alt="menu_m"
      />
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          lineHeight: 0.7,
        }}
      >
        <div
          onClick={() => history.replace("/")}
          style={{
            display: "flex",
            alignItems: "flex-end",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              fontWeight: "800",
              fontSize: 20,
              marginRight: 5,
              fontFamily: "Pretendard-ExtraBold",
              color: "#191919",
            }}
          >
            SELLPER
          </div>
          <div
            style={{
              fontWeight: "500",
              fontSize: 11,
              fontFamily: "Pretendard-Medium",
              color: "#555555",
            }}
          >
            Data lab
          </div>
        </div>
      </div>

      {isLogin === "true" ? (
        <img
          onClick={() => history.push("/myPage/myInfo")}
          style={{
            cursor: "pointer",
            width: 22,
            height: 22,
          }}
          src="./sellper-pages/assets/icons/mypage_m.png"
          alt="mypage_m"
        />
      ) : null}
    </Layout>
  );
}

export default HeaderM;
