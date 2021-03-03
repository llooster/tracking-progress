// import { render, screen } from "@testing-library/react";
import React, { Component } from 'react';
import Login from './Login';

class App extends Component {
  render() {
    return <Login />;
  }
}
// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

export default App;
