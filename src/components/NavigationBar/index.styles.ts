import styled from "styled-components";

export const NavigationBarContainer = styled.div`
  width: 70px;
  height: 100%;
  background-color: #ddd;
  padding: 68px 0 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  -webkit-app-region: drag;

  & > .navigator-top-content,
  & > .navigator-bottom-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    -webkit-app-region: no-drag;
  }
`;

export const IconBoxTop = styled.div`
  margin-top: 20px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const IconBoxBottom = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
