import React from 'react';
import { Divider, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

const formProfessionalInformation = {
  cv: { fieldName: 'cv', label: 'Upload CV', requiredText: 'CV is required' },
  linkedin: { fieldName: 'linkedin', label: 'LinkedIn link' },
  location: { fieldName: 'location', label: 'Current location' },
};

function ProfessionalInformation({
  register, fileName, handleFileChange, getShortFileName,
}) {
  const flexStart = { display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, mt: 2 };
  const flexCenter = { display: 'flex', justifyContent: 'center' };
  const sizeStand = { xs: 12, sm: 6 };

  return (
    <div className="form-block">
      <p>PROFESSIONAL INFORMATION:</p>
      <Divider />
      <Grid container spacing={2}>
        <Grid
          size={sizeStand}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'flex-end' },
            mt: 2,
          }}
        >
          <label htmlFor={formProfessionalInformation.cv.fieldName} className="custom-upload-label">
            {formProfessionalInformation.cv.label}
          </label>
          <input
            id={formProfessionalInformation.cv.fieldName}
            type="file"
            accept=".pdf,.doc,.docx"
            {...register(formProfessionalInformation.cv.fieldName, {
              required: formProfessionalInformation.cv.requiredText,
            })}
            onChange={handleFileChange}
            className="custom-file-input"
          />
          {fileName && <p className="file-name">{getShortFileName(fileName)}</p>}
        </Grid>
        <Grid size={sizeStand} sx={flexStart}>
          <TextField
            id={formProfessionalInformation.linkedin.fieldName}
            variant="outlined"
            type="text"
            label={formProfessionalInformation.linkedin.label}
            {...register(formProfessionalInformation.linkedin.fieldName)}
          />
        </Grid>
        <Grid container size={12} sx={flexCenter}>
          <Grid size={sizeStand} sx={flexCenter}>
            <TextField
              id={formProfessionalInformation.location.fieldName}
              type="text"
              variant="outlined"
              className="form-location-button"
              label={formProfessionalInformation.location.label}
              {...register(formProfessionalInformation.location.fieldName)}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfessionalInformation;
