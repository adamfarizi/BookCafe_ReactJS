import 'bootstrap/dist/css/bootstrap.min.css'
import Appbar from '../components/app_bar4';
import Content from '../components/content4';

function Book() {
  return(
    <div className='Book'>
      <Appbar className="book_appbar"/>
      <Content className="book_content" />
    </div>
  );
}

export default Book;