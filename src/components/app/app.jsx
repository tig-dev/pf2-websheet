import React, { useState, useReducer } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  FireOutlined,
  TagsOutlined,
  BarsOutlined,
  AlertOutlined,
  ShoppingOutlined,
  BookOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

import Character from "../character/character";
import Combat from "../combat/combat";
import Feats from "../feats/feats";
import Inventory from "../inventory/inventory";
import Notes from "../notes/notes";
import References from "../references/references";
import Skills from "../skills/skills";
import Spells from "../spells/spells";
import NewButton from "./new-button";
import LoadButton from "./load-button";
import SaveButton from "./save-button";
import { InitMainState, MainReducer } from "./reducer";

import "./app.less";

const { Header, Content, Sider, Footer } = Layout;

const App = () => {
  const [currContent, changeCurrContent] = useState("character");
  const [state, dispatch] = useReducer(MainReducer, InitMainState);

  const handleMenuChange = (item) => {
    changeCurrContent(item.key);
  };

  let mainContent = <div>This is no Content</div>;
  switch (currContent) {
    case "character":
      mainContent = <Character />;
      break;

    case "feats":
      mainContent = <Feats />;
      break;

    case "skills":
      mainContent = <Skills />;
      break;

    case "combat":
      mainContent = <Combat />;
      break;

    case "spells":
      mainContent = <Spells />;
      break;

    case "inventory":
      mainContent = <Inventory />;
      break;

    case "notes":
      mainContent = <Notes state={state} dispatch={dispatch} />;
      break;

    case "reference":
      mainContent = <References />;
      break;

    default:
      break;
  }

  return (
    <div className="app">
      <Layout>
        <Sider className={"app-sider"}>
          <Header>PF2 WebSheet</Header>
          <div className={"button-group row"}>
            <NewButton state={state} dispatch={dispatch} />
            <LoadButton state={state} dispatch={dispatch} />
            <SaveButton state={state} />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            onSelect={handleMenuChange}
            defaultSelectedKeys={["character"]}
          >
            <Menu.Item
              key="character"
              className={"red"}
              icon={<UserOutlined />}
            >
              Character
            </Menu.Item>
            <Menu.Item 
              key="feats" 
              className={"volcano"} 
              icon={<TagsOutlined />}
            >
              Feats
            </Menu.Item>
            <Menu.Item 
              key="skills" 
              className={"orange"} 
              icon={<BarsOutlined />}
            >
              Skills
            </Menu.Item>
            <Menu.Item 
              key="combat" 
              className={"green"} 
              icon={<AlertOutlined />}
            >
              Combat
            </Menu.Item>
            <Menu.Item 
              key="spells" 
              className={"blue"} 
              icon={<FireOutlined />}
            >
              Spells
            </Menu.Item>
            <Menu.Item
              key="inventory"
              className={"geekblue"}
              icon={<ShoppingOutlined />}
            >
              Inventory
            </Menu.Item>
            <Menu.Item 
              key="notes" 
              className={"purple"}
              icon={<BookOutlined />}>
              Notes
            </Menu.Item>
            <Menu.Item
              key="reference"
              className={"magenta"}
              icon={<FileSearchOutlined />}
            >
              Reference
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={"app-layout"}>
          <Content className={"app-main"}>{mainContent}</Content>
          <Footer className={"app-footer"}>
            This web-app uses trademarks and/or copyrights owned by Paizo Inc.,
            which are used under Paizo's Community Use Policy. We are expressly
            prohibited from charging you to use or access this content. This
            web-app is not published, endorsed, or specifically approved by
            Paizo Inc. For more information about Paizo's Community Use Policy,
            please visit&nbsp;
            <a href="https://paizo.com/communityuse">paizo.com/communityuse</a>.
            For more information about Paizo Inc. and Paizo products, please
            visit <a href="https://paizo.com/">paizo.com</a>.
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
