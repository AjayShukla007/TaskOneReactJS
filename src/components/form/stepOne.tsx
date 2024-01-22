import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextField, MenuItem, Typography } from '@mui/material';
import { addUser } from '../../store/action.ts';

import Step2Form from './Step2form.tsx';

const Step1Form: React.FC = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(3, 'Min 3 characters'),
    age: yup.number().required('Age is required').positive('Must be a positive integer'),
    sex: yup.string().required('Sex is required').oneOf(['Male', 'Female'], 'Invalid sex'),
    mobile: yup.string().matches(/^(\+\d{1,2}\s?)?(\d{10})$/, 'Invalid Indian Mobile Number'),
    govtIdType: yup.string().oneOf(['Aadhar', 'PAN'], 'Invalid ID Type'),
    govtId: yup.string().when('govtIdType', (govtIdType, schema) => {
      if (govtIdType === 'Aadhar') {
        return schema.required('Aadhar ID is required').matches(/^[2-9]\d{11}$/, 'Invalid Aadhar ID');
      }
      return schema;
    }),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    dispatch(addUser({ userData: data }));
    setStep(2); // Herw i am updating the step from 1 to 2 to render step 2 form
  };

  return (
    <div>
      {step === 1 ? (
        <form onSubmit={handleSubmit(onSubmit)} className="formComponent">
          <TextField {...register('name')} label="Name" error={!!errors.name} helperText={errors.name?.message} />
          <TextField {...register('age')} label="Age" type="number" error={!!errors.age} helperText={errors.age?.message} />
          <TextField {...register('sex')} select label="Sex" error={!!errors.sex} helperText={errors.sex?.message}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField {...register('mobile')} label="Mobile" error={!!errors.mobile} helperText={errors.mobile?.message} />
          <TextField {...register('govtIdType')} select label="Govt Issued ID Type" error={!!errors.govtIdType} helperText={errors.govtIdType?.message}>
            <MenuItem value="Aadhar">Aadhar</MenuItem>
            <MenuItem value="PAN">PAN</MenuItem>
          </TextField>
          {errors.govtIdType === 'Aadhar' && (
            <TextField {...register('govtId')} label="Govt Issued ID" error={!!errors.govtId} helperText={errors.govtId?.message} />
          )}
          <Button type="submit">Next</Button>
        </form>
      ) : (
        <Typography variant="h6">Step 1 completed successfully. Proceed to Step 2</Typography>
      )}
      {step === 2 && <Step2Form />}
    </div>
  );
};

export default Step1Form;
