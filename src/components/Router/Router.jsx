import { Layout } from 'components/Layout/Layout';
import { Modal } from 'components/Modal/Modal';
import { Auth } from 'pages/Auth';
import { Gallery } from 'pages/Gallery';
import { Home } from 'pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="gallery" element={<Gallery />}>
          <Route path=":id/modal" element={<Modal />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
