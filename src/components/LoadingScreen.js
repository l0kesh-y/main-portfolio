import React, { useState, useEffect } from 'react';
import { Code, Zap } from 'lucide-react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const loadingMessages = [
    'Initializing Portfolio...',
    'Loading Components...',
    'Connecting APIs...',
    'Optimizing Performance...',
    'Almost Ready...',
    'Welcome!'
  ];
  
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 80);

    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onLoadingComplete, loadingMessages.length]);

  useEffect(() => {
    const current = loadingMessages[messageIndex];
    let i = 0;
    const typeInterval = setInterval(() => {
      setDisplayText(current.slice(0, ++i));
      if (i >= current.length) clearInterval(typeInterval);
    }, 50);

    return () => clearInterval(typeInterval);
  }, [messageIndex, loadingMessages]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        
        <div className="loading-text">
          <h1>
            <Code size={32} style={{ marginRight: '12px' }} />
            Lokesh Portfolio
            <Zap size={32} style={{ marginLeft: '12px' }} />
          </h1>
          <p>{displayText}</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
