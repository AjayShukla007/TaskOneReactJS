import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { TextField, Button } from '@material-ui/core';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { yourAction } from '../../store/User.ts';

const schema = yup.object().shape({
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
  pincode: yup.string().matches(/^\d+$/),
});

const Step2Form = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    // Here, you would dispatch a Redux action to save the form data
    dispatch(yourAction(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField name="address" inputRef={register} error={!!errors.address} helperText={errors.address?.message} />
      <TextField name="state" inputRef={register} error={!!errors.state} helperText={errors.state?.message} />
      <TextField name="city" inputRef={register} error={!!errors.city} helperText={errors.city?.message} />
      <TextField name="country" inputRef={register} error={!!errors.country} helperText={errors.country?.message} />
      <TextField name="pincode" inputRef={register} error={!!errors.pincode} helperText={errors.pincode?.message} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Step2Form;
