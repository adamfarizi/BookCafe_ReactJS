import './css/Ebook.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Appbar from "../components/app_bar2";
import Content1 from '../components/content3';
import Footer from '../components/footer';

function Ebook() {

  return (
    <div className='Ebook'>
      <Appbar className="ebook_appbar" />
      <Content1 className="ebook_content1" />
      <Footer className="ebook_footer" />
    </div>      
  );
}

export default Ebook;
