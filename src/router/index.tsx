import React, { useEffect, FC, useState } from "react";
import { wwsContext } from "../context";
import { AppContainer, RouterContent } from "../index.styles";
import { IChatRecordData } from "../pages/chat/index.types";
import Avartar from "../components/Avatar";
import NavigationBar from "../components/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ChatPage from "./../pages/chat";

interface IAppRouter {
  ws: WebSocket;
}

const AppRouter: FC<IAppRouter> = ({ ws }) => {
  const [chatRecordData, setChatRecordData] = useState(
    localStorage.getItem("chatRecordList")
      ? JSON.parse(localStorage.getItem("chatRecordList") as string).zhoudapao
      : []
  );
  useEffect(() => {
    ws.onopen = function (e) {};
    ws.onmessage = function (event: any) {
      console.log("%cindex.tsx line:28 event", "color: #007acc;", event);
      setChatRecordData((state: IChatRecordData[]) => [
        ...state,
        ...[
          {
            date: 1644979380000,
            content: "Tom正在找我，不要告诉他我在哪里4",
            from: "zhoudapao",
            to: "Jerry"
          }
        ]
      ]);
    };
  }, []);

  return (
    <Router>
      <AppContainer>
        <NavigationBar>
          <Avartar source="https://img0.baidu.com/it/u=719887659,2663975087&fm=253&fmt=auto&app=138&f=JPG?w=400&h=250" />
        </NavigationBar>
        <wwsContext.Provider value={{ ws, chatRecordData }}>
          <RouterContent>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/chat" />} />
              <Route path="/chat">
                <ChatPage />
              </Route>
              <Route path="/friends">friends</Route>
              <Route path="/collect">collect</Route>
              <Route path="/folder">folder</Route>
            </Switch>
          </RouterContent>
        </wwsContext.Provider>
      </AppContainer>
    </Router>
  );
};

export default AppRouter;
