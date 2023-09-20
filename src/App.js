import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigator from './components/Navigator';
import PrayTime from './components/PrayTime';
import PrayTable from './components/PrayTable';
import RandomAyah from './components/RandomAyah';
import Seb7a from './components/Seb7a';
import Quran from './components/Quran';
import Surah from './components/Surah';

function App() {
  return (
    <>
      <Header/>
      <Navigator />
    <Routes>
      
      <Route path='/' element={
        <>
        <PrayTime />
        <PrayTable />
        <RandomAyah />
        </>
      }></Route>
      <Route path='/seb7a' element={<Seb7a />}></Route>
      <Route path='/quran' element={<Quran />}></Route>
      <Route path='/quran/:surahId' element={<Surah />}></Route>
    
    </Routes>
    </>
  );
}

export default App;
