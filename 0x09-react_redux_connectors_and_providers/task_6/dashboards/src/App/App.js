import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Notifications } from '../Notifications/Notifications'; // Ensure Notifications is imported correctly

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Render the Notifications component */}
        <Notifications />
      </div>
    );
  }
}

App.propTypes = {
  // Add any propTypes if necessary for other props
};

const mapStateToProps = (state) => ({
  // Add any state mappings if necessary
});

export default connect(mapStateToProps)(App);
