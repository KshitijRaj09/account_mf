import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {getUserDetailsApi} from "../../apis/getUserDetailsAPI";
import {updateUserDetailsApi} from "../../apis/updateUserDetailsAPI";

type FormInputs = {
  username: string;
  description: string;
  name: string;
  email: string;
};

const styles = () => ({
  saveButton: {
    backgroundColor: "#F38181",
    "&:hover": {
      backgroundColor: "#C06C84",
    },
  },
});

type errorResponseType = {
  username: string;
  email: string;
};

const Account = () => {
  const classes = styles();
  const [errorResponse, setErrorResponse] = useState<errorResponseType>({
    username: "",
    email: "",
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {errors, isLoading, isDirty},
  } = useForm<FormInputs>({
    defaultValues: async () => await getUserDetailsApi(),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const response = await updateUserDetailsApi(data);
    if (response.status >= 200 && response.status < 300) {
      reset(data);
      setErrorResponse({
        email: "",
        username: "",
      });
    } else {
      if (response.data.includes("username")) {
        setErrorResponse({
          email: "",
          username: response.data,
        });
      }
      if (response.data.includes("email")) {
        setErrorResponse({
          username: "",
          email: response.data,
        });
      }
    }
  };

  return (
    <>
      {!isLoading && (
        <Box component='div'>
          <Typography component='h3' variant='h5' color='primary'>
            Your profile details
          </Typography>
          <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container gap={10} sx={{marginTop: "20px"}}>
              <Grid item mobile={5}>
                <Controller
                  name='username'
                  control={control}
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                  })}
                  render={({field}) => (
                    <TextField
                      id='username'
                      label='Username'
                      variant='standard'
                      error={!!errors.username || !!errorResponse.username}
                      helperText={
                        errors.username?.message || errorResponse.username
                      }
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item mobile={5}>
                <Controller
                  name='name'
                  control={control}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  render={({field}) => (
                    <TextField
                      id='name'
                      label='Name'
                      variant='standard'
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item mobile={5}>
                <Controller
                  name='email'
                  control={control}
                  render={({field}) => (
                    <TextField
                      id='email'
                      label='Email'
                      type='email'
                      variant='standard'
                      error={!!errors.email || !!errorResponse.email}
                      helperText={errors.email?.message || errorResponse.email}
                      {...field}
                    />
                  )}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
              </Grid>
              <Grid item mobile={5}>
                <Controller
                  name='description'
                  control={control}
                  render={({field}) => (
                    <TextField
                      id='description'
                      label='Description'
                      variant='standard'
                      multiline
                      placeholder='Write about yourself...'
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item mobile={2}>
                <Button
                  type='submit'
                  id='saveButton'
                  sx={classes.saveButton}
                  fullWidth
                  disabled={!isDirty}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Account;
