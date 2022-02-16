import React, { FC, useEffect, useRef } from "react";
import { Box, Flex, Img } from "@chakra-ui/react";
import { IChatRecordData, IChatRecordList } from "../index.types";
import {
  ChatRecordListContainer,
  triangleStyles
} from "./ChatRecordList.styles";

const ChaTRecordListItem: FC<IChatRecordData> = ({
  date,
  from,
  to,
  content
}) => {
  const sendByMe = from === "zhoudapao" && to !== "zhoudapao";

  return (
    <Flex m="12px 0" flexDirection={!!sendByMe ? "row-reverse" : "row"}>
      <Flex
        flex={1}
        maxWidth="60%"
        flexDirection={!!sendByMe ? "row-reverse" : "row"}
      >
        <Box m={!!sendByMe ? "0 0 0 10px" : "0 10px 0 0"}>
          <Img
            src="https://i3.meishichina.com/attachment/pai/2017/07/08/20170708149951568714610289388.jpg?x-oss-process=style/p800"
            alt=""
            width="38px"
            height="38px"
            borderRadius="4px"
          />
        </Box>
        <Flex flexDirection="column">
          {!sendByMe && (
            <Box color="#c1c1c1" fontSize={12} mb={4}>
              {from}
            </Box>
          )}
          <Box
            borderRadius={4}
            p={12}
            bg={!!sendByMe ? "#9f0" : "lightskyblue"}
            fontSize={14}
            position="relative"
            _before={triangleStyles(!!sendByMe)}
          >
            {content}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

const ChaTRecordList: FC<IChatRecordList> = ({
  chatRecordListRef,
  chatRecordData
}) => {
  const scrollListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatRecordListRef.current.scrollTop = scrollListRef.current?.clientHeight;
  }, [chatRecordData]);

  return (
    <ChatRecordListContainer ref={scrollListRef}>
      {chatRecordData?.map((item: IChatRecordData) => (
        <ChaTRecordListItem {...item} />
      ))}
    </ChatRecordListContainer>
  );
};

export default ChaTRecordList;
