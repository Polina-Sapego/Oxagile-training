import { TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { RiDeleteBin2Line } from 'react-icons/ri';
import React from 'react';

function CompanyBlock({
  field, index, remove, register, errors,
}) {
  return (
    <div key={field.id}>
      <div className="form-row">
        <div className="form-field form-right">
          <TextField
            id={`companyName-${index}`}
            variant="outlined"
            type="text"
            label="Company name"
            {...register(`companies.${index}.name`, { required: 'Company name is required' })}
            error={!!errors.companies?.[index]?.name}
            helperText={errors.companies?.[index]?.name?.message}
          />
        </div>
        <div className="form-field form-left">
          <TextareaAutosize
            aria-label="key responsibilities"
            placeholder="Key responsibilities"
            maxRows={3}
            {...register(`companies.${index}.responsibilities`)}
            className="custom-input"
          />
          <div className="form-field form-center">
            <RiDeleteBin2Line className="delete-icon" onClick={() => remove(index)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyBlock;
