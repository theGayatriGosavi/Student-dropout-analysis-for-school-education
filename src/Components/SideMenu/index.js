import { Menu } from "antd";
import "./index.css";
import {
  HomeOutlined,
  ShopOutlined,
  ReadOutlined,
  UserOutlined,
  BankOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function SideMenu(){
   const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  const styleoption = {height:"100px", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",padding:"10px"}
    return(
        <div className="SideMenu">
          
            <Menu 
            className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            style:styleoption,
            label: "Home",
            icon: <HomeOutlined style={{fontSize:40}}/>,
            key: "/",
          },
          {
            style:styleoption,
            label: "Dropout",
            key: "/dropout",
            icon: <ShopOutlined style={{fontSize:40}}/>,
          },
          {
            style:styleoption,
            label: "Policy",
            key: "/policy",
            icon: <ReadOutlined style={{fontSize:40}}/>,
          },
          {
            style:styleoption,
            label: "Institute",
            key: "/institute",
            icon: <BankOutlined style={{fontSize:40}}/>,
          },
          {
            style:styleoption,
            label: "Admin",
            key: "/admin",
            icon: <UserOutlined style={{fontSize:40}}/>,
          },
          {
            style:styleoption,
            label: "Feedback",
            key: "/feedback",
            icon: <MessageOutlined style={{fontSize:40}}/>,
          },
        ]}
      ></Menu>
        </div>
    )
}

export default SideMenu;