//import logo from './logo.svg';
import { Layout } from "antd";

import "./App.css";
const { Footer } = Layout;

function Header(props) {
  return (
    <div className="App-header"> 
      It's Me Handiana
    </div>
    )

}

function Content() {
return (
<div className="App-header"> 
      Content
    </div>
)
}



function App() {
  return (
    <Layout>
      <Header />
      <Content/>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
