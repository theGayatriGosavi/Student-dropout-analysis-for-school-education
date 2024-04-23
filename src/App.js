// Example import statements
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactApexCharts from 'react-apexcharts';

import AppHeader from "./Components/AppHeader"
import AppFooter from "./Components/AppFooter";
import PageContent from "./Components/PageContent";
import { Space } from "antd";
import SideMenu from "./Components/SideMenu";
import "./App.css"
export default function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Space className='SideMenuAndPageContent'>
        <SideMenu/>
        <PageContent/>
      </Space>
      <AppFooter/>
    </div>
  );
}
