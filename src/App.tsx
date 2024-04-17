// @ts-nocheck

import { Outlet } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import { UserProvider } from './Context/useAuth';

export default function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserProvider>
    </>
  );
}
