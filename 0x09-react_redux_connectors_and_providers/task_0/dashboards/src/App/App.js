import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <h1>Dashboard</h1>
        {isLoggedIn ? (
          <p>Welcome back, user!</p>
        ) : (
          <p>Please log in to access the dashboard.</p>
        )}
      </div>
    );
  }
}

// Map state from the Redux store to component props
const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.isLoggedIn,
});

// Connect the App component to the Redux store
export default connect(mapStateToProps)(App);
