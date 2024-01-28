import { Route, Routes } from 'react-router-dom';
import './FirstFiddlecss.css';
import FirstFiddleAbout from './firstfiddle/FirstFiddleAbout';
import FirstFiddleHome from './firstfiddle/FirstFiddleHome';
import Fotter from './firstfiddle/Fotter';
import Navbar from './firstfiddle/Navbar';
import FirstFiddleBrand from './firstfiddle/FirstFiddleBrand';
import FirstFiddleOurTeam from './firstfiddle/FirstFiddleOurTeam';
import FirstFiddleContactUs from './firstfiddle/FirstFiddleContactUs';
import FirstFiddleCareers from './firstfiddle/FirstFiddleCareers';
import FirstFiddlePressRelease from './firstfiddle/FirstFiddlePressRelease';
 
function App() {
  return (
      <div className='app'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<FirstFiddleHome/>}/>
            <Route path='/about' element={<FirstFiddleAbout/>}/>
            <Route path='/brand' element={<FirstFiddleBrand/>}/>
            <Route path='/ourteam' element={<FirstFiddleOurTeam/>}/>
            <Route path='/pressrelease' element={<FirstFiddlePressRelease/>}/>
            <Route path='/contactus' element={<FirstFiddleContactUs/>}/>
            <Route path='/careers' element={<FirstFiddleCareers/>}/>
          </Routes>
        <Fotter/>
      </div>
  );
}

export default App;
