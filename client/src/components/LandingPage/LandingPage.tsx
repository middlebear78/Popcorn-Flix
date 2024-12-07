import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate("/home"); // or wherever you want to direct users
    };

    return (
        <div className={styles.landingContainer}>
            <div className={styles.content}>
                <img className={styles.logo} src="/images/logo.jpg" alt="popcorn-flix" />
                <h2 className={styles.subtitle}>Let's pop and flix this! Find your next movie here.</h2>
                <button className={styles.enterButton} onClick={handleEnter}>
                    Enter PopcornFlix
                </button>
            </div>
            <div className={styles.footer}>
                <p>🍿 Get ready for an amazing movie experience 🎬</p>
            </div>
        </div>
    );
};

export default LandingPage;
