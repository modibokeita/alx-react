// src/App/App.js
import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className="courseList">
          <CourseList />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
