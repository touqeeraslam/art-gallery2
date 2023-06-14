import './App.css';
import {Routes,Route} from 'react-router-dom';
import TopNavbar from './components/TopNavbar/navbar';
import Lawyers from './screens/lawyers/lawyer';
function App() {
  return (
   <>
   <TopNavbar />
    <Routes>
    <Route path='/lawyer' element={<Lawyers/>}/>
  </Routes>
   </>
  );
}

export default App;
