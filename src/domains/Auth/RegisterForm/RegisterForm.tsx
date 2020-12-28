/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import type { RegisterForm as FormType } from 'prytaneum-typings';

import Form from 'components/Form';
import FormContent from 'components/FormContent';
import FormActions from 'components/FormActions';
import TextField from 'components/TextField';
import useEndpoint from 'hooks/useEndpoint';
import LoadingButton from 'components/LoadingButton';
import useSnack from 'hooks/useSnack';
import useForm from 'hooks/useForm';

import API from '../api';

interface Props {
    onSuccess: () => void;
    onFailure: () => void;
}

const initialState: FormType = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
};
export default function RegisterForm({ onSuccess, onFailure }: Props) {
    const [snack] = useSnack();
    const [isPassVisible, setIsPassVisible] = React.useState(false);
    const [form, errors, handleSubmit, handleChange] = useForm(initialState);
    const builtRequest = React.useCallback(() => API.register(form), [form]);
    const [sendRequest, isLoading] = useEndpoint(builtRequest, {
        onSuccess: () => {
            snack('Successfully registered!');
            onSuccess();
        },
        onFailure,
    });

    return (
        <Form onSubmit={handleSubmit(sendRequest)}>
            <FormContent>
                <TextField
                    helperText={errors.firstName}
                    required
                    value={form.firstName}
                    onChange={handleChange('firstName')}
                    label='First Name'
                    autoFocus
                    error={Boolean(errors.firstName)}
                />
                <TextField
                    helperText={errors.lastName}
                    required
                    value={form.lastName}
                    onChange={handleChange('lastName')}
                    label='Last Name'
                    error={Boolean(errors.lastName)}
                />
                <TextField
                    helperText={errors.email || 'Well Never share your email'}
                    required
                    type='email'
                    value={form.email}
                    onChange={handleChange('email')}
                    label='Email'
                    error={Boolean(errors.email)}
                />
                <TextField
                    required
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    type={isPassVisible ? 'text' : 'password'}
                    value={form.password}
                    onChange={handleChange('password')}
                    label='Password'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={() =>
                                        setIsPassVisible(!isPassVisible)
                                    }
                                    onMouseDown={(e) => e.preventDefault()}
                                    edge='end'
                                >
                                    {isPassVisible ? (
                                        <VisibilityOff
                                            color={
                                                errors.password
                                                    ? 'error'
                                                    : undefined
                                            }
                                        />
                                    ) : (
                                        <Visibility
                                            color={
                                                errors.password
                                                    ? 'error'
                                                    : undefined
                                            }
                                        />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    required
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword}
                    type={isPassVisible ? 'text' : 'password'}
                    value={form.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    label='Confirm Password'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={() =>
                                        setIsPassVisible(!isPassVisible)
                                    }
                                    onMouseDown={(e) => e.preventDefault()}
                                    edge='end'
                                >
                                    {isPassVisible ? (
                                        <VisibilityOff
                                            color={
                                                errors.confirmPassword
                                                    ? 'error'
                                                    : undefined
                                            }
                                        />
                                    ) : (
                                        <Visibility
                                            color={
                                                errors.confirmPassword
                                                    ? 'error'
                                                    : undefined
                                            }
                                        />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormContent>
            <FormActions>
                <LoadingButton loading={isLoading}>
                    <Button
                        fullWidth
                        type='submit'
                        variant='contained'
                        color='primary'
                    >
                        Register
                    </Button>
                </LoadingButton>
            </FormActions>
        </Form>
    );
}

RegisterForm.defaultProps = {
    onFailure: null,
};

RegisterForm.propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onFailure: PropTypes.func,
};
