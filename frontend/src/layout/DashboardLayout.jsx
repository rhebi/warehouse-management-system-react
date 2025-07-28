import React, { useContext, useEffect } from 'react';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import CustomModal from '../components/Layout/CustomModal';
import SearchOverlay from '../components/Layout/SearchOverlay';
import { DashboardContext } from '../context/DashboardContext';

function DashboardLayout({ children }) {
    const { isSidebarOpen } = useContext(DashboardContext);

    // Ini akan di-handle lebih baik di komponen Header atau di sini,
    // tapi kalau mau tetap pakai document.getElementById untuk initial display:
    useEffect(() => {
        const storedUser = sessionStorage.getItem('currentUser');
        if (storedUser) {
            const usernameDisplay = document.getElementById('username-display');
            if (usernameDisplay) {
                usernameDisplay.textContent = storedUser;
            }
        }
    }, []);

    return (
        <div className="font-inter bg-wise-light-gray flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <div className={`flex flex-1 pt-20 md:pt-24 transition-all-smooth ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
                <Sidebar />
                <main className={`flex-1 p-4 md:p-6 transition-all-smooth`}>
                    {children}
                </main>
            </div>
            <CustomModal />
            <SearchOverlay />
        </div>
    );
}

export default DashboardLayout;