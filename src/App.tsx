import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from './router';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
