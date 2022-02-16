import React, { useRef, useEffect, useContext } from "react";
import { wwsContext, IwwsContext } from "../../context";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index.types";
import Search from "./components/Search";
import ChatList from "./components/ChatFriendsList";
import ChaTRecordList from "./components/ChatRecordList";
import {
  CharPageContainer,
  ResponsiveBox,
  MessageBox,
  DraggableLine,
  MessageTitle,
  NoDraggableContent,
  MessageBottom,
  Drawer,
  DraggableContentLine,
  ChatRecordBox,
  MessageToolsContent,
  MessageToolsLeft,
  InputContent,
  MessageToolsRight,
  InputMessageContent
} from "./index.styles";
import {
  More,
  Emoji,
  Folder,
  Cut,
  Message2,
  Video,
  Live
} from "../../components/Icon";

const ChatPage = () => {
  const chatReducerData = useSelector((state: RootState) => state.chatReducer);
  const dragRef = useRef<HTMLDivElement>(null);
  const dragContentRef = useRef<HTMLDivElement>(null);
  const messageContentRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const chatListRef = useRef<HTMLDivElement>(null);
  const inputMessageRef = useRef<HTMLDivElement>(null);
  const chatRecordListRef = useRef<HTMLDivElement>(null);

  const contextData: IwwsContext = useContext(wwsContext);

  const toggleDrawer = () => {
    if (drawerRef.current?.style.transform === "translateX(0px)") {
      return (((drawerRef.current as any).style as any).transform =
        "translateX(100%)");
    }
    ((drawerRef.current as any).style as any).transform = "translateX(0)";
  };

  const onDraggableMouseDown = () => {
    const resize = dragRef.current;
    document.onmousemove = function (e) {
      ((chatListRef.current as HTMLDivElement)?.style as any).width =
        e.clientX - 70 + "px";
    };
    document.onmouseup = function (evt) {
      evt.stopPropagation();
      document.onmousemove = null;
      document.onmouseup = null;
      (resize as any)?.releaseCapture && (resize as any)?.releaseCapture();
    };
  };

  const onDraggableMouseDown2 = () => {
    const resize = dragContentRef.current;
    document.onmousemove = function (e) {
      ((messageContentRef.current as HTMLDivElement)?.style as any).height =
        (document.body.clientHeight - e.clientY >= 350
          ? 350
          : document.body.clientHeight - e.clientY) + "px";
    };
    document.onmouseup = function (evt) {
      evt.stopPropagation();
      document.onmousemove = null;
      document.onmouseup = null;
      (resize as any)?.releaseCapture && (resize as any)?.releaseCapture();
    };
  };

  useEffect(() => {
    (inputMessageRef.current as HTMLDivElement).contentEditable = "true";
  }, []);

  return (
    <CharPageContainer>
      <ResponsiveBox ref={chatListRef}>
        <Search />
        <ChatList />
      </ResponsiveBox>
      <DraggableLine
        ref={dragRef}
        className="draggable-line"
        onMouseDown={() => {
          onDraggableMouseDown();
        }}
      ></DraggableLine>
      <MessageBox>
        <MessageTitle>
          <NoDraggableContent onClick={toggleDrawer}>
            {chatReducerData.currentChat &&
              (chatReducerData.currentChat as any).name}
          </NoDraggableContent>
          <More />
        </MessageTitle>
        <ChatRecordBox ref={chatRecordListRef}>
          <ChaTRecordList
            chatRecordListRef={chatRecordListRef}
            chatRecordData={contextData.chatRecordData}
          />
        </ChatRecordBox>
        <DraggableContentLine
          ref={dragContentRef}
          className="draggable-line"
          onMouseDown={(e) => {
            onDraggableMouseDown2();
          }}
        />
        <MessageBottom ref={messageContentRef}>
          <MessageToolsContent>
            <MessageToolsLeft>
              <Emoji />
              <Folder />
              <Cut />
              <Message2 />
            </MessageToolsLeft>
            <MessageToolsRight>
              <Live />
              <Video />
            </MessageToolsRight>
          </MessageToolsContent>
          <InputContent>
            <InputMessageContent
              ref={inputMessageRef}
              onFocus={() => {
                document.addEventListener("keydown", (e) => {
                  if (e && e.key === "Enter") {
                    e.preventDefault();
                    contextData.ws?.send(
                      (inputMessageRef.current as any).innerText
                    );
                    (inputMessageRef.current as any).innerText = "";
                  }
                });
              }}
              onBlur={() => {
                console.log("%cindex.tsx line:148 11", "color: #007acc;", 11);
                document.removeEventListener("keydown", (e) => {
                  if (e && e.key === "Enter") {
                    e.preventDefault();
                    contextData.ws?.send(
                      (inputMessageRef.current as any).innerText
                    );
                    (inputMessageRef.current as any).innerText = "";
                  }
                });
              }}
            />
          </InputContent>
        </MessageBottom>
        <Drawer ref={drawerRef}></Drawer>
      </MessageBox>
    </CharPageContainer>
  );
};

export default ChatPage;
