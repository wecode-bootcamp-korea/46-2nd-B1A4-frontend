import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Order from './pages/Order/Order';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPgae/MyPage';
import Loading from './pages/Loading/Loading';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/loading" element={<Loading />} />
        </Route>
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
