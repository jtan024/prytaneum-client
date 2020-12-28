/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MUITextField, { TextFieldProps } from '@material-ui/core/TextField';

function toSnakeCase(str?: string) {
    if (!str) return undefined;
    return str
        .split(' ')
        .map((word) => word[0].toLowerCase() + word.slice(1))
        .join('-');
}

function toCamelCase(str?: string) {
    if (!str) return undefined;
    return str
        .toLowerCase()
        .split(' ')
        .map((word, idx) =>
            idx > 0
                ? word[0].toUpperCase() + word.slice(1)
                : word.toLocaleLowerCase()
        )
        .join('');
}

export type Props = TextFieldProps & { label?: string };

/** TextField in the MaterialUI format and theme
 * @category Component
 * @constructor TextField
 * @todo params
 */
export default function TextField(props: Props) {
    const { children, label, name, id, ...passThroughProps } = props;
    return (
        <MUITextField
            variant='outlined'
            fullWidth
            id={id || toSnakeCase(label)}
            name={name || toCamelCase(label)}
            label={label}
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck={false}
            {...passThroughProps}
        >
            {children}
        </MUITextField>
    );
}
