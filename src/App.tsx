import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ErrorPage from './ErrorPage';
import CreateAccount from './pages/CreateAccount';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "create",
    element: <CreateAccount />,
  }
]);

export default function App() {
  return (
    <div>
      <Container fluid="lg">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}
