import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  Button,
  Snackbar,
  Alert,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addUsersAction, IForm } from '@redux/form/actionCreators';
import { RootState } from '@redux/store';
import theme from './Theme';
import ContactInformation from './ContactInformation';
import ProfessionalInformation from './ProfessionalInformation';
import WorkExperience from './WorkExperience';

function Index() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      countryCode: '',
      phoneNumber: '',
      hasExperience: false,
    },
  });
  const hasExperience = !!watch('hasExperience');
  const [fileName, setFileName] = useState('');
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'companies',
  });
  const forms = useSelector((state: RootState) => state.form.forms);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const onSubmit = (data: IForm) => {
    const payload = { ...data };
    delete payload.cv;

    const emailExistsNow = forms.some((form) => form.email === data.email);

    if (emailExistsNow) {
      setSnackbarMessage('This email already exists!');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    dispatch(addUsersAction(payload));
    setSnackbarMessage('Your data has been saved successfully!');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="form-container">
        <h2 className="form-name">APPLICATION FORM</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContactInformation register={register} errors={errors} />
          <ProfessionalInformation
            register={register}
            fileName={fileName}
            handleFileChange={handleFileChange}
          />
          <div className="form-row form-center">
            <FormControlLabel
              control={(
                <Checkbox
                  onChange={(e) => setValue('hasExperience', e.target.checked)}
                  checked={watch('hasExperience')}
                />
              )}
              label="Have you worked in this field before?"
            />
          </div>
          {hasExperience && (
          <WorkExperience
            register={register}
            control={control}
            errors={errors}
            fields={fields}
            append={append}
            remove={remove}
          />
          )}
          <div className="form-row form-center">
            <Button type="submit" variant="outlined">Apply</Button>
          </div>
        </form>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
}

export default Index;
