import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Auth from './Auth';
import LoggedIn from '../components/LoggedIn';
import Nav from '../layout/Nav';
import Footer from '../layout/Footer';
// import TownhallList from '../domains/Townhall/TownhallList';
// import Chat from '../domains/Townhall/TownhallChat';
// import SessionSummary from './SessionSummary';
// import SessionData from './SessionData';
// import Logout from './Logout';
// import Login from './Login';
// import Layout from '../layout';
// import LoggedIn from '../components/LoggedIn';
// import LoginTemp from './LoginTemp';
// import Register from './Register';
// import Timeline from '../components/clipper/TimeLine';
// import Verification from './Verification';
// import RequestPasswordReset from './RequestPasswordReset';
// import UpdatePassword from './UpdatePassword';
import Public from './Public';

export default function Routes() {
    return (
        <Nav>
            <Switch>
                <Route path='/:domain/:title'>
                    <Route path='/auth'>
                        <Auth />
                    </Route>
                    <Route path='/app'>
                        <LoggedIn>
                            <div>Logged in</div>
                        </LoggedIn>
                    </Route>
                    <Route path='/'>
                        <Redirect to='/auth/login' />
                    </Route>
                </Route>
                <Route path='/'>
                    <Public />
                    <Footer />
                </Route>
            </Switch>
        </Nav>
    );
}
