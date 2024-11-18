import React, { useContext } from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from "../utils/utils";
import { AppContext } from '../App/AppContext'; // Import the context

function Footer() {
  // Use useContext to access the user context
  const { user } = useContext(AppContext);

  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>

      {/* Conditionally render the Contact Us link when user is logged in */}
      {user.isLoggedIn && (
        <p>
          <a href="/contact-us">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
