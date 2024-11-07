// src/App/App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('calls logOut and shows alert when Control and H are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App logOut={logOutMock} />);

    // Simulate pressing Control + H
    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    // Clean up mock
    alertMock.mockRestore();
  });
});
