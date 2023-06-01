import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './pages/welcome';
import Spotiwhy from './pages/spotiwhy';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectPage from './pages/projects';
import Welcome2 from './pages/welcome2';

const router = createBrowserRouter([
  {
    path: "/spotiwhy",
    element: <Spotiwhy></Spotiwhy>,
  },
  {
    path: '/projects',
    element: <ProjectPage></ProjectPage>
  },
  {
    path: '/',
    element: <Welcome2></Welcome2>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
