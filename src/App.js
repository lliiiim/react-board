import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import StudyPage from './StudyPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HelloWorld />}></Route>
        <Route path="/studies/:id" element={<StudyPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
