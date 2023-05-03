import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    birthDate: null,
    phone: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      birthDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="register-container">
      <h1>Página de registro</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Nombre completo</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="birthDate">Fecha de nacimiento</label>
        <DatePicker
          selected={formData.birthDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
          showYearDropdown
          dropdownMode="select"
          required
        />

        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <div className="terms-container">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">Acepto los términos y condiciones del registro</label>
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;