import React, { useContext, useState, useEffect } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { NavLink } from 'react-router-dom';

// Helper function untuk mendapatkan path router yang sesuai untuk konfigurasi
const getConfigRouterPath = (category) => {
    // Semua item konfigurasi dimulai dengan /configuration/
    // Contoh: configuration-warehouse -> /configuration/warehouse
    const parts = category.split('-');
    if (parts.length > 1 && parts[0] === 'configuration') {
        return `/configuration/${parts.slice(1).join('-')}`;
    }
    return `/configuration/${category}`; // Untuk parent 'configuration' itu sendiri
};

function ConfigurationSidebar() {
    const {
        isSidebarOpen,
        closeSidebar,
        selectCategory,
        currentCategory,
    } = useContext(DashboardContext);

    // State untuk mengelola apakah sub-menu terbuka atau tidak (jika ada sub-sub-menu di config)
    const [openConfigSubMenus, setOpenConfigSubMenus] = useState({});

    const toggleConfigChildren = (category) => {
        setOpenConfigSubMenus(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
        // Jika parent di-klik, dan itu adalah halaman utama configuration, select category tersebut
        if (category === 'configuration') {
            selectCategory('configuration');
        }
    };

    // Saat komponen dimuat atau isSidebarOpen berubah, sesuaikan overflow body untuk mobile
    useEffect(() => {
        if (window.innerWidth < 768) {
            document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
        } else {
            document.body.style.overflow = 'auto';
        }

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeSidebar();
                document.body.style.overflow = 'auto';
            } else {
                document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSidebarOpen, closeSidebar]);

    const getSidebarItemClasses = (categoryToCheck) => {
        const isActive = currentCategory === categoryToCheck;
        return `sidebar-item p-3 rounded-xl cursor-pointer hover:bg-wise-light-gray transition-all-smooth flex items-center space-x-3 active-press hover-scale ${isActive ? 'active-sidebar-item bg-wise-light-gray' : ''}`;
    };

    const getSidebarChildClasses = (categoryToCheck) => {
        const isActive = currentCategory === categoryToCheck;
        return `sidebar-child p-2.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-all-smooth ${isActive ? 'bg-gray-100 font-medium text-wise-dark-gray border-l-2 border-wise-primary' : 'text-wise-gray'}`;
    };

    return (
        <>
            {isSidebarOpen && window.innerWidth < 768 && (
                <div
                    id="sidebar-overlay"
                    className="fixed inset-0 backdrop-blur-overlay z-25 transition-all-smooth block md:hidden"
                    onClick={closeSidebar}
                    aria-label="Tutup sidebar"
                ></div>
            )}

            <aside
                id="sidebar"
                className={`w-64 bg-white/95 backdrop-blur-glass border-r border-wise-border h-screen overflow-y-auto fixed left-0 top-0 z-30 shadow-lg transition-transform-smooth ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
            >
                <div className="p-4 pt-24 md:pt-6">
                    <div className="space-y-2">
                        {/* Configuration Overview Button */}
                        <NavLink
                            to="/configuration"
                            className={({ isActive }) =>
                                getSidebarItemClasses('configuration') + (isActive ? ' active-sidebar-item bg-wise-light-gray' : '')
                            }
                            onClick={() => selectCategory('configuration')}
                            tabIndex="0"
                            role="button"
                            aria-label="Pilih kategori Konfigurasi"
                        >
                            <div className="w-6 h-6 flex items-center justify-center">
                                <i className="fas fa-wrench text-wise-primary"></i> {/* Ikon sesuai konteks konfigurasi */}
                            </div>
                            <span className="text-wise-dark-gray font-semibold text-sm">Overview Konfigurasi</span>
                        </NavLink>

                        {/* Configuration Sub-menus (yang sebelumnya di-nest di sidebar utama) */}
                        {/* Configuration */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-configuration-main" /* Beri ID baru agar tidak konflik dengan Header Link */
                                className={getSidebarItemClasses('configuration')} /* Ini bisa jadi parent kalau ada sub-sub-menu */
                                onClick={() => toggleConfigChildren('configuration')} /* Mungkin tidak perlu toggle kalau semua langsung link */
                                tabIndex="0"
                                role="button"
                                aria-expanded={openConfigSubMenus['configuration'] || false}
                                aria-controls="configuration-children"
                                aria-label="Toggle sub-menu Konfigurasi"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-cogs text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Konfigurasi Modul</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openConfigSubMenus['configuration'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="configuration-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openConfigSubMenus['configuration'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-configuration-main"
                            >
                                <NavLink
                                    to={getConfigRouterPath('configuration-warehouse')}
                                    className={({ isActive }) => getSidebarChildClasses('configuration-warehouse')}
                                    onClick={() => selectCategory('configuration-warehouse')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Gudang"
                                ><span className="hover:text-wise-dark-gray transition-colors">Warehouse</span></NavLink>
                                <NavLink
                                    to={getConfigRouterPath('configuration-zone')}
                                    className={({ isActive }) => getSidebarChildClasses('configuration-zone')}
                                    onClick={() => selectCategory('configuration-zone')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Zona"
                                ><span className="hover:text-wise-dark-gray transition-colors">Zone</span></NavLink>
                                <NavLink
                                    to={getConfigRouterPath('configuration-location-type')}
                                    className={({ isActive }) => getSidebarChildClasses('configuration-location-type')}
                                    onClick={() => selectCategory('configuration-location-type')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Tipe Lokasi"
                                ><span className="hover:text-wise-dark-gray transition-colors">Location Type</span></NavLink>
                                <NavLink
                                    to={getConfigRouterPath('locating-strategies')}
                                    className={({ isActive }) => getSidebarChildClasses('locating-strategies')}
                                    onClick={() => selectCategory('locating-strategies')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Strategi Lokasi"
                                ><span className="hover:text-wise-dark-gray transition-colors">Locating Strategies</span></NavLink>
                                <NavLink
                                    to={getConfigRouterPath('locating-rule')}
                                    className={({ isActive }) => getSidebarChildClasses('locating-rule')}
                                    onClick={() => selectCategory('locating-rule')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Aturan Lokasi"
                                ><span className="hover:text-wise-dark-gray transition-colors">Locating Rule</span></NavLink>
                                <NavLink
                                    to={getConfigRouterPath('security-group')}
                                    className={({ isActive }) => getSidebarChildClasses('security-group')}
                                    onClick={() => selectCategory('security-group')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Grup Keamanan"
                                ><span className="hover:text-wise-dark-gray transition-colors">Security Group</span></NavLink>
                                <NavLink
                                    to={getConfigRouterPath('security-permission')}
                                    className={({ isActive }) => getSidebarChildClasses('security-permission')}
                                    onClick={() => selectCategory('security-permission')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Izin Keamanan"
                                ><span className="hover:text-wise-dark-gray transition-colors">Security Permission</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default ConfigurationSidebar;