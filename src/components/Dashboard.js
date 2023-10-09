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
        <>
        
        <div className={`App ${darkMode ? 'dark' : ''}`} id="dashboard">
            <div id="loading"></div>

            <section className="dashboard" style={{backgroundColor:"black"}}>
                <div className="dash-content">
                    <div className="overview">
                        <div className="title">
                            <i className="uil uil-tachometer-fast-alt"></i>
                            <span className="text" style={{color:"#fff"}}>Dashboard</span>
                        </div>
                        <div className="boxes" >
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
                            <span className="text"style={{color:"#fff"}}>hackweek results</span>
                        </div>
                        <div className="activity-data">
                            <div className="data names" >
                                <span className="data-title" style={{color:"#fff"}}>Name</span>
                                <span className="data-list"  style={{color:"#fff"}}>mohit makda</span>
                                <span className="data-list"  style={{color:"#fff"}}>tushar gupta</span>
                                <span className="data-list"  style={{color:"#fff"}}>shashwat bokhad</span>
                                <span className="data-list"  style={{color:"#fff"}}>sher singh</span>
                                <span className="data-list"  style={{color:"#fff"}}>elon musk</span>
                                <span className="data-list"  style={{color:"#fff"}}>Ganesh Chand</span>
                                <span className="data-list"  style={{color:"#fff"}}>Bikash Chand</span>
                            </div>
                            <div className="data email">
                                <span className="data-title"  style={{color:"#fff"}}>Project Name</span>
                                <span className="data-list"  style={{color:"#fff"}}>EDRP</span>
                                <span className="data-list"  style={{color:"#fff"}}>Calculator</span>
                                <span className="data-list"  style={{color:"#fff"}}>mailbox</span>
                                <span className="data-list"  style={{color:"#fff"}}>fb clone</span>
                                <span className="data-list" style={{color:"#fff"}}>xyz</span>
                                <span className="data-list" style={{color:"#fff"}}>xyz</span>
                                <span className="data-list" style={{color:"#fff"}}>xyz</span>
                            </div>
                            <div className="data joined">
                                <span className="data-title" style={{color:"#fff"}}>Submitted On</span>
                                <span className="data-list" style={{color:"#fff"}}>2022-02-12</span>
                                <span className="data-list" style={{color:"#fff"}}>2022-02-12</span>
                                <span className="data-list" style={{color:"#fff"}}>2022-02-13</span>
                                <span className="data-list" style={{color:"#fff"}}>2022-02-13</span>
                                <span className="data-list" style={{color:"#fff"}}>2022-02-14</span>
                                <span className="data-list" style={{color:"#fff"}}>2022-02-14</span>
                                <span className="data-list" style={{color:"#fff"}}>2022-02-15</span>
                            </div>
                            <div className="data type">
                                <span className="data-title" style={{color:"#fff"}}>Sem</span>
                                <span className="data-list" style={{color:"#fff"}}>5th</span>
                                <span className="data-list" style={{color:"#fff"}}>3rd</span>
                                <span className="data-list" style={{color:"#fff"}}>5th</span>
                                <span className="data-list" style={{color:"#fff"}}>7th</span>
                                <span className="data-list" style={{color:"#fff"}}>1st</span>
                                <span className="data-list" style={{color:"#fff"}}>3rd</span>
                                <span className="data-list" style={{color:"#fff"}}>5th</span>
                            </div>
                            <div className="data status">
                                <span className="data-title" style={{color:"#fff"}}>rank</span>
                                <span className="data-list" style={{color:"#fff"}}>#1</span>
                                <span className="data-list" style={{color:"#fff"}}>#2</span>
                                <span className="data-list" style={{color:"#fff"}}>#3</span>
                                <span className="data-list" style={{color:"#fff"}}>#4</span>
                                <span className="data-list" style={{color:"#fff"}}>#5</span>
                                <span className="data-list" style={{color:"#fff"}}>#6</span>
                                <span className="data-list"style={{color:"#fff"}}>#7</span>
                                <span className="data-list"style={{color:"#fff"}}>#7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};