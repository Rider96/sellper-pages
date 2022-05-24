import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import NoticeItem from "../../organisms/service/notice/noticeItem";

let noticeData = [
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
  },
  {
    id: "3",
    last: false,
  },
  {
    id: "4",
    last: false,
  },
  {
    id: "5",
    last: false,
  },
  {
    id: "6",
    last: true,
  },
];

function Notice() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemClickedEvent, setItemClickedEvent] = useState(false);

  const itemClicked = (value) => {
    if (noticeData.length > 0) {
      let findIndex = noticeData.findIndex((item) => item.id === value.id);
      let tempNoticeData = noticeData;
      tempNoticeData[findIndex] = {
        ...value,
        checked: !value.checked,
      };
      noticeData = tempNoticeData;
      setItemClickedEvent(!itemClickedEvent);
    }
  };
  return (
    <>
      <div
        style={{
          marginTop: isSmall ? 40 : 56,
          marginBottom: isSmall ? 60 : 137,
        }}
      >
        {noticeData?.map((item, index) => {
          return (
            <NoticeItem
              data={item}
              key={item.id}
              onClick={() => {
                itemClicked(item);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Notice;
