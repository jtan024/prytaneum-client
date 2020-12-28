import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import type { Speaker } from 'prytaneum-typings';

import Form from 'components/Form';
import FormContent from 'components/FormContent';
import FormActions from 'components/FormActions';
import TextField from 'components/TextField';
import useForm from 'hooks/useForm';

interface Props {
    value?: Speaker;
    onCancel?: () => void;
    onSubmit: (form: Speaker) => void;
}

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
}));

const initialState: Speaker = {
    name: '',
    title: '',
    picture: '',
    description: '',
};
export default function SpeakerForm({
    value: speaker,
    onCancel,
    onSubmit,
}: Props) {
    const [state, errors, handleSubmit, handleChange] = useForm(
        speaker || initialState
    );
    const classes = useStyles();
    return (
        <Form onSubmit={handleSubmit(() => onSubmit(state))}>
            <FormContent className={classes.root}>
                <TextField
                    error={Boolean(errors?.name)}
                    helperText={errors?.name}
                    required
                    label='Speaker Name'
                    value={state.name}
                    onChange={handleChange('name')}
                />
                <TextField
                    error={Boolean(errors?.title)}
                    helperText={errors?.title}
                    required
                    label='Speaker Title'
                    value={state.title}
                    onChange={handleChange('title')}
                />
                <TextField
                    error={Boolean(errors?.description)}
                    helperText={errors?.description}
                    required
                    label='Speaker Description'
                    value={state.description}
                    onChange={handleChange('description')}
                />
                <TextField
                    error={Boolean(errors?.picture)}
                    helperText={errors?.picture}
                    required
                    label='Picture URL'
                    value={state.picture}
                    onChange={handleChange('picture')}
                />
            </FormContent>
            <FormActions disableGrow gridProps={{ justify: 'flex-end' }}>
                {onCancel ? <Button onClick={onCancel}>Cancel</Button> : null}
                <Button variant='contained' color='primary' type='submit'>
                    {speaker ? 'Update Speaker' : 'Add Speaker'}
                </Button>
            </FormActions>
        </Form>
    );
}

SpeakerForm.defaultProps = {
    value: undefined,
    onCancel: undefined,
};
