'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';

const toISO = (value: string) => new Date(value).toISOString();

const eventTypes = [
  { id: 1, name: 'Service' },
  { id: 2, name: 'Social' },
  { id: 3, name: 'Spiritual' },
];

interface FormData {
  eventName: string;
  typeID: string;
  description: string;
  address: string;
  date: string;
  helpOrganize: boolean;
}

const EventRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    eventName: '',
    typeID: '',
    description: '',
    address: '',
    date: '',
    helpOrganize: false,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    const payload = {
      eventName: formData.eventName,
      typeID: parseInt(formData.typeID),
      description: formData.description,
      address: formData.address,
      beginTime: toISO(formData.date),
      requestorHelp: formData.helpOrganize,
    };
  
    try {
      const response = await fetch('https://localhost:5000/api/Church/Events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        alert('Your event request was successfully submitted!');
        setFormData({
          eventName: '',
          typeID: '',
          description: '',
          address: '',
          date: '',
          helpOrganize: false,
        });
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <div
      style={{
        maxWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#f9f9ff',
        padding: '1rem',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#fff',
          borderRadius: '1.25rem',
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: '700', color: '#222' }}>
          📅 Submit an Event Request
        </h1>

        <p style={{ textAlign: 'center', fontSize: '0.95rem', color: '#666' }}>
          Fill out the details below to request approval for a new event.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', color: '#65558f' }}>
          <label htmlFor="eventName" style={labelStyle}>
            Event Name *
          </label>
          <input
            type="text"
            name="eventName"
            id="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            placeholder="e.g. Community Cleanup"
            style={inputStyle}
            required
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <label htmlFor="typeID" style={labelStyle}>
            Event Type *
          </label>
          <select
            id="typeID"
            name="typeID"
            value={formData.typeID}
            onChange={handleInputChange}
            style={inputStyle}
            required
          >
            <option value="">Select a type</option>
            {eventTypes.map((et) => (
              <option key={et.id} value={et.id}>
                {et.name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <label htmlFor="description" style={labelStyle}>
            Event Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="What will this event be like?"
            style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
            required
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <label htmlFor="address" style={labelStyle}>
            Location (Address) *
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="123 Main St, Provo, UT"
            style={inputStyle}
            required
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <label htmlFor="date" style={labelStyle}>
            Date & Time *
          </label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: '#000' }}>
          <input
            type="checkbox"
            id="helpOrganize"
            name="helpOrganize"
            checked={formData.helpOrganize}
            onChange={handleCheckboxChange}
            style={{ width: '18px', height: '18px', accentColor: '#007aff' }}
          />
          <label htmlFor="helpOrganize">I’d like to help organize this event</label>
        </div>

        <button type="submit" style={buttonStyle}>
          Submit Request
        </button>
      </form>
    </div>
  );
};

const labelStyle = {
  fontWeight: 600,
  fontSize: '0.95rem',
  color: '#333',
};

const inputStyle = {
  fontSize: '1rem',
  padding: '0.75rem 1rem',
  border: '1px solid #ccc',
  borderRadius: '0.75rem',
  backgroundColor: '#fafafa',
  color: '#000',
  transition: 'border-color 0.2s',
};

const buttonStyle = {
  width: '100%',
  backgroundColor: '#007aff',
  color: '#fff',
  padding: '0.9rem',
  fontSize: '1.05rem',
  fontWeight: 600,
  border: 'none',
  borderRadius: '0.85rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};

export default EventRequestForm;
