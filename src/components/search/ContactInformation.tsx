import React from 'react';
import {
  TextField, Select, MenuItem, InputLabel, FormControl, Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';

function ContactInformation({ register, errors, control }) {
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
    <>
      <p>ENTER YOUR DETAILS:</p>
      <Divider />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mt: 2 }}>
          <TextField
            id="name-basic"
            type="text"
            variant="outlined"
            label="Name"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, mt: 2 }}>
          <TextField
            id="surname-basic"
            type="text"
            variant="outlined"
            label="Surname"
            {...register('surname', { required: 'Surname is required' })}
            error={!!errors.surname}
            helperText={errors.surname?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}>
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
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              maxWidth: 400, width: '100%', mx: 'auto', mb: 2,
            }}
          >
            <Grid size={{ xs: 5, sm: 3 }}>
              <Controller
                name="countryCode"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select
                      label="Country"
                      value={field.value}
                      onChange={field.onChange}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country.code} value={country.phone}>
                          <img
                            loading="lazy"
                            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                            alt={`Flag of ${country.label}`}
                            style={{ marginRight: 8 }}
                          />
                          +
                          {' '}
                          {country.phone}
                          {' '}
                          (
                          {' '}
                          {country.label}
                          {' '}
                          )
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid size={{ xs: 7, sm: 8 }}>
              <TextField
                id="phoneNumber-basic"
                variant="outlined"
                type="tel"
                label="Phone number"
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactInformation;
