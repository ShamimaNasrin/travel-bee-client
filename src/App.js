import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <h1>Travel Bee</h1>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
