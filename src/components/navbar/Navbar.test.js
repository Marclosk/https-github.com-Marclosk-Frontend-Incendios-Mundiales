import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Layout from '../../Layout';

test('renders Navbar component within Layout', () => {
    render(
    <Router>
        <Layout />
    </Router>
    );
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Tips/i)).toBeInTheDocument();
    expect(screen.getByText(/Alerts/i)).toBeInTheDocument();
});
