import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCurrentChat } from "../../../store";
import { RootState } from "../../../store/index.types";
import classNames from "classnames";
import {
  ChatListContaier,
  ChatListItemContainer,
  ChatAvatar,
  ChatInfo,
  ChatTitle,
  ChatContent,
  ChatName,
  ChatDate,
  ChatInfoContent
} from "./ChatFriendsList.styles";
import Avartar from "../../../components/Avatar";
import { ChatListData } from "../../../mock/ChatList";
import { Mute } from "../../../components/Icon";

interface IChatListItem {
  item: {
    img?: string | undefined;
    type?: string | undefined | null;
    name?: string | undefined | null;
    date: string | number | Date;
    content?: string | undefined | null;
    id?: number | undefined | null;
  };
  currentActiveChatBox?: number | undefined | null;
  selectAChatBox: (id: number | undefined | null) => void;
}

const ChatListItem: FC<IChatListItem> = ({
  item,
  currentActiveChatBox,
  selectAChatBox
}) => {
  const dispatch = useDispatch();
  return (
    <ChatListItemContainer
      className={classNames({
        "active-chat": item.id === currentActiveChatBox,
        "top-chat": false,
        "other-chat": false
      })}
      onClick={() => {
        selectAChatBox(item.id);
        dispatch(handleCurrentChat(item));
      }}
    >
      <ChatAvatar>
        <Avartar source={item.img} />
      </ChatAvatar>
      <ChatInfo>
        <ChatTitle>
          <ChatName>{item.name}</ChatName>
          <ChatDate>{`${new Date(item.date)?.toLocaleDateString()}`}</ChatDate>
        </ChatTitle>
        <ChatContent>
          <ChatInfoContent>{item?.content}</ChatInfoContent>
          <Mute />
        </ChatContent>
      </ChatInfo>
    </ChatListItemContainer>
  );
};

const ChatList: FC = () => {
  const chatReducerData = useSelector((state: RootState) => state.chatReducer);
  const [currentActiveChatBox, setCurrentActiveChatBox] = useState<
    number | undefined | null
  >(
    (chatReducerData.currentChat && (chatReducerData.currentChat as any).id) ||
      null
  );
  const selectAChatBox = (id: number | undefined | null) => {
    setCurrentActiveChatBox(id);
    return null;
  };

  return (
    <ChatListContaier>
      {ChatListData.sort((a, b) => a.date - b.date)?.map((item) => (
        <ChatListItem
          item={item}
          key={item.id}
          currentActiveChatBox={currentActiveChatBox}
          selectAChatBox={selectAChatBox}
        />
      ))}
    </ChatListContaier>
  );
};

export default ChatList;
