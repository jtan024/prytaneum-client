import React from 'react';
import faker from 'faker';
import { EventEmitter } from 'events';
import {
    makeQuestion,
    makeChatMessage,
    makeTownhall,
    makeUser,
} from 'prytaneum-typings';

import FixtureSocket from 'mock/Fixture.socket';
import AppBar from 'layout/AppBar';
import Page from 'layout/Page';
import UserProvider from 'contexts/User';
import Component from './TownhallLive';
import TownhallProvider from '../Contexts/Townhall';

export default {
    title: 'Domains/Townhall/Townhall Live',
    component: Component,
    // argTypes: {
    //     userType: {
    //         control: {
    //             type: 'select',
    //             options: ['moderator', 'user'],
    //         },
    //     },
    // },
};

function sendQuestions(num: number, emitter: SocketIOClient.Socket) {
    const iterations = num || 1;
    for (let i = 0; i < iterations; i += 1) {
        emitter.emit('question-state', {
            type: 'create-question',
            payload: makeQuestion(),
        });
    }
}

function sendMessages(num: number, emitter: SocketIOClient.Socket) {
    const iterations = num || 1;
    for (let i = 0; i < iterations; i += 1) {
        emitter.emit('chat-message-state', {
            type: 'create-message',
            payload: makeChatMessage(),
        });
    }
}

// interface Props {
//     userType: 'user' | 'moderator';
// }
export function Basic(/* { userType }: Props */) {
    // const id = faker.random.alphaNumeric(5);
    // const townhall = makeTownhall();
    // const user = makeUser();

    // if (userType === 'moderator') {
    //     townhall.settings.moderators.list.push(id);
    //     user._id = id;
    // }
    const emitter = (new EventEmitter() as unknown) as SocketIOClient.Socket;
    return (
        <>
            <AppBar>
                <button
                    type='button'
                    onClick={() => sendQuestions(20, emitter)}
                >
                    Add Questions
                </button>
                <button type='button' onClick={() => sendMessages(20, emitter)}>
                    Add Messages
                </button>
            </AppBar>
            <Page maxWidth='xl'>
                <UserProvider>
                    <TownhallProvider townhallId='123'>
                        <FixtureSocket.Provider value={emitter}>
                            <Component />
                        </FixtureSocket.Provider>
                    </TownhallProvider>
                </UserProvider>
            </Page>
        </>
    );
}

export function AsMod() {
    const id = faker.random.alphaNumeric(5);
    const townhall = makeTownhall();
    const user = makeUser();

    townhall.settings.moderators.list.push({
        email: user.email.address,
        permissions: [],
    });
    user._id = id;
    const emitter = (new EventEmitter() as unknown) as SocketIOClient.Socket;

    return (
        <>
            <AppBar>
                <button
                    type='button'
                    onClick={() => sendQuestions(20, emitter)}
                >
                    Add Message
                </button>
                <button type='button' onClick={() => sendMessages(20, emitter)}>
                    Add Messages
                </button>
            </AppBar>
            <Page maxWidth='xl'>
                <div style={{ height: '100%' }}>
                    <UserProvider value={user}>
                        <TownhallProvider townhallId='123' value={townhall}>
                            <FixtureSocket.Provider value={emitter}>
                                <Component />
                            </FixtureSocket.Provider>
                        </TownhallProvider>
                    </UserProvider>
                </div>
            </Page>
        </>
    );
}

// Basic.args = {
//     userType: 'user',
// };
