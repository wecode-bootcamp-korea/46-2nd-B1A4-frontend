import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Order from './pages/Order/Order';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPgae/MyPage';
import Loading from './pages/Loading/Loading';
import Wishlist from './pages/Wishlist/Wishlist';
import ReqSuccess from './components/Toss/ReqSuccess';
import ResSuccess from './components/Toss/ResSuccess';
import Fail from './components/Toss/Fail';
import LoadingLogOut from './pages/Loading/Loading-logout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/loading-logout" element={<LoadingLogOut />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/order/:id" element={<Order />} />
        <Route path="/order/:id/req_success" element={<ReqSuccess />} />
        <Route path="/order/:id/res_success" element={<ResSuccess />} />
        <Route path="/order/:id/fail" element={<Fail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
