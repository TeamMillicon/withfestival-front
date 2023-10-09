/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { chatBoxProps } from "../../@types/typs";
import { ReactComponent as Close } from "../../images/community/close.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import API from "../../utils/api";

export default function ChatBox({
  id,
  text,
  changeTrigger,
  trigger,
}: chatBoxProps) {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["WF_ID"]);
  let AT: string | null = null;
  let RT: string | null = null;

  if (cookies.WF_ID) {
    AT = cookies.WF_ID.AT;
    RT = cookies.WF_ID.RT;
  }

  function deleteChat() {
    console.log("AT " + AT, "RT " + RT);
    if (window.confirm(`${id}번째 외침을 정말 삭제하시겠어요?`)) {
      API.delete(`/api/v2/bambooforest/${id}`, {
        headers: {
          accessToken: `Bearer ${AT}`,
        },
      })
        .then(() => {
          if (changeTrigger) {
            changeTrigger(!trigger);
          }
          alert("성공적으로 삭제되었어요");
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errorMessage
          ) {
            if (
              error.response.data.errorMessage ===
              "기한이 만료된 AccessToken입니다."
            ) {
              API.get(`/api/v2/member/rotate`, {
                headers: {
                  refreshToken: `Bearer ${RT}`,
                },
              })
                .then((res) => {
                  setCookie("WF_ID", {
                    AT: res.data.accessToken,
                    RT: res.data.refreshToken,
                  });
                  AT = res.data.accessToken;
                  RT = res.data.refreshToken;
                  return deleteChat();
                })
                .catch(() => {
                  navigate("/error");
                });
            }
          }
        });
    }
  }

  return (
    <div
      css={css`
        position: relative;
        width: auto;
        background-color: #f0f1f4;
        border-radius: 0.5em;

        display: flex;
        flex-direction: column;
        row-gap: 0.6em;
        padding: 1.2em;
        padding-top: 1.35em;
        padding-bottom: 1.35em;
        box-sizing: border-box;
      `}
    >
      {cookies.WF_ID && cookies.WF_ID.AT && cookies.WF_ID.RT && (
        <Close
          css={css`
            position: absolute;
            display: block;
            width: 1.2em;
            height: 1.2em;
            right: 1.2em;
            cursor: pointer;
            margin-top: -0.1em;

            path {
              fill: #404040;
            }
          `}
          onClick={deleteChat}
        />
      )}
      <span
        css={css`
          font-family: "Pretendard-Bold";
          color: #4e5968;
        `}
      >
        #{id}번째 외침
      </span>
      <span
        css={css`
          line-height: 1.5em;
          color: #4e5968;
          white-space: pre-wrap;
        `}
      >
        {text}
      </span>
    </div>
  );
}
