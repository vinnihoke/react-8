import React from "react";
import ReactDOM from "react-dom";

// UI
import { Row, Col, Layout, Input, Menu } from "antd";
import "antd/dist/antd.css";

// Local
import "./index.css";
import UserCard from "./components/UserCard";

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

class App extends React.Component {
  state = {
    searchQuery: "",
    users: []
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/vinnihoke`)
      .then(response => response.json())
      .then(user => this.setState({ users: [user] }))
      .catch(err => console.log(err));
  }

  // This is returning undefined
  searchSubmit = () => {
    fetch(`https://api.github.com/users/${this.state.searchQuery}`)
      .then(response => response.json())
      .then(user => this.setState({ users: [user] }))
      .catch(err => console.log(err));
    this.setState({ searchQuery: "" });
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    return (
      <Layout>
        <Content>
          <Row id="Navbar">
            <Col span={8}>
              <div className="logo" style={{ fontSize: "22px" }}>
                Github User Card
              </div>
            </Col>
            <Col span={8} offset={8}>
              Add to favorites
              <Search
                value={this.state.searchQuery}
                onChange={this.handleChange}
                onPressEnter={() => this.searchSubmit()}
              />
            </Col>
          </Row>
        </Content>
        <Content>
          <Row
            className="App"
            type="flex"
            justify="center"
            style={
              {
                // backgroundColor: "lightcyan"
              }
            }
          >
            <Col sm={24} md={12} lg={8}>
              {this.state.users.map(user => (
                <UserCard userData={user} key={user.id} />
              ))}
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
