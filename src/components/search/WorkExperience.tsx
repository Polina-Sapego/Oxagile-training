import React from 'react';
import {
  Button, TextField, FormControl, InputLabel, Select, MenuItem, Divider,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Controller } from 'react-hook-form';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';

const formWorkExperience = {
  experience: { fieldName: 'experience', label: 'Company name', requiredText: 'Company name is required' },
  position: { fieldName: 'position', label: 'Position' },
  workPeriodFrom: { fieldName: 'workPeriodFrom', label: 'From' },
  workPeriodTo: { fieldName: 'workPeriodTo', label: 'To' },
  responsibilities: { fieldName: 'responsibilities', placeholder: 'Key responsibilities' },
};

function WorkExperience({
  register, control, errors, fields, append, remove, getValues,
}) {
  const flexEnd = { display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } };
  const flexStart = { display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } };
  const flexCenter = { display: 'flex', justifyContent: 'center' };
  const sizeStand = { xs: 12, sm: 6 };

  return (
    <div className="form-block">
      <p>PREVIOUS PLACE OF WORK:</p>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Divider />
          <Grid container spacing={2}>
            <Grid size={sizeStand} sx={{ ...flexEnd, mt: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label={formWorkExperience.experience.label}
                {...register(`companies.${index}.${formWorkExperience.experience.fieldName}`, {
                  required: formWorkExperience.experience.requiredText,
                })}
                error={!!errors?.companies?.[index]?.experience}
                helperText={errors?.companies?.[index]?.experience?.message}
              />
            </Grid>
            <Grid container spacing={2} size={sizeStand} sx={{ ...flexStart }}>
              <Grid size={{ xs: 9, sm: 9 }} sx={{ ...flexStart, mt: 2 }}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    id={`position-label-${index}`}
                  >
                    {formWorkExperience.position.label}
                  </InputLabel>
                  <Select
                    label={formWorkExperience.position.label}
                    {...register(`companies.${index}.${formWorkExperience.position.fieldName}`)}
                  >
                    <MenuItem value="frontend">Frontend Developer</MenuItem>
                    <MenuItem value="backend">Backend Developer</MenuItem>
                    <MenuItem value="fullstack">Fullstack Developer</MenuItem>
                    <MenuItem value="designer">UI/UX Designer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              size={sizeStand}
            >
              <Grid container spacing={0}>
                <Grid size={{ xs: 6, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'flex-end', sm: 'flex-end' }, mb: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                      name={`companies.${index}.${formWorkExperience.workPeriodFrom.fieldName}`}
                      control={control}
                      defaultValue={null}
                      rules={{
                        validate: (value) => {
                          const toDate = getValues(`companies.${index}.${formWorkExperience.workPeriodTo.fieldName}`);
                          if (!value && toDate) {
                            return 'Start date is required if end date is filled';
                          }
                          if (dayjs(value).isAfter(dayjs(toDate))) {
                            return 'Start date cannot be after end date';
                          }
                          return true;
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <DatePicker
                          label={formWorkExperience.workPeriodFrom.label}
                          views={['year', 'month']}
                          value={field.value}
                          onChange={field.onChange}
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              variant: 'outlined',
                              error: !!fieldState.error,
                              helperText: fieldState.error?.message,
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid size={{ xs: 6, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' }, mb: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                      name={`companies.${index}.${formWorkExperience.workPeriodTo.fieldName}`}
                      control={control}
                      defaultValue={null}
                      rules={{
                        validate: (value) => {
                          const fromDate = getValues(`companies.${index}.${formWorkExperience.workPeriodFrom.fieldName}`);
                          if (!value && fromDate) {
                            return 'End date is required if start date is filled';
                          }
                          return true;
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <DatePicker
                          label={formWorkExperience.workPeriodTo.label}
                          views={['year', 'month']}
                          value={field.value}
                          onChange={field.onChange}
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              variant: 'outlined',
                              error: !!fieldState.error,
                              helperText: fieldState.error?.message,
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={sizeStand} sx={{ ...flexStart, mb: 2 }}>
              <TextareaAutosize
                aria-label={formWorkExperience.responsibilities.placeholder}
                placeholder={formWorkExperience.responsibilities.placeholder}
                maxRows={4}
                {...register(`companies.${index}.${formWorkExperience.responsibilities.fieldName}`)}
                className="custom-input"
              />
            </Grid>
            {index > 0 && (
              <Grid size={{ xs: 12, sm: 12 }} sx={{ ...flexCenter, mb: 2 }}>
                <div>
                  <RiDeleteBin2Line
                    className="delete-icon"
                    onClick={() => remove(index)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </Grid>
            )}
          </Grid>
        </div>
      ))}
      <Grid container spacing={2} sx={{ ...flexCenter }}>
        <Grid
          size={sizeStand}
          sx={{ ...flexCenter }}
        >
          <Button type="button" variant="outlined" onClick={() => append({})}>
            Add company
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default WorkExperience;
