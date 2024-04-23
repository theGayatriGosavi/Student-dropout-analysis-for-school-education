import { Image , Typography, Space, Badge} from "antd";
import { FacebookOutlined, MailOutlined,InstagramOutlined } from "@ant-design/icons";
import logo from "./gujulogo.png";
import logo1 from "./logo.png";
import headbackground from "./gujupaint.jpg";
import "./index.css";
function AppHeader(){
    return(
        <div className="AppHeader">
            <Image width={70} src={logo} style={{position:'relative',left:'80px'}}></Image>
            <Image width={65} src={logo1} style={{position:'relative', left:'-50px'}}></Image>
            <div style={{display:"flex", flexDirection:'column',justifyContent:'center',alignItems:'center', position:"absolute", left:'180px'}}>
            <Typography style={{fontWeight:'600', fontSize:'20px'}}>Education Department</Typography>
            <Typography level={3}>Government of Gujarat</Typography>
            </div>
        </div>
    )
}

export default AppHeader;