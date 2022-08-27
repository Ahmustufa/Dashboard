import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import People from './pages/People';
import Statistics from './pages/Statistics';
import Documents from './pages/Documents';
import Chat from './pages/Chat';
import Support from './pages/Support';
import Calendar from './pages/Calendar';
import MainMenu from './components/MainMenu'
import { Box } from '@mui/system';
function App() {
  return (
   
    <BrowserRouter>
    {/* <MainMenu/> */}
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/People' element={<People/>}/>
      <Route path='/Statistics' element={<Statistics/>}/>
      <Route path='/Documents' element={<Documents/>}/>
      <Route path='/Chat' element={<Chat/>}/>
      <Route path='/Support' element={<Support/>}/>
      <Route path='/Calendar' element={<Calendar/>}/>
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
