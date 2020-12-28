import React from 'react';

import ListCell from './ListCell';

export default { title: 'Components/ListOverflow/ListCell' };

const userCell = {
    primary: 'Francisco Gallego',
    secondary: 'Admin',
};

export function Primary() {
    return <ListCell primary={userCell.primary} />;
}

export function Secondary() {
    return (
        <ListCell primary={userCell.primary} secondary={userCell.secondary} />
    );
}
