import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import GrayTextButton from "../../molecules/buttons/grayTextButton";
import InquiryItem from "../../organisms/service/question/inquiryItem";

let inquiryData = [
  {
    id: "0",
    last: false,
  },
  {
    id: "1",
    last: false,
  },
  {
    id: "2",
    last: false,
    comment: true,
  },
  {
    id: "3",
    last: false,
    comment: true,
  },
  {
    id: "4",
    last: false,
  },
  {
    id: "5",
    last: false,
    comment: true,
  },
  {
    id: "6",
    last: true,
  },
];

function InquiryM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const isLogin = localStorage.getItem("isLogin");
  const history = useHistory();
  const [itemClickedEvent, setItemClickedEvent] = useState(false);

  const itemClicked = (value) => {
    if (inquiryData.length > 0) {
      let findIndex = inquiryData.findIndex((item) => item.id === value.id);
      let temp = inquiryData;
      temp[findIndex] = {
        ...value,
        checked: !value.checked,
      };
      inquiryData = temp;
      setItemClickedEvent(!itemClickedEvent);
    }
  };

  return (
    <>
      <div>
        <div
          style={{
            marginTop: 32,
          }}
        />
        {isLogin === "true" ? (
          <div
            onClick={() => {
              history.push("/inquiryCreate");
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              style={{
                width: 10,
                height: 10,
                marginRight: 4,
                marginBottom: 2,
              }}
              src="assets/icons/keyword_edit.png"
              alt="keyword_edit"
            />
            <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                fontFamily: "Pretendard",
                color: "#555555",
                textDecorationLine: "underline",
              }}
            >
              글쓰기
            </div>
          </div>
        ) : null}

        <div
          style={{
            marginTop: 12,
            marginBottom: 67,
          }}
        >
          {inquiryData?.map((item, index) => {
            return (
              <InquiryItem
                data={item}
                key={item.id}
                onClick={() => {
                  itemClicked(item);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InquiryM;
