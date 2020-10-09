import React from 'react';
import {
    Link as MUILink,
    Grid,
    Typography,
    Avatar,
    Paper,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import LoginForm from 'domains/Auth/LoginForm';
import { set } from 'utils/storage';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
    },
    paper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3),
            marginTop: '-10vh',
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 1),
            paddingTop: '10vh',
            height: '100%',
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    nav: {
        paddingTop: theme.spacing(2),
    },
}));

interface Props {
    onLogin: () => void;
    registerRoute?: string;
    forgotPassRoute?: string;
}

export default function Login({
    onLogin,
    registerRoute,
    forgotPassRoute,
}: Props) {
    const classes = useStyles();
    return (
        <Grid
            container
            alignContent='center'
            className={classes.root}
            justify='center'
        >
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <div className={classes.form}>
                    <LoginForm
                        onSuccess={() => {
                            set({ isLoggedIn: true });
                            onLogin();
                        }}
                    />
                </div>
                <Grid container className={classes.nav}>
                    {forgotPassRoute && (
                        <Grid item xs>
                            <MUILink
                                href={forgotPassRoute}
                                variant='body2'
                                component='a'
                            >
                                Forgot password?
                            </MUILink>
                        </Grid>
                    )}
                    {registerRoute && (
                        <Grid item>
                            <MUILink
                                href={registerRoute}
                                variant='body2'
                                component='a'
                            >
                                Don&#39;t have an account? Sign Up
                            </MUILink>
                        </Grid>
                    )}
                </Grid>
            </Paper>
        </Grid>
    );
}

Login.defaultProps = {
    registerRoute: undefined,
    forgotPassRoute: undefined,
};
