import { Card, Space, Statistic, Table, Typography,Col,Row } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  getCustomers,
  getInventory,
  getOrders,
  getRevenue,
  salseData,
} from "../../API";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import "./index.css";
import SignIn from "../../Components/LogIn";

function Admin() {
  const [current, setCurrent] = useState(0);
  const form=[
    <SignIn setCurrent={setCurrent} title={'Admin LogIn'}/>,
    <AdminDashboard/>,
  ]
  return (<>
    {form[current]}
  </>
  );
}
function AdminDashboard() {
  return (
    <>
      <div className="admin">
        <div className="line"><span>Admin Dashboard</span></div>
        <Space size={15} direction="vertical">
          <Space direction="horizontal" size={35} block>
            <HeadData />
          </Space>
          <Space direction="horizontal" size={15} block>
            <div className="container" style={{height:"400px" , width:"490px"}}><AreaChart /></div>
            <div className="container" style={{height:"400px" , width:"450px"}}><BarChart /></div>
            <div className="container" style={{height:"410px" , width:"400px"}}><Doonut /></div>
            </Space>
            <Space direction="horizontal" size={15}>
            <div className="container" style={{height:"350px" , width:"490px"}}><ReasonBars /></div>
            <div className="container" style={{height:"350px" , width:"450px"}}><LineChart /></div>
            <div className="container" style={{height:"350px" , width:"400px"}}><BoardType /></div>
            </Space>
          <Space direction="horizontal" size={40}>
            <RecentOrders itype="Private" />
            <RecentOrders itype="Government" />
          </Space>
          <Mapp/>
        </Space>
        <Space>
        <div>
          <h1>Policy Prediction</h1>
          <Row gutter={16}>
    <Col span={8}>
      <Card title="Vidhyalaxmi Bonds" bordered={false}>
      Gujarat Government focus on role of Education in Poverty Eradication and the campaign is aimed at ensuring maximum enrollment of boys and girls in primary schools all across the state. 
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Nirogi Bal" bordered={false}>
        
Government ensures on Nirogi Bal scheme along with Bal Pravesh as Health is a prime concern of the child while it attends the classroom. Literacy to Health with Nirogi Bal is announced for 2008-09 with mass movement for Safe Health with impact to Social Development of Gujarat.
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Bal Pravesh | Mid Day Meal Schemes" bordered={false}>
    Government schemes like Bal Pravesh and Nirogi Bal is also made a part of the Kanya Kelavani campaign.
      </Card>
    </Col>
    </Row>
        </div>
        </Space>
      </div>
    </>
  );
} 

function Mapp(){
  return(
    <div className="mapp" style={{padding:"10px 10px", backgroundColor:"rgba(31, 41, 55, 1)", borderRadius:"10px"}}>
      <iframe
        width="100%"
        height="500px"
        src="https://api.mapbox.com/styles/v1/hs7898753/cln1vvjuk037201r7cmt46c20.html?title=false&access_token=pk.eyJ1IjoiaHM3ODk4NzUzIiwiYSI6ImNsbjFyaTlwaDAxZ2Iyam8zOGNyNWRoaHgifQ.fSbOrY1hgOdnFGc1xAHG5w&zoomwheel=false#3.26/36.99/-98.68"
        title="Satellite Streets"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

function ReasonBars(){

  const [state, setState] = useState({
          
    series: [
      {
        name: "Reasons for Dropouts",
        data: [200, 330, 548, 740, 880, 990, 1100],
      },
    ],
    options: {
      chart: {
        background: "rgba(31, 41, 55, 1)",
        type: 'bar',
        height: 350,
        foreColor: '#ffffff'
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          distributed: true,
          barHeight: '80%',
          isFunnel: true,
        },
      },
      colors: [
        '#F44F5E',
        '#E55A89',
        '#D863B1',
        '#CA6CD8',
        '#B57BED',
        '#8D95EB',
        '#62ACEA',
        '#4BC3E6',
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] 
        },
        dropShadow: {
          enabled: true,
        },
      },
      title: {
        text: 'Dropers Reasons',
        align: 'left',
        style:{
          color:"#ffffff",
          fontSize:"20px",
        },
      },
      xaxis: {
        categories: ['Bad Influence', 'Academic Difficulty', ' Family And Socio-Economic Needs', 'Poor Health', 'Retention', 'Disengagement', 'Transition'],
      },
      legend: {
        show: false,
      },
    },})

  return(
    <div id="chart">
  <ReactApexChart options={state.options} series={state.series} type="bar" height="300" width="470"/>
</div>
  )
}

function BoardType(){
  const [state, setState] = useState({
          
    series: [2500, 1500, 440, 550, 41],
    options: {
      chart: {
        background: "rgba(31, 41, 55, 1)",
        type: 'pie',
      },
      labels: ["CBSE", "ICSE/ISC", "IB", "State Board", "Other"],
      theme: {
        monochrome: {
          enabled: true
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5
          }
        }
      },
      title: {
        text: "School Board",
        align: "left",
        style:{
          color:"#ffffff",
          fontSize:"20px",
        },
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex]
          return [name, val.toFixed(1) + '%']
        }
      },
      legend: {
        show: false,
        labels: {
          colors: '#ffffff',
      },
      }
    },})
  return(
    <div id="chart">
    <ReactApexChart options={state.options} series={state.series} type="pie" width={380}/>
  </div>
  )
}

