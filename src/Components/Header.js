import React from "react";
import github_logo from "../assets/logos/github-logo.png";
import app_logo from "../assets/logos/app_logo.webp";
export default function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <a href='#'>
                    <img
                        className='rounded-logo'
                        alt='App Logo'
                        height={60}
                        src={app_logo}
                        href='#'
                    />
                </a>
            </div>
            <div className='logo'>
                <a
                    target='_blank'
                    href='https://github.com/drkspark/Music-App'
                >
                    <img
                        height='50'
                        src={github_logo}
                    />
                </a>
            </div>
        </div>
    );
}
