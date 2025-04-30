import React from 'react';
import {
  TextField, Select, MenuItem, InputLabel, FormControl, Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';

const formContactInformation = {
  name: {
    fieldName: 'name', label: 'Name', value: '', requiredText: 'Name is required',
  },
  surname: {
    fieldName: 'surname', label: 'Surname', value: '', requiredText: 'Surname is required',
  },
  email: {
    fieldName: 'email', label: 'Email', value: '', requiredText: 'Email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address' },
  },
  countryCode: { fieldName: 'countryCode', label: 'Country', value: '48' },
  phoneNumber: {
    fieldName: 'phoneNumber', label: 'Phone number', value: '', requiredText: 'Phone number is required', pattern: { value: /^[0-9]{9}$/, message: 'Phone number must contain exactly 9 digits' },
  },
};

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

  const flexEnd = { display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } };
  const flexStart = { display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } };
  const sizeStand = { xs: 12, sm: 6 };

  return (
    <>
      <p>ENTER YOUR DETAILS:</p>
      <Divider />
      <Grid container spacing={2}>
        <Grid size={sizeStand} sx={{ ...flexEnd, mt: 2 }}>
          <TextField
            id={formContactInformation.name.fieldName}
            type="text"
            variant="outlined"
            label={formContactInformation.name.label}
            {...register(formContactInformation.name.fieldName, { required: formContactInformation.name.requiredText })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid size={sizeStand} sx={{ ...flexStart, mt: 2 }}>
          <TextField
            id={formContactInformation.surname.fieldName}
            type="text"
            variant="outlined"
            label={formContactInformation.surname.label}
            {...register(formContactInformation.surname.fieldName, { required: formContactInformation.surname.requiredText })}
            error={!!errors.surname}
            helperText={errors.surname?.message}
          />
        </Grid>
        <Grid size={sizeStand} sx={{ ...flexEnd, mt: 2 }}>
          <TextField
            id={formContactInformation.email.fieldName}
            type="email"
            variant="outlined"
            label={formContactInformation.email.label}
            {...register(formContactInformation.email.fieldName, {
              required: formContactInformation.email.requiredText,
              pattern: formContactInformation.email.pattern,
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid container spacing={0} size={sizeStand} sx={{ ...flexStart, mt: 2 }}>
          <Grid size={{ xs: 2, sm: 3 }} sx={{ ml: { xs: 5, sm: 0 } }}>
            <Controller
              name={formContactInformation.countryCode.fieldName}
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>{formContactInformation.countryCode.label}</InputLabel>
                  <Select
                    label={formContactInformation.countryCode.label}
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
                        {`+${country.phone} (${country.label})`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid size={{ xs: 8, sm: 8 }} sx={{ ...flexStart }}>
            <TextField
              id={formContactInformation.phoneNumber.fieldName}
              variant="outlined"
              type="tel"
              label={formContactInformation.phoneNumber.label}
              {...register(formContactInformation.phoneNumber.fieldName, {
                required: formContactInformation.phoneNumber.requiredText,
                pattern: formContactInformation.phoneNumber.pattern,
              })}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactInformation;
