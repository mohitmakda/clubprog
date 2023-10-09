import React, { useState, useEffect } from 'react';
import '../Dashboard.css'; // Import your CSS file here

export const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Load saved mode and status from localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        const savedStatus = localStorage.getItem('status');

        if (savedMode && savedMode === 'dark') {
            setDarkMode(true);
        }

        if (savedStatus && savedStatus === 'close') {
            setSidebarOpen(false);
        }
    }, []);

    // Handle toggle for dark mode
    const handleModeToggle = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('mode', darkMode ? 'light' : 'dark');
    };

    // Handle toggle for sidebar
    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
        localStorage.setItem('status', sidebarOpen ? 'open' : 'close');
    };

    return (
        <div className={`App ${darkMode ? 'dark' : ''}`}>
            <div id="loading"></div>

            <section className="dashboard">
                <div className="dash-content">
                    <div className="overview">
                        <div className="title">
                            <i className="uil uil-tachometer-fast-alt"></i>
                            <span className="text">Dashboard</span>
                        </div>
                        <div className="boxes">
                            <div className="box box1">
                                <i className="uil uil-thumbs-up"></i>
                                <span className="text">Total hackweeks</span>
                                <span className="number">50</span>
                            </div>
                            <div className="box box2">
                                <i className="uil uil-comments"></i>
                                <span className="text">Total projects submitted</span>
                                <span className="number">2000</span>
                            </div>
                            <div className="box box3">
                                <i className="uil uil-share"></i>
                                <span className="text">Active participants</span>
                                <span className="number">106</span>
                            </div>
                        </div>
                    </div>
                    <div className="activity">
                        <div className="title">
                            <i className="uil uil-clock-three"></i>
                            <span className="text">hackweek results</span>
                        </div>
                        <div className="activity-data">
                            <div className="data names">
                                <span className="data-title">Name</span>
                                <span className="data-list">mohit makda</span>
                                <span className="data-list">tushar gupta</span>
                                <span className="data-list">shashwat bokhad</span>
                                <span className="data-list">sher singh</span>
                                <span className="data-list">elon musk</span>
                                <span className="data-list">Ganesh Chand</span>
                                <span className="data-list">Bikash Chand</span>
                            </div>
                            <div className="data email">
                                <span className="data-title">Project Name</span>
                                <span className="data-list">EDRP</span>
                                <span className="data-list">Calculator</span>
                                <span className="data-list">mailbox</span>
                                <span className="data-list">fb clone</span>
                                <span className="data-list">xyz</span>
                                <span className="data-list">xyz</span>
                                <span className="data-list">xyz</span>
                            </div>
                            <div className="data joined">
                                <span className="data-title">Submitted On</span>
                                <span className="data-list">2022-02-12</span>
                                <span className="data-list">2022-02-12</span>
                                <span className="data-list">2022-02-13</span>
                                <span className="data-list">2022-02-13</span>
                                <span className="data-list">2022-02-14</span>
                                <span className="data-list">2022-02-14</span>
                                <span className="data-list">2022-02-15</span>
                            </div>
                            <div className="data type">
                                <span className="data-title">Sem</span>
                                <span className="data-list">5th</span>
                                <span className="data-list">3rd</span>
                                <span className="data-list">5th</span>
                                <span className="data-list">7th</span>
                                <span className="data-list">1st</span>
                                <span className="data-list">3rd</span>
                                <span className="data-list">5th</span>
                            </div>
                            <div className="data status">
                                <span className="data-title">rank</span>
                                <span className="data-list">#1</span>
                                <span className="data-list">#2</span>
                                <span className="data-list">#3</span>
                                <span className="data-list">#4</span>
                                <span className="data-list">#5</span>
                                <span className="data-list">#6</span>
                                <span className="data-list">#7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};