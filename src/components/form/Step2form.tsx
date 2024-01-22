// src/components/Step2Form.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import { addUser } from "../../store/action.ts";

const Step2Form: React.FC = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    address: yup.string(),
    state: yup.string(),
    city: yup.string(),
    country: yup.string(),
    pincode: yup.string().matches(/^\d+$/, "Invalid Pincode")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    dispatch(addUser({ userData: data }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("address")}
        label="Address"
        error={!!errors.address}
        helperText={errors.address?.message}
      />
      <TextField
        {...register("state")}
        label="State"
        error={!!errors.state}
        helperText={errors.state?.message}
      />
      <TextField
        {...register("city")}
        label="City"
        error={!!errors.city}
        helperText={errors.city?.message}
      />
      <TextField
        {...register("country")}
        label="Country"
        error={!!errors.country}
        helperText={errors.country?.message}
      />
      <TextField
        {...register("pincode")}
        label="Pincode"
        error={!!errors.pincode}
        helperText={errors.pincode?.message}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Step2Form;
