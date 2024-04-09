import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import Home from './pages/Home';
import ErrorPage from './ErrorPage';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Header from './components/Header';

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
  }
]);

export default function App() {
  return (
    <div>
      <Header />
      <Container fluid="lg">
        <Row>
          <RouterProvider router={router} />
        </Row>
      </Container>
    </div>
  );
}
