import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './index.css';
import App from './page/App';
import Login from './page/Login';
import Signin from './page/Signin';
import Ebook from './page/Ebook';
import Account from './page/Account';
import Setting from './page/Setting';
import MyBook from './page/MyBook';
import AboutUs from './page/AboutUs';
import Membership from './page/Membership';
import Book from './page/Book';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signin' element={<Signin/>} />
      <Route path='home' element={<App/>} />
      <Route path='ebook' element={<Ebook/>} />
      <Route path='account' element={<Account/>} />
      <Route path='setting' element={<Setting/>} />
      <Route path='mybook' element={<MyBook/>} />
      <Route path='aboutus' element={<AboutUs/>} />
      <Route path='membership' element={<Membership/>} />
      <Route path='book' element={<Book/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
