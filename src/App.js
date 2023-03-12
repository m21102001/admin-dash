import * as React from 'react';
import "./App.css";
import { router } from './routes/router';

import {
  RouterProvider,
} from "react-router-dom";


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
