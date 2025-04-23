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

function WorkExperience({
  register, control, errors, fields, append, remove, getValues,
}) {
  return (
    <div className="form-block">
      <p>PREVIOUS PLACE OF WORK:</p>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Divider />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mt: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Company name"
                {...register(`companies.${index}.experience`, {
                  required: 'Company name is required',
                })}
                error={!!errors?.companies?.[index]?.experience}
                helperText={errors?.companies?.[index]?.experience?.message}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4.5 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, mt: 2 }}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id={`position-label-${index}`}>Position</InputLabel>
                <Select
                  label="Position"
                  {...register(`companies.${index}.position`)}
                >
                  <MenuItem value="frontend">Frontend Developer</MenuItem>
                  <MenuItem value="backend">Backend Developer</MenuItem>
                  <MenuItem value="fullstack">Fullstack Developer</MenuItem>
                  <MenuItem value="designer">UI/UX Designer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
            >
              <Grid container spacing={0}>
                <Grid size={{ xs: 6, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mb: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                      name={`companies.${index}.workPeriodFrom`}
                      control={control}
                      defaultValue={null}
                      rules={{
                        validate: (value) => {
                          const toDate = getValues(`companies.${index}.workPeriodTo`);
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
                          label="From"
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
                <Grid size={{ xs: 6, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mb: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                      name={`companies.${index}.workPeriodTo`}
                      control={control}
                      defaultValue={null}
                      rules={{
                        validate: (value) => {
                          const fromDate = getValues(`companies.${index}.workPeriodFrom`);
                          if (!value && fromDate) {
                            return 'End date is required if start date is filled';
                          }
                          return true;
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <DatePicker
                          label="To"
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
            <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, mb: 2 }}>
              <TextareaAutosize
                aria-label="key responsibilities"
                placeholder="Key responsibilities"
                maxRows={4}
                {...register(`companies.${index}.responsibilities`)}
                className="custom-input"
              />
            </Grid>
            {index > 0 && (
            <Grid size={{ xs: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
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
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, sm: 12 }}
          sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center' }, mb: 2 }}
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
