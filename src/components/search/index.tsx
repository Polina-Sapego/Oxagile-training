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
import Grid from '@mui/material/Grid';
import theme from './Theme';
import ContactInformation from './ContactInformation';
import ProfessionalInformation from './ProfessionalInformation';
import WorkExperience from './WorkExperience';

function Index() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      countryCode: '48',
      phoneNumber: '',
      cv: undefined,
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
  const flexCenter = { display: 'flex', justifyContent: 'center', mt: 2 };

  const onSubmit = (data: IForm) => {
    const payload = { ...data };

    const emailExistsNow = forms.some((form) => form.email === data.email);

    if (emailExistsNow) {
      setSnackbarMessage('This email already exists!');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    dispatch(addUsersAction(payload));
    reset({
      name: '',
      surname: '',
      email: '',
      countryCode: '48',
      phoneNumber: '',
      cv: undefined,
      linkedin: '',
      location: '',
      hasExperience: false,
      companies: [],
    });
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

  const getShortFileName = (name) => {
    if (!name) return '';
    return name.length > 30 ? `${name.slice(0, 27)}…` : name;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="form-container">
        <h2 className="form-name">APPLICATION FORM</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContactInformation register={register} errors={errors} control={control} />
          <ProfessionalInformation
            register={register}
            fileName={fileName}
            errors={errors}
            getShortFileName={getShortFileName}
            handleFileChange={handleFileChange}
          />
          <Grid container spacing={2}>
            <Grid
              size={{ xs: 12, sm: 12 }}
              sx={flexCenter}
            >
              <FormControlLabel
                control={(
                  <Checkbox
                    onChange={(e) => {
                      const { checked } = e.target;
                      setValue('hasExperience', checked);
                      if (checked && fields.length === 0) {
                        append({});
                      }
                    }}
                    checked={watch('hasExperience')}
                  />
                )}
                label="Have you worked in this field before?"
              />
            </Grid>
          </Grid>
          {hasExperience && (
          <WorkExperience
            register={register}
            control={control}
            errors={errors}
            fields={fields}
            append={append}
            remove={remove}
            getValues={getValues}
          />
          )}
          <Grid container spacing={2} sx={flexCenter}>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={flexCenter}
            >
              <Button type="submit" variant="outlined">Apply</Button>
            </Grid>
          </Grid>
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
