import React from 'react';

import history from 'utils/history';

import Page from 'layout/Page';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import ForgotPasswordRequest from 'pages/Auth/ForgotPassRequest';
import Logout from 'pages/Auth/Logout';
import { addRoutes } from './utils';

addRoutes([
    {
        path: '/auth',
        action: (ctx) => {
            return <Page>{ctx.next()}</Page>;
        },
        children: [
            {
                path: '/login',
                action: () => (
                    <Login
                        onLogin={() => history.push('/home')}
                        forgotPassRoute='/auth/forgot-password/request'
                        registerRoute='/auth/register'
                    />
                ),
            },
            {
                path: '/register',
                action: () => <Register />,
            },
            {
                path: '/forgot-password/request',
                action: () => <ForgotPasswordRequest />,
            },
        ],
    },
    {
        path: '/logout',
        action: () => {
            return <Logout />;
        },
    },
]);
