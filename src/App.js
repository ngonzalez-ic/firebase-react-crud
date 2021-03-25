import Link from './comonents/Link';
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';


const App=()=> {
  return (
    <div className= 'container p-4'>
      <div className= 'row'>
      <Link/>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
