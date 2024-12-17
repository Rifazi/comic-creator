import React, { useState } from 'react';
import { ComicSettings } from './ComicSettings';
import { ComicBook, DefaultSizes } from '../models/ComicBook';
import CoverImageView from './CoverImageView';
import PageComponent from './PageComponent';
import './ComicView.css';
import './CoverImageView.css';

interface ComicViewProps {
  comicBook?: ComicBook;
}

const ComicView: React.FC<ComicViewProps> = ({ comicBook }) => {
  const defaultComicBook: ComicBook = {
    name: 'Untitled Comic',
    date: new Date().toISOString(),
    size: DefaultSizes.STANDARD,
    pages: [],
    author: 'Unknown Author',
    coverImage: 'https://www.shopknuckleheads.com/cdn/shop/products/29912MV_750x1050.jpg'
  };

  const [currentComicBook, setCurrentComicBook] = useState<ComicBook>(comicBook || defaultComicBook);
  const [isPageComponentView, setIsPageComponentView] = useState(false);

  const handleSettingsChange = (updatedComicBook: ComicBook) => {
    setCurrentComicBook(updatedComicBook);
  };

  const handleSave = () => {
    console.log('Comic book saved:', currentComicBook);
  };

  const handleCoverClick = () => {
    setIsPageComponentView(true);
  };

  const handleBackToComic = () => {
    setIsPageComponentView(false);
  };

  return (
    <div className="comic-view-container">
      <ComicSettings comicBook={currentComicBook} onSettingsChange={handleSettingsChange} onSave={handleSave} />
      
      {!isPageComponentView ? (
        <CoverImageView 
          comicBook={currentComicBook} 
          onCoverClick={handleCoverClick} 
        />
      ) : (
        <PageComponent onBack={handleBackToComic} />
      )}
    </div>
  );
};

export default ComicView;