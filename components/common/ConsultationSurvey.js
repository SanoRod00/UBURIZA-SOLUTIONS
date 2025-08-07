import React, { useState } from "react";
import styles from "../../styles/ConsultationSurvey.module.scss";

const departments = [
  "Sales",
  "Support",
  "Technical",
  "Billing",
  "Other"
];

const ConsultationSurvey = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: departments[0],
    issue: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <h2>Book A Consultation</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={styles.input}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className={styles.input}
            />
          </label>
          <label>
            Department:
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={styles.select}
            >
              {departments.map(dep => (
                <option key={dep} value={dep}>{dep}</option>
              ))}
            </select>
          </label>
          <label>
            Reason:
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
              placeholder="Provide the reason for the Consultation"
              rows={4}
              className={styles.textarea}
            />
          </label>
          <div className={styles.modalButtons}>
            <button type="submit" className={styles.buttonPrimary}>Submit</button>
            <button type="button" onClick={onClose} className={styles.buttonSecondary}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationSurvey;
