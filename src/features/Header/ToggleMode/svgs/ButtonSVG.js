import { StyledSVG } from "../../../../common/svg";

export const ButtonSVG = ({ hover, darkMode }) => {
  return (
    <StyledSVG
      width="48"
      height="26"
      viewBox="0 0 48 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="bg">
        <path
          id="Vector"
          d="M13.1765 0.5H34.8235C41.8309 0.5 47.5 6.10278 47.5 13C47.5 19.8972 41.8309 25.5 34.8235 25.5H13.1765C6.16907 25.5 0.5 19.8972 0.5 13C0.5 6.10278 6.16907 0.5 13.1765 0.5Z"
          fill="white"
          stroke={darkMode ? "#FFFFFF" : "#6E7E91"}
        />
        <path
          id="Vector_2"
          d="M34.8236 0.464233H13.1766C6.15932 0.464233 0.470703 6.07666 0.470703 12.9999C0.470703 19.9232 6.15932 25.5357 13.1766 25.5357H34.8236C41.8409 25.5357 47.5295 19.9232 47.5295 12.9999C47.5295 6.07666 41.8409 0.464233 34.8236 0.464233Z"
          fill={darkMode ? "#363636B8" : "#E5E5E5"}
          stroke="#D1D5DA"
          stroke-opacity="0.3"
        />
      </g>
    </StyledSVG>
  );
};
