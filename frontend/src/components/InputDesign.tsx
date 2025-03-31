'use client';
import React, { useState, FormEvent } from 'react';
import styles from './InputDesign.module.css';
import EventRequestForm from './EventRequestForm';
// import BottomNavigation from './BottomNavigation';

function InputDesign() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    eventDescription: '',
    address: '',
    date: '',
    groupsInvolved: '',
    helpOrganize: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      helpOrganize: e.target.checked,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to an API
  };

  return (
    <div className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <main className={styles.content}>
        <EventRequestForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          handleSubmit={handleSubmit}
        />
      </main>

      {/* <BottomNavigation /> */}
    </div>
  );
}

export default InputDesign;
