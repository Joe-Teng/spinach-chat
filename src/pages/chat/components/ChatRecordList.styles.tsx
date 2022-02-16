import styled from "styled-components";

export const ChatRecordListContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const triangleStyles = (sendByMe: boolean | undefined) => {
  return {
    content: '""',
    position: "absolute",
    width: 0,
    height: 0,
    border: "4px solid transparent",
    backgroundColor: "transparent",
    ...(!!sendByMe
      ? {
          top: "12px",
          right: "-8px",
          borderLeftColor: "#9f0"
        }
      : {
          top: "12px",
          left: "-8px",
          borderRightColor: "lightskyblue"
        })
  };
};
