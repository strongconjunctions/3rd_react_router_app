import React from 'react';
import { Link } from 'react-router';

import Footer from '../components/Footer';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/widgets">Widgets</Link></li>
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                </nav>
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}
