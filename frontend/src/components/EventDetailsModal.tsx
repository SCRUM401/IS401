import React from 'react';
import styles from './HomeInputDesign.module.css';

interface Props {
  title: string;
  description: string;
  onClose: () => void;
}

const EventDetailsModal: React.FC<Props> = ({
  title,
  description,
  onClose,
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onClose} className={styles.submitButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventDetailsModal;
