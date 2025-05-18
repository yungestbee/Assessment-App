import { WelcomePage } from './components/WelcomePage';
import { StudentBioData } from './components/StudentBioData';
import { QuestionPage } from './components/QuestionPage';

import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import './css/styles.css'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<WelcomePage />} />
        <Route path = "/student-bio-data/*" element = { <StudentBioData /> } />
        <Route path = "/question-page" element = { <QuestionPage /> } />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
