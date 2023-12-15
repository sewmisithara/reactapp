import React from 'react';
import logo from './logo.svg';
import './App.css';
import {brotliCompress} from "zlib";
import {findAllByDisplayValue} from "@testing-library/react";

import MainContent from "./view/common/mainContent/MainContent";
import Navbar from "./view/common/navbar/navbar";
import Footer from "./view/common/footer/Footer";
// @ts-ignore
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <MainContent />
          <Footer/>
      </BrowserRouter>
  );

}

export default App;
