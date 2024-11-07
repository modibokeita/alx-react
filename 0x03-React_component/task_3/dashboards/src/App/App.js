// task_3/dashboard/src/App/App.js
import React from 'react';
import './App.css';
import { Notifications } from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends React.Component {
  render() {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
            <BodySection title="News from the School">
              <p>Here is some random text to represent news from the school.</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
