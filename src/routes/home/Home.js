

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer, Legend } from '../../vendor/recharts';

const title = 'LearningCurve Analytics';


const data = [
      { name: 'S1:T1', '90+': 287, '70-89': 96, '69<': 62, value: 600 },
      { name: 'S1:T2', '90+': 312, '70-89': 54, '69<': 87, value: 300 },
      { name: 'S1:T3', '90+': 409, '70-89': 187, '69<': 109, value: 500 },
      { name: 'S1:T4', '90+': 387, '70-89': 87, '69<': 122, value: 400 },
      { name: 'S2:T1', '90+': 267, '70-89': 210, '69<': 122, value: 200 },
      { name: 'S2:T2', '90+': 199, '70-89': 128, '69<': 39, value: 700 },
      { name: 'S2:T3', '90+': 256, '70-89': 89, '69<': 49, value: 100 },
      { name: 'S2:T4', '90+': 189, '70-89': 54, '69<': 28, value: 100 },
      { name: 'S2:T5', '90+': 280, '70-89': 200, '69<': 52, value: 100 },
      { name: 'S2:T6', '90+': 234, '70-89': 28, '69<': 89, value: 100 },
      { name: 'S3:T1', '90+': 487, '70-89': 98, '69<': 65, value: 100 },
      { name: 'S3:T2', '90+': 245, '70-89': 263, '69<': 89, value: 100 },
      { name: 'S3:T2', '90+': 214, '70-89': 145, '69<': 120, value: 100 },
      { name: 'S3:T3', '90+': 145, '70-89': 198, '69<': 123, value: 100 },
      { name: 'S3:T4', '90+': 288, '70-89': 120, '69<': 54, value: 100 },

];

const data2 = [
      { name: 'S1:T1', fa: 89, rt: 88},
      { name: 'S1:T2', fa: 74, rt: 91},
      { name: 'S1:T3', fa: 76, rt: 76},
      { name: 'S1:T4', fa: 69, rt: 72},
      { name: 'S2:T1', fa: 92, rt: 94},
      { name: 'S2:T2', fa: 76, rt: 89},
      { name: 'S2:T3', fa: 48, rt: 71},
      { name: 'S2:T4', fa: 87, rt: 88},
      { name: 'S2:T5', fa: 46, rt: 67},
      { name: 'S2:T6', fa: 59, rt: 69},
      { name: 'S3:T1', fa: 65, rt: 80},
      { name: 'S3:T2', fa: 58, rt: 81},
      { name: 'S3:T2', fa: 87, rt: 76},
      { name: 'S3:T3', fa: 46, rt: 58},
      { name: 'S3:T4', fa: 87, rt: 88},

];

const browserData = [
  { name: 'Chrome', value: 49 },
  { name: 'Safari', value: 12 },
  { name: 'Firefox', value: 24 },
  { name: 'IE', value: 9 },
  { name: 'Other', value: 6 }
]

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>My Dashboard</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-primary"
            icon="fa fa-users fa-5x"
            count="1092"
            headerText="Active Students"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-green"
            icon="fa fa-tasks fa-5x"
            count="34"
            headerText="Activity Titles"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-yellow"
            icon="fa fa-clock-o fa-5x"
            count="73 mins"
            headerText="Avg Time on Task"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-red"
            icon="fa fa-exclamation-triangle fa-5x"
            count="7"
            headerText="App Errors"
            footerText="View Details"
            linkTo="/"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Average Time (in seconds) and Progress
              <div className="pull-right">
                <DropdownButton title="Options" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Export as CSV</MenuItem>
                  <MenuItem eventKey="2">Export as PDF</MenuItem>
                  <MenuItem eventKey="3">View JSON</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Email Chart</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Legend verticalAlign="bottom" />
                  <Area type="monotone" dataKey="90+" stackId="1" stroke="#8884d8" fill="#e84c31" />
                  <Area type="monotone" dataKey="70-89" stackId="1" stroke="#82ca9d" fill="#f7f038" />
                  <Area type="monotone" dataKey="69<" stackId="1" stroke="#ffc658" fill="#2bc83f" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> First Attempt vs. Second Attempt
              <div className="pull-right">
                <DropdownButton title="Options" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Export as CSV</MenuItem>
                  <MenuItem eventKey="2">Export as PDF</MenuItem>
                  <MenuItem eventKey="3">View JSON</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Email Chart</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data2} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="fa" fill="#8884d8" />
                  <Bar dataKey="rt" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

        </div>

        <div className="col-lg-4">

          <Panel
            header={<span>
              <i className="fa fa-bell fa-fw" /> Notifications Panel
            </span>}
          >
            <ListGroup>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw" /> New Challenge Question
                <span className="pull-right text-muted small"><em>4 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-bolt fa-fw" /> App Error!
                <span className="pull-right text-muted small"><em>38 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-bolt fa-fw" /> App Error!
                <span className="pull-right text-muted small"><em>2 hours ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw" /> 5 New Challenge Questions
                <span className="pull-right text-muted small"><em>yesterday</em></span>
              </ListGroupItem>
            </ListGroup>
            <Button block>View All Alerts</Button>
          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Users by Browser
            </span>}
          >
            <div>
              <Donut data={browserData} color="#8884d8" innerRadius="70%" outerRadius="90%" />
            </div>
          </Panel>

        </div>

      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
