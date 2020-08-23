import React from 'react';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import TownhallIcon from '@material-ui/icons/AccountBalance';


import { DeviceContext } from 'contexts/Device';

import Component from './IconBar';

export default { title: 'Icon Bar' };

export function CenterIconBar() {
    return (
        <Component justify={'center'}>
            <div>
                <TownhallIcon />
            </div>
            <div>
                <SettingsIcon />
            </div>
            <div>
                <SettingsIcon />
            </div>
            <div>
                <SettingsIcon />
            </div>
        </Component>
    );
}

export function TopIconBar() {
    return (
        <Component justify={'flex-start'}>
            <div>
                <TownhallIcon />
            </div>
            <div>
                <SettingsIcon />
            </div>
            <div>
                <SettingsIcon />
            </div>
            <div>
                <SettingsIcon />
            </div>
        </Component>
    );
}

export function IconBarFooter() {
    return (
        <Component justify={'flex-end'}>
            <div>
                <TownhallIcon />
            </div>
            <div>
                <SettingsIcon />
            </div>
            <div>
                <SettingsIcon />
            </div>
            <div>
                <SettingsIcon />
            </div>
        </Component>
    );
}