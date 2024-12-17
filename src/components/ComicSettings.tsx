import React, { useCallback } from 'react';
import './ComicSettings.css';
import { ComicBook, DefaultSizes } from '../models/ComicBook';

interface ComicSettingsProps {
  comicBook: ComicBook;
  onSettingsChange: (updatedComicBook: ComicBook) => void;
  onSave: () => void;
}

export const ComicSettings: React.FC<ComicSettingsProps> = ({ comicBook, onSettingsChange, onSave }) => {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onSettingsChange({ ...comicBook, coverImage: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  }, [comicBook, onSettingsChange]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="comic-settings">
      <div className="settings-form">
        <input
          type="text"
          placeholder="Comic Name"
          value={comicBook.name}
          onChange={(e) => onSettingsChange({ ...comicBook, name: e.target.value })}
        />
        <input
          type="date"
          value={comicBook.date}
          onChange={(e) => onSettingsChange({ ...comicBook, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={comicBook.author}
          onChange={(e) => onSettingsChange({ ...comicBook, author: e.target.value })}
        />
        <select
          value={JSON.stringify(comicBook.size)}
          onChange={(e) => onSettingsChange({ ...comicBook, size: JSON.parse(e.target.value) })}
        >
          <option value={JSON.stringify(DefaultSizes.STANDARD)}>Standard</option>
          <option value={JSON.stringify(DefaultSizes.MANGA)}>Manga</option>
          <option value={JSON.stringify(DefaultSizes.TRADE_PAPERBACK)}>Trade Paperback</option>
          <option value={JSON.stringify(DefaultSizes.LARGE)}>Large</option>
        </select>
        <div
          className="cover-image-drop-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          Drag and drop cover image here
        </div>
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
};