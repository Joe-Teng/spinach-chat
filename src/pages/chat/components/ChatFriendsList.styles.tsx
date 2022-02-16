import styled from "styled-components";

export const ChatListContaier = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior:smooth;
  user-select: none;
`;

export const ChatListItemContainer = styled.div`
  height: 68px;
  background-color: #fff;
  padding: 15px 12px;
  box-sizing: border-box;
  display: flex;

  &.active-chat {
    background-color: #e9e9e9;
  }
`;

export const ChatAvatar = styled.div`
  display: flex;
  align-items: center;
`

export const ChatInfo = styled.div`
  flex: 1;
  overflow: hidden;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ChatTitle = styled.div`
  font-size: 0.8rem;
  line-height: 0.8rem;
  color: #000;
  display: flex;
  aling-items: center;
  justify-content: space-between;
`

export const ChatContent = styled.div`
  font-size: 0.7rem;
  line-height: 0.7rem;
  color: gray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ChatInfoContent = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 5px;
`

export const ChatName = styled.div`
  font-size: 0.9rem;
`

export const ChatDate = styled.div`
  font-size: 0.6rem;
  color: gray;
`
