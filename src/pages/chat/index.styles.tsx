import styled from "styled-components";

export const CharPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ResponsiveBox = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  min-width: 260px;
  max-width: 310px;
`;

export const MessageBox = styled.div`
  flex: 1;
  position: relative;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const DraggableLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #ccc;
  left: 260px;
  cursor: ew-resize;
`;

export const MessageTitle = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid #ddd;
  -webkit-app-region: drag;
`;

export const NoDraggableContent = styled.div`
  line-height: 24px;
  padding: 0 5px;
  user-select: none;
  -webkit-app-region: no-drag;
`;

export const MessageBottom = styled.div`
  bottom: 0;
  width: 100%;
  min-height: 150px;
  height: 100px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const MessageToolsContent = styled.div`
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const MessageToolsLeft = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  svg {
    margin-right: 15px;
  }
`;

export const MessageToolsRight = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  svg {
    margin-left: 15px;
  }
`;

export const TextAreaContainer = styled.div`
  contenteditable
`;

export const Drawer = styled.div`
  width: 230px;
  height: calc(100% - 60px);
  position: absolute;
  right: 0;
  background: #fff;
  transition: all 0.3s;
  transform: translateX(100%);
`;

export const DraggableContentLine = styled.div`
  height: 1px;
  background: #ccc;
  width: 100%;
  cursor: ns-resize;
`;

export const ChatRecordBox = styled.div`
  flex: 1;
  padding: 0 15px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: colume;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #eee;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }
`;

export const InputMessageContent = styled.div`
  flex: 1;
  max-height: 100%;
  border: none;
  outline: none;
`;
