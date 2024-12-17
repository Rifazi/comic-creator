import React from 'react';
import { ComicBook } from '../models/ComicBook';
import './CoverImageView.css';

interface CoverImageViewProps {
  comicBook: ComicBook;
  onCoverClick: () => void;
}

const CoverImageView: React.FC<CoverImageViewProps> = ({ comicBook, onCoverClick }) => {
  return (
    <div className="cover-image-container" onClick={onCoverClick}>
      <img 
        src={comicBook.coverImage} 
        alt={`Cover of ${comicBook.name}`} 
        className="cover-image" 
      />
    </div>
  );
};

export default CoverImageView;