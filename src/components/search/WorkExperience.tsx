import React from 'react';
import {
  Button, TextField, FormControl, InputLabel, Select, MenuItem, Divider,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Controller } from 'react-hook-form';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import CompanyBlock from './CompanyBlock';

function WorkExperience({
  register, control, errors, fields, append, remove,
}) {
  return (
    <div className="form-block">
      <Divider />
      <p>PREVIOUS PLACE OF WORK:</p>
      <div className="form-row">
        <div className="form-field form-right">
          <TextField
            id="experience-company"
            variant="outlined"
            type="text"
            label="Company name"
            {...register('experience', { required: 'Company name is required' })}
            error={!!errors.experience}
            helperText={errors.experience?.message}
          />
        </div>
        <div className="form-field form-left">
          <FormControl variant="outlined" className="form-position-width">
            <InputLabel id="position-label">Position</InputLabel>
            <Select
              id="dropdown"
              label="Position"
              variant="outlined"
              {...register('position')}
            >
              <MenuItem value="frontend">Frontend Developer</MenuItem>
              <MenuItem value="backend">Backend Developer</MenuItem>
              <MenuItem value="fullstack">Fullstack Developer</MenuItem>
              <MenuItem value="designer">UI/UX Designer</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="form-row">
        <div className="form-field form-right form-data-width">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              name="workPeriodFrom"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  label="From"
                  views={['year', 'month']}
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      className: 'datepicker-field',
                    },
                  }}
                />
              )}
            />
            <Controller
              name="workPeriodTo"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  label="To"
                  views={['year', 'month']}
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      className: 'datepicker-field',
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="form-field form-left">
          <TextareaAutosize
            aria-label="key responsibilities"
            placeholder="Key responsibilities"
            maxRows={4}
            {...register('responsibilities')}
            className="custom-input"
          />
        </div>
      </div>
      {fields.map((field, index) => (
        <CompanyBlock
          key={field.id}
          field={field}
          index={index}
          remove={remove}
          register={register}
          errors={errors}
        />
      ))}
      <div className="form-field form-center">
        <Button type="button" variant="outlined" onClick={() => append({})}>
          Add company
        </Button>
      </div>
    </div>
  );
}

export default WorkExperience;
