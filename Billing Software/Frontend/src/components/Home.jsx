import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleGetStarted = () => {
        navigate('/billing'); // Navigate to the /billing route
    };

    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="container">
                    <h1 className="logo">Supermarket Billing</h1>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Simplify Your Supermarket Billing with Ease!</h1>
                    <p>Effortlessly manage inventory, generate bills, and track sales in one platform.</p>
                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={handleGetStarted}>
                            Get Started
                        </button>
                        <button className="btn-secondary">Learn More</button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <div className="container">
                    <h2>Key Features</h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <h3>Inventory Management</h3>
                            <p>Easily track and update stock levels.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Fast Billing</h3>
                            <p>Quick and accurate bill generation.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Real-Time Reports</h3>
                            <p>Monitor sales and generate detailed reports.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Secure Access</h3>
                            <p>Protect data with robust security measures.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 Supermarket Billing System. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com">Facebook</a>
                        <a href="https://www.twitter.com">Twitter</a>
                        <a href="https://www.linkedin.com">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
