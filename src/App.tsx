import React from 'react';
import './App.css';
import MediaQuery  from "react-responsive";
import MobileHeader from './components/MobileHeader';
import DesktopHeader from './components/DesktopHeader';


function App() {
  return (
    <>
      <MediaQuery query="(max-width: 999px)">
        <MobileHeader />
        <h1>スマホ</h1>
      </MediaQuery>
      <MediaQuery query="(min-width: 1000px)">
        <DesktopHeader />
      </MediaQuery>
    </>
  );
  }

export default App;
