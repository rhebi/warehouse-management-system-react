import React, { useContext, useEffect } from 'react';
import Header from '../components/Header'; // Header mungkin sama
import ConfigurationSidebar from '../components/ConfigurationSidebar'; // Sidebar khusus konfigurasi
import CustomModal from '../components/CustomModal';
import SearchOverlay from '../components/SearchOverlay';
import { DashboardContext } from '../context/DashboardContext';

function ConfigurationLayout({ children }) {
    const { isSidebarOpen, selectCategory } = useContext(DashboardContext);

    // Reset currentCategory ke default config saat layout ini dimuat
    useEffect(() => {
        selectCategory('configuration'); // Atau 'configuration-warehouse' jika itu defaultnya
    }, [selectCategory]);

    return (
        <div className="font-inter bg-wise-light-gray flex flex-col min-h-screen overflow-x-hidden">
            <Header /> {/* Gunakan Header yang sama */}
            <div className={`flex flex-1 pt-20 md:pt-24 transition-all-smooth ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
                <ConfigurationSidebar /> {/* Gunakan sidebar khusus konfigurasi */}
                <main className={`flex-1 p-4 md:p-6 transition-all-smooth`}>
                    {children}
                </main>
            </div>
            <CustomModal />
            <SearchOverlay />
        </div>
    );
}

export default ConfigurationLayout;