function LoginLeftUI(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F5F5F5",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            width: 362,
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 120,
          }}
        >
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              fontFamily: "GmarketSans",
              fontWeight: "bold",
              color: "#191919",
            }}
          >
            성공하는 온라인 마케팅,
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              fontFamily: "GmarketSans",
              fontWeight: "bold",
              color: "#0594D7",
            }}
          >
            셀퍼와 함께 매출상승!
          </div>
          <img
            style={{
              width: 289,
              height: 256.03,
            }}
            src="assets/images/rocket.png"
            alt="rocket"
          />
        </div>
      </div>
    </>
  );
}

export default LoginLeftUI;
