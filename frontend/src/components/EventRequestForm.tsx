'use client';
import React, { FormEvent } from 'react';
import styles from './InputDesign.module.css';
import FormField from './FormField';

interface FormData {
  eventName: string;
  eventType: string;
  eventDescription: string;
  address: string;
  date: string;
  groupsInvolved: string;
  helpOrganize: boolean;
}

interface EventRequestFormProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
}

const EventRequestForm: React.FC<EventRequestFormProps> = ({
  formData,
  handleInputChange,
  handleCheckboxChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1 className={styles.pageTitle}>Event Request Page</h1>

      <FormField
        label="Event Name"
        name="eventName"
        value={formData.eventName}
        placeholder="Activity Name"
        onChange={handleInputChange}
      />

      <FormField
        label="Event Type"
        name="eventType"
        value={formData.eventType}
        placeholder="Activity Type"
        onChange={handleInputChange}
      />

      <div className={styles.formGroup}>
        <label htmlFor="eventDescription" className={styles.fieldLabel}>
          Event Description
        </label>
        <textarea
          id="eventDescription"
          name="eventDescription"
          value={formData.eventDescription}
          placeholder="Activity Description"
          className={styles.textarea}
          onChange={handleInputChange}
        />
      </div>

      <FormField
        label="Address"
        name="address"
        value={formData.address}
        placeholder="Address"
        onChange={handleInputChange}
      />

      <FormField
        label="Date"
        name="date"
        value={formData.date}
        placeholder="Date"
        onChange={handleInputChange}
      />

      <FormField
        label="Groups Involved"
        name="groupsInvolved"
        value={formData.groupsInvolved}
        placeholder="Groups Involved"
        onChange={handleInputChange}
      />

      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="helpOrganize"
          name="helpOrganize"
          checked={formData.helpOrganize}
          onChange={handleCheckboxChange}
          className={styles.checkbox}
        />
        <label htmlFor="helpOrganize">
          Would you like to help organize this event?
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit Request
      </button>
      <br />
      <br />
    </form>
  );
};

export default EventRequestForm;
