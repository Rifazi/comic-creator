import React from 'react';
import { useStore } from '../hooks/useStore';
import styles from './PageComponent.module.css';

interface PageComponentProps {
  onBack: () => void;
}

const PageComponent: React.FC<PageComponentProps> = ({ onBack }) => {
  const { panels, addPanel } = useStore();

  const handleCreatePanel = () => {
    addPanel('New Comic Panel');
  };

  return (
    <div className={styles.pageComponentContainer}>
      <div className={styles.buttonContainer}>
        <button 
          className={styles.backButton} 
          onClick={onBack}>
          Back to Comic
        </button>
        <button 
          className={styles.addPanelButton} 
          onClick={handleCreatePanel}>
          Add Panel
        </button>
      </div>
      <div className={styles.panelsList}>
        {panels.map((panel) => (
          <div key={panel.id} className={styles.panel}>
            {panel.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageComponent;