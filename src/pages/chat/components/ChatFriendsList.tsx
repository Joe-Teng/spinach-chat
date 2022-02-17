import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IChatFriendsList } from "../index.types";
import { handleCurrentChat } from "../../../store";
import { RootState } from "../../../store/index.types";
import { Users } from "../../../mock/user.config";
import { IChatFriends } from "../index.types";
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
import { Mute } from "../../../components/Icon";

interface IChatListItem {
  item: IChatFriends;
  frindsStuff: IChatFriendsList["frindsStuff"];
}

const ChatListItem: FC<IChatListItem> = ({ item, frindsStuff }) => {
  const dispatch = useDispatch();
  return (
    <ChatListItemContainer
      className={classNames({
        "active-chat": item.name === frindsStuff?.[0]?.name,
        "top-chat": false,
        "other-chat": false
      })}
      onClick={() => {
        frindsStuff?.[1](item);
        dispatch(handleCurrentChat(item));
      }}
    >
      <ChatAvatar>
        <Avartar source={item.avartar} />
      </ChatAvatar>
      <ChatInfo>
        <ChatTitle>
          <ChatName>{item.name}</ChatName>
          {/* <ChatDate>{`${new Date(item.date)?.toLocaleDateString()}`}</ChatDate> */}
        </ChatTitle>
        <ChatContent>
          <ChatInfoContent>{/* {item?.content} */}</ChatInfoContent>
          <Mute />
        </ChatContent>
      </ChatInfo>
    </ChatListItemContainer>
  );
};

const ChatList: FC<IChatFriendsList> = ({ frindsStuff }) => {
  const chatReducerData = useSelector((state: RootState) => state.chatReducer);

  return (
    <ChatListContaier>
      {Users?.map(
        (item: IChatFriends) =>
          item.name !== chatReducerData.userInfo.name && (
            <ChatListItem
              item={item}
              key={item.name}
              frindsStuff={frindsStuff}
            />
          )
      )}
    </ChatListContaier>
  );
};

export default ChatList;
