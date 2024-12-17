import React, { useState } from 'react';
import { useStore } from './hooks/useStore';
import { EmptyState } from './components/EmptyState';
import ComicView from './components/ComicView';
import './App.css';

const App: React.FC = () => {
  const { addPanel } = useStore();
  const [isComicView, setIsComicView] = useState(false);

  const handleCreateComic = () => {
    addPanel('New Comic Panel');
    setIsComicView(true);
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {isComicView ? (
          <ComicView />
        ) : (
          <EmptyState onCreateClick={handleCreateComic} />
        )}
      </div>
    </div>
  );
};

export default App;