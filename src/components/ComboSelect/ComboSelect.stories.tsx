import React from 'react';

import ComboSelect from './ComboSelect';

export default { title: 'Components/Combo Select' };

const statusTags = ['admin', 'moderator', 'organizer', 'regular', 'banned'];

export function Primary() {
    const [state, setState] = React.useState<string[]>([]);
    return (
        <ComboSelect
            options={statusTags}
            onChange={(e, value) => setState(value)}
            selectedFilter={state}
            label='Status Tags'
        />
    );
}
