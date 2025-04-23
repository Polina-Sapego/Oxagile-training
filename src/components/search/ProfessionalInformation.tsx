import React from 'react';
import { Divider, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

function ProfessionalInformation({
  register, fileName, handleFileChange, getShortFileName,
}) {
  return (
    <div className="form-block">
      <p>PROFESSIONAL INFORMATION:</p>
      <Divider />
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'flex-end' },
            mt: 2,
          }}
        >
          <label htmlFor="cv-upload" className="custom-upload-label">
            Upload CV
          </label>
          <input
            id="cv-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            {...register('cv', {
              required: 'CV is required',
            })}
            onChange={(e) => handleFileChange(e)}
            className="custom-file-input"
          />
          {fileName && <p className="file-name">{getShortFileName(fileName)}</p>}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, mt: 2 }}>
          <TextField
            id="linkedin-basic"
            variant="outlined"
            type="text"
            label="LinkedIn link"
            {...register('linkedin')}
          />
        </Grid>
        <Grid container size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <TextField
              id="location-basic"
              type="text"
              variant="outlined"
              className="form-location-button"
              label="Current location"
              {...register('location')}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfessionalInformation;
