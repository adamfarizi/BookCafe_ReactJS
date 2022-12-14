  import './css/App.css';
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Appbar from "../components/app_bar";
  import Header from "../components/header";
  import Content1 from "../components/content";
  import Content2 from "../components/content2";
  import Membership from "../components/membership";
  import Footer from "../components/footer";

  function App() {
    return (
      <div className='App'>
        <Appbar className="app_appbar" />
        <Header className="app_header" />
        <Content1 className="app_content" />
        <Content2 className="app_content2" />
        <Membership className="app_membership" />
        <Footer className="app_footer" />
      </div>      
    );
  }

  export default App;
