import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css");
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');

        @font-face {
          font-family: "Pretendard-Regular";
          src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
          font-weight: 400;
          font-style: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
        }
        @font-face {
          font-family: "Pretendard-Bold";
          src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
            format("woff");
          font-weight: 700;
          font-style: normal;
        }

        @font-face {
          font-family: "Pretendard-Medium";
          src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff")
            format("woff");
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: "Pretendard-ExtraBold";
          src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff")
            format("woff");
          font-weight: 800;
          font-style: normal;
        }

        @font-face {
          font-family: "Pretendard-Black";
          src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff")
            format("woff");
          font-weight: 900;
          font-style: normal;
        }
         }
      `}
    />
  );
};

export default GlobalStyles;
