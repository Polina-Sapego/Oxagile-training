import React from 'react';
import { TextField, Select, MenuItem } from '@mui/material';

function ContactInformation({ register, errors }) {
  const countries = [
    { code: 'US', label: 'United States', phone: '1' },
    { code: 'FR', label: 'France', phone: '33' },
    { code: 'DE', label: 'Germany', phone: '49' },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'PL', label: 'Poland', phone: '48' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'IN', label: 'India', phone: '91' },
  ];

  return (
    <div className="form-block">
      <p>ENTER YOUR DETAILS:</p>
      <div className="form-row">
        <div className="form-field form-right">
          <TextField
            id="name-basic"
            type="text"
            variant="outlined"
            label="Name"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </div>
        <div className="form-field form-left">
          <TextField
            id="surname-basic"
            type="text"
            variant="outlined"
            label="Surname"
            {...register('surname', { required: 'Surname is required' })}
            error={!!errors.surname}
            helperText={errors.surname?.message}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field form-right">
          <TextField
            id="email-basic"
            type="email"
            variant="outlined"
            label="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div className="form-field form-left">
          <Select
            label="Select country..."
            className="country-width"
            {...register('countryCode')}
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.phone}>
                <img
                  loading="lazy"
                  width={20}
                  height={14}
                  srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                  alt={`Flag of ${country.label}`}
                />
                {'  '}
                +
                {country.phone}
                {'  '}
                (
                {country.label}
                )
              </MenuItem>
            ))}
          </Select>
          <TextField
            id="phoneNumber-basic"
            variant="outlined"
            type="tel"
            label="Phone number"
            className="datepicker-field"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{9}$/,
                message: 'Phone number must contain exactly 9 digits',
              },
            })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
