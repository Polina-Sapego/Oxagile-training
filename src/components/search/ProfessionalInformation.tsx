import React from 'react';
import { Button, Divider, TextField } from '@mui/material';

function ProfessionalInformation({ register, fileName, handleFileChange }) {
  return (
    <div className="form-block">
      <Divider />
      <p>PROFESSIONAL INFORMATION:</p>
      <div className="form-row">
        <div className="form-field form-right">
          <Button
            variant="contained"
            component="label"
            className="form-button"
          >
            {fileName || 'Upload CV'}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              hidden
              {...register('cv', {
                onChange: (e) => {
                  handleFileChange(e);
                },
              })
            }
            />
          </Button>
        </div>
        <div className="form-field form-left">
          <TextField
            id="linkedin-basic"
            variant="outlined"
            type="text"
            label="LinkedIn link"
            {...register('linkedin')}
          />
        </div>
      </div>
      <div className="form-row form-center">
        <TextField
          id="location-basic"
          type="text"
          variant="outlined"
          className="form-location-button"
          label="Current location"
          {...register('location')}
        />
      </div>
    </div>
  );
}

export default ProfessionalInformation;
