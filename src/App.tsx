import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyDocumentCard} from './components/DocumentCardComponent';
import {ProgressBar} from './components/ProgressbarComponent';
import { TeachingBubbleApp } from './components/TeachingBubbleComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <MyDocumentCard></MyDocumentCard>
      <ProgressBar></ProgressBar>
      <TeachingBubbleApp></TeachingBubbleApp>
    </div>
  );
}

export default App;
