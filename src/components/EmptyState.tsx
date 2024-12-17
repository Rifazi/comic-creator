import React from 'react';
import './EmptyState.css';

interface EmptyStateProps {
  onCreateClick: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onCreateClick }) => {
  return (
    <div className="empty-state">
      <button className="create-comic-button" onClick={onCreateClick}>
        Create Your New Comic
      </button>
    </div>
  );
};
