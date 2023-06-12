import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
function ScrollTop() {
  return (
    <>
      <ScrollToTop
        smooth
        style={{
          backgroundColor: "#fe9e0d",
          borderRadius: "50%",
          width: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "600",
          height: "50px",
        }}
      >
        <FaArrowUp />
      </ScrollToTop>
    </>
  );
}

export default ScrollTop;
