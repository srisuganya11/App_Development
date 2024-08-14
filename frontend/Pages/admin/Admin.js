import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

import Sidebar from '../../Components/UI/Sidebar';
import Header from '../../Components/UI/Header';
import '../../Assets/CSS/admin.css';

function Admin() {
    

    const data = [
        {
            name: 'Construction',
            23: 4000,
            24: 2400,
            amt: 2400,
        },
        {
            name: 'Marine',
            23: 3000,
            24: 1398,
            amt: 2210,
        },
        {
            name: 'Automotive',
            23: 2000,
            24: 9800,
            amt: 2290,
        },
        {
            name: 'Textile',
            23: 2780,
            24: 3908,
            amt: 2000,
        },
        {
            name: 'Furniture',
            23: 1890,
            24: 4800,
            amt: 2181,
        },
        {
            name: 'General',
            23: 1890,
            24: 4800,
            amt: 2181,
        },
    ];

    return (
        <div className='grid-container'>
            <Header />

            <main className='main-container'>
                <div className='main-title'>
            <Sidebar  />
                    <h3>DASHBOARD</h3>
                </div>

                <div className='main-cards'>
                    <div className='card1'>
                        <div className='card1-inner'>
                            <h3>PRODUCTS</h3>
                            <BsFillArchiveFill className='card_icon' />
                        </div>
                        <h1>3000</h1>
                    </div>
                    <div className='card1'>
                        <div className='card1-inner'>
                            <h3>CATEGORIES</h3>
                            <BsFillGrid3X3GapFill className='card_icon' />
                        </div>
                        <h1>12</h1>
                    </div>
                    <div className='card1'>
                        <div className='card1-inner'>
                            <h3>CUSTOMERS</h3>
                            <BsPeopleFill className='card_icon' />
                        </div>
                        <h1>19233</h1>
                    </div>
                    <div className='card1'>
                        <div className='card1-inner'>
                            <h3>ALERTS</h3>
                            <BsFillBellFill className='card_icon' />
                        </div>
                        <h1>42</h1>
                    </div>
                </div>

                <div className='charts'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="23" fill="#8884d8" />
                            <Bar dataKey="24" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="23" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="24" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </main>
        </div>
    );
}

export default Admin;
