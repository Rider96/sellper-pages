import React, { useState } from "react";

import useDisplay from "../../../hooks/useDisplay";
import InputSearch from "../../atoms/inputSearch";
import QuestionItem from "../../organisms/service/question/questionItem";

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

function Question() {
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
      <div>
        <InputSearch
          style={{ marginTop: isSmall ? 22 : 24 }}
          placeholder="어떤 부분을 도와드릴까요?"
        />
        <div
          style={{
            marginTop: isSmall ? 60 : 40,
            marginBottom: isSmall ? 60 : 120,
          }}
        >
          {noticeData?.map((item, index) => {
            return (
              <QuestionItem
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

export default Question;