function Doonut() {
  const [state, setState] = useState(
    {
          
      series: [4400, 1200, 800, 500, 300],
      options: {
        chart: {
          background: "rgba(31, 41, 55, 1)",
          width: 400,
          type: 'donut',
          dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          }
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true,
                }
              }
            }
          }
        },
        labels: ["General", "EWS", "OBC", "SC", "ST"],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8
          }
        },
        fill: {
        type: 'solid',
          opacity: 1,
          pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
          },
        },
        states: {
          hover: {
            filter: 'none'
          }
        },
        theme: {
          palette: 'palette10'
        },
        title: {
          text: "Caste Wise Dropouts",
          style:{
            color:"#ffffff",
            fontSize:"20px",
          },
        },
        legend: {
          position: 'bottom',
          
            labels: {
              colors: '#ffffff',
          },
      
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },}
       );

  return (
    <div id="chart">
    <ReactApexChart options={state.options} series={state.series} type="donut" width={400} height={390} />
  </div>
  );
}

function AreaChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "XYZ MOTORS",
        data: [
          {
            x: "Jan 1 2015",
            y: 150,
          },
          {
            x: "Jan 1 2016",
            y: 300,
          },
          {
            x: "Jan 1 2017",
            y: 400,
          },
          {
            x: "Jan 1 2018",
            y: 100,
          },
          {
            x: "Jan 1 2019",
            y: 500,
          },
          {
            x: "Jan 1 2020",
            y: 800,
          },
          {
            x: "Jan 1 2021",
            y: 600,
          },
          {
            x: "Jan 1 2022",
            y: 400,
          },
        ],
      },
    ],
    options: {
      chart: {
        margin: 10,
        borderRadius: 8,
        background: "rgba(31, 41, 55, 1)",
        type: "area",
        stacked: false,
        height: 400,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Dropouts",
        align: "left",
        style:{
          color:"#ffffff",
          fontSize:"20px",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      legend: {
        labels: {
          colors: '#ffffff',
      },
    },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
        width={482}
      />
    </div>
  );
}

function BarChart() {
  const [state, setState] = useState({
    colors: ["FF7D17", "FF7D17"],
    options: {
      chart: {
        id: "basic-bar",
        background: "rgba(31, 41, 55, 1)",
      },
      title: {
        text: "School Type Dropouts",
        style:{
          color:"#ffffff",
          fontSize:"20px",
        },
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "Government",
        data: [3000, 4000, 4500, 5000, 4900, 6000, 7000, 9100],
      },
      {
        name: "Private",
        data: [3500, 3200, 6745, 8150, 4349, 5260, 7870, 6591],
      },
    ],
    legend: {
      labels:{
        colors:['#ffffff','#ffffff','#ffffff']
    },
    }
  });

  return (
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      width="400px"
      height="350px"
    />
  );
}

function LineChart() {
  const [state, setState] = useState({
    title: {
      text: "Dynamic Updating Chart",
      align: "left",
      style:{
        color:"#ffffff"
      },
    },
    colors: ["FF7D17", "FF7D17"],
    options: {
      chart: {
        id: "basic-bar",
        background: "rgba(31, 41, 55, 1)",
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "Boys",
        data: [3000, 4000, 4500, 5000, 4900, 6000, 7000, 9100],
      },
      {
        name: "Girls",
        data: [3500, 3200, 6745, 8150, 4349, 5260, 7870, 6591],
      },
    ],
  });

  return (
    <Chart
      options={state.options}
      series={state.series}
      type="line"
      width="430px"
      height="312px"
    />
  );
}
function DashboardCard({ title, value, icon }) {
  return (
    <Card style={{ width: 433, backgroundColor: "rgba(31, 41, 55, 1)" }}>
      <Space direction="horizontal">
        {icon}
        <Statistic className="stats" title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders(props) {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>{props.itype} School</Typography.Text>
      <Table
      headerColor="#ffffff"
        style={{ width: 665 }}
        columns={[
          {
            title: "School Name",
            dataIndex: "title",
          },
          {
            title: "Dropout",
            dataIndex: "quantity",
          },
          {
            title: "District",
            dataIndex: "district",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

function HeadData() {
  return (
    <>
    <Space direction="vertical">
      <Space direction="horizontal" size={35} block>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
            style={{
              color: "rgba(196, 181, 253, 1)",
              borderRadius: 20,
              fontSize: 50,
              padding: 8,
            }}
            />
          }
          title={"School Registered"}
          value={1489115}
        />
        <DashboardCard
          size={100}
          icon={
            <ShoppingOutlined
            style={{
              color: "rgba(196, 181, 253, 1)",
              borderRadius: 20,
              fontSize: 50,
              padding: 8,
            }}
            />
          }
          title={"Government School"}
          value={123456}
        />
        <DashboardCard
          icon={
            <UserOutlined
            style={{
              color: "rgba(196, 181, 253, 1)",
              borderRadius: 20,
              fontSize: 50,
              padding: 8,
            }}
            />
          }
          title={"Private School"}
          value={123456}
        />
        </Space>
        <Space direction="horizontal" size={35} block>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
            style={{
              color: "rgba(196, 181, 253, 1)",
              borderRadius: 20,
              fontSize: 50,
              padding: 8,
            }}
            />
          }
          backgroundColor="rgba(31, 41, 55, 1)"
          title={"Total Dropouts"}
          value={123456}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
            style={{
              color: "rgba(196, 181, 253, 1)",
              borderRadius: 20,
              fontSize: 50,
              padding: 8,
            }}
            />
          }
          title={"Male Dropouts"}
          value={123456}
        />
        <DashboardCard
          icon={
            <UserOutlined
            style={{
              color: "rgba(196, 181, 253, 1)",
              borderRadius: 20,
              fontSize: 50,
              padding: 8,
            }}
            />
          }
          title={"Female Dropouts"}
          value={123456}
        />
      </Space>
      </Space>
    </>
  );
}

export default Admin;
