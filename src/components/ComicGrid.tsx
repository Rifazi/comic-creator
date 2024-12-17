import React from 'react';
import { Panel } from '../models/Panel';
import './ComicGrid.css';

interface ComicGridProps {
  panels: Panel[];
}

export const ComicGrid: React.FC<ComicGridProps> = ({ panels }) => {
  return (
    <div className="comic-grid">
      {panels.map((panel) => (
        <div key={panel.id} className="comic-item">
          <div className="comic-content">{panel.content}</div>
        </div>
      ))}
    </div>
  );
};
