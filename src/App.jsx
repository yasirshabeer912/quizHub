import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Result from './components/Result';
import Quiz from './components/Quiz';
import axios from 'axios';
const App = () => {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  
  return (
    <Router>
    <div className='app' style={{backgroundImage:'url(./ques1.png)'}}>
      
      <Header />
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} exact/>
        <Route path='/result' element={<Result/>} exact/>
        <Route path='/quiz' element={<Quiz name={name} questions={questions} score={score} setScore={setScore} />} exact/>
      </Routes>
    </div>
    </Router>
    )
}

export default App