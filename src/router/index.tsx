import { useEffect, FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index.types";
import { wwsContext } from "../context";
import { AppContainer, RouterContent } from "../index.styles";
import Avartar from "../components/Avatar";
import NavigationBar from "../components/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import ChatPage from "./../pages/chat";

interface IAppRouter {}

let ws: WebSocket | null = null;
const AppRouter: FC<IAppRouter> = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const user = useSelector((state: RootState) => state.chatReducer.userInfo);
  const [chatRecordData, setChatRecordData] = useState(
    localStorage.getItem("chatRecordList")
      ? JSON.parse(localStorage.getItem("chatRecordList") as string).zhoudapao
      : []
  );

  function newGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if (i === 8 || i === 12 || i === 16 || i === 20) guid += "-";
    }
    return guid;
  }

  const connectWebsocket = () => {
    if (!ws && user && user.name) {
      let _ws = new WebSocket("ws://192.168.202.6:8080");
      _ws.onopen = () => {
        console.log(`${user.name} 连接成功`);
      };
      _ws.onclose = function () {
        connectWebsocket();
      };
      _ws.onmessage = function (event: any) {
        if (JSON.parse(event?.data)?.init) {
          localStorage.setItem("socketId", JSON.parse(event?.data)?.socketId);
        } else if (JSON.parse(event?.data)?.message) {
          console.log(
            "%cindex.tsx line:55 object",
            "color: #007acc;",
            JSON.parse(event?.data)?.message
          );
        }
      };
      setWs(_ws);
    }
  };
  useEffect(() => {
    connectWebsocket();
  }, [user]);

  return (
    <Router>
      <AppContainer>
        <NavigationBar>
          <Avartar
            source={
              user.avartar ||
              "https://img0.baidu.com/it/u=719887659,2663975087&fm=253&fmt=auto&app=138&f=JPG?w=400&h=250"
            }
          />
        </NavigationBar>
        <wwsContext.Provider value={{ chatRecordData }}>
          <RouterContent>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/chat" />} />
              <Route
                path="/chat/:user"
                component={(router: RouteComponentProps) => {
                  if (
                    ["ztboom", "jicoboom", "james"].includes(
                      (router.match?.params as { user: string })?.user
                    )
                  ) {
                    return <ChatPage ws={ws} user={user} />;
                  }
                  return null;
                }}
              />
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
