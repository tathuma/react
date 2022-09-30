import React from 'react';
import './App.css';
import MediaQuery  from "react-responsive";
import MobileHeader from './components/MobileHeader';
import DesktopHeader from './components/DesktopHeader';


function App() {
  return (
    <>
      <MediaQuery query="(max-width: 520px)">
        <MobileHeader />
        <h1>スマホ</h1>
      </MediaQuery>
      <MediaQuery query="(min-width: 521px) and (max-width: 959px)">
        {/* <tabHeader /> */}
        <h1>タブレット</h1>
      </MediaQuery>
      <MediaQuery query="(min-width: 960px)">
        <DesktopHeader />
      </MediaQuery>
    </>
  );
  }

export default App;
