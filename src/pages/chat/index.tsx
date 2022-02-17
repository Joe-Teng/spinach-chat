import {
  FC,
  useRef,
  useEffect,
  useContext,
  useState,
  KeyboardEvent
} from "react";
import { wwsContext, IwwsContext } from "../../context";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index.types";
import { IChatFriendsList } from "./index.types";
import { login } from "../../store";
import { Users } from "../../mock/user.config";
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
  Live,
  User
} from "../../components/Icon";

let disableSendMessage = false;
const ChatPage: FC<{ ws: WebSocket | null; user: any }> = ({ ws, user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState<
    IChatFriendsList["frindsStuff"][0]
  >({});
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
      return ((
        (drawerRef.current as HTMLDivElement).style as CSSStyleDeclaration
      ).transform = "translateX(100%)");
    }
    (
      (drawerRef.current as HTMLDivElement).style as CSSStyleDeclaration
    ).transform = "translateX(0)";
  };

  const onDraggableMouseDown = () => {
    const resize = dragRef.current;
    document.onmousemove = function (e) {
      (
        (chatListRef.current as HTMLDivElement)?.style as CSSStyleDeclaration
      ).width = e.clientX - 70 + "px";
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
      (
        (messageContentRef.current as HTMLDivElement)
          ?.style as CSSStyleDeclaration
      ).height =
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

  const sendMessage = () => {
    ws?.send(
      JSON.stringify({
        from: user.name,
        to: selectedUser?.name,
        message: inputMessageRef.current?.innerText,
        socketId: localStorage.getItem("socketId")
      })
    );
  };

  useEffect(() => {
    dispatch(
      login(
        Users.filter(
          (item) =>
            item.name === history?.location?.pathname.replace("/chat/", "")
        )?.[0]
      )
    );
    (inputMessageRef.current as HTMLDivElement).contentEditable = "true";
  }, []);

  return (
    <CharPageContainer>
      <ResponsiveBox ref={chatListRef}>
        <Search />
        <ChatList frindsStuff={[selectedUser, setSelectedUser]} />
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
        <div onClick={sendMessage}>发送</div>
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
                disableSendMessage = true;
              }}
              onBlur={() => {
                disableSendMessage = false;
              }}
              onCompositionStart={() => {
                disableSendMessage = false;
              }}
              onCompositionEnd={() => {
                disableSendMessage = true;
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
