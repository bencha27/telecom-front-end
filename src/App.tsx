import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import Home from './pages/Home';
import ErrorPage from './ErrorPage';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "create",
    element: <CreateAccount />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "account",
    element: <Dashboard />,
  }
]);

export default function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
