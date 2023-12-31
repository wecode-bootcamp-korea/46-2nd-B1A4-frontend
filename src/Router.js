import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Order from './pages/Order/Order';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPage/MyPage';
import Loading from './pages/Loading/Loading';
import Wishlist from './pages/Wishlist/Wishlist';
import ReqSuccess from './components/Toss/ReqSuccess';
import ResSuccess from './components/Toss/ResSuccess';
import Fail from './components/Toss/Fail';
import LoadingLogOut from './pages/Loading/Loading-logout';
import NotFound from './pages/NotFound/NotFound';
import HostSignUp from './pages/Host/HostSignUp';
import ImageUpload from './pages/Host/ImageUpload';
import SpaceUpload from './pages/Host/SpaceUpload';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="" element={<Nav />}>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/loading-logout" element={<LoadingLogOut />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/host-signup" element={<HostSignUp />} />
          <Route path="/host-upload" element={<SpaceUpload />} />
          <Route path="/host-image" element={<ImageUpload />} />
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
