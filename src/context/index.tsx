import React from "react";
import { IChatRecordData } from "../pages/chat/index.types";

export interface IwwsContext {
  ws?: WebSocket | undefined;
  chatRecordData?: IChatRecordData[] | undefined;
}

export const wwsContext = React.createContext({});
