import React, { useContext, useState, useEffect } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { NavLink } from 'react-router-dom';

// Helper function untuk mendapatkan path router yang sesuai
const getRouterPath = (category) => {
    if (category === 'dashboard') {
        return '/dashboard';
    }
    const parts = category.split('-');
    if (parts.length > 1) {
        const parent = parts[0];
        const child = parts.slice(1).join('-');
        return `/dashboard/${parent}/${child}`; // Contoh: /dashboard/yard/vehicles
    }
    return `/dashboard/${category}`; // Contoh: /dashboard/yard-management
};


function Sidebar() {
    const {
        isSidebarOpen,
        closeSidebar,
        selectCategory,
        currentCategory,
        contentData,
    } = useContext(DashboardContext);

    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleChildren = (category) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
        if (contentData[category] && contentData[category].full) {
             selectCategory(category);
        }
    };

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

    const showPreview = (id, event) => {
        // console.log(`Preview for: ${id}`, event);
    };

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
                        {/* Dashboard Button (Always visible) */}
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                getSidebarItemClasses('dashboard') + (isActive ? ' active-sidebar-item bg-wise-light-gray' : '')
                            }
                            onClick={() => selectCategory('dashboard')}
                            tabIndex="0"
                            role="button"
                            aria-label="Pilih kategori Dashboard"
                        >
                            <div className="w-6 h-6 flex items-center justify-center">
                                <i className="fas fa-tachometer-alt text-wise-primary"></i>
                            </div>
                            <span className="text-wise-dark-gray font-semibold text-sm">Dashboard</span>
                        </NavLink>

                        {/* Sidebar Items for Dashboard Features */}
                        {/* Yard Management */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-yard-management"
                                className={getSidebarItemClasses('yard-management')}
                                onClick={() => toggleChildren('yard-management')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['yard-management'] || false}
                                aria-controls="yard-management-children"
                                aria-label="Toggle sub-menu Yard Management"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-warehouse text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Yard Management</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['yard-management'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="yard-management-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['yard-management'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-yard-management"
                            >
                                <NavLink
                                    to="/dashboard/yard/vehicles"
                                    className={({ isActive }) => getSidebarChildClasses('yard-vehicles') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('yard-vehicles')}
                                    onMouseEnter={(e) => showPreview('yard-vehicles', e)}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Kendaraan"
                                ><span className="hover:text-wise-dark-gray transition-colors">Vehicles</span></NavLink>
                                <NavLink
                                    to="/dashboard/yard/equipment"
                                    className={({ isActive }) => getSidebarChildClasses('yard-equipment') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('yard-equipment')}
                                    onMouseEnter={(e) => showPreview('yard-equipment', e)}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Peralatan"
                                ><span className="hover:text-wise-dark-gray transition-colors">Equipment</span></NavLink>
                                <NavLink
                                    to="/dashboard/yard/personnel"
                                    className={({ isActive }) => getSidebarChildClasses('yard-personnel') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('yard-personnel')}
                                    onMouseEnter={(e) => showPreview('yard-personnel', e)}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Personil"
                                ><span className="hover:text-wise-dark-gray transition-colors">Personnel</span></NavLink>
                            </div>
                        </div>

                        {/* Receiving */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-receiving"
                                className={getSidebarItemClasses('receiving')}
                                onClick={() => toggleChildren('receiving')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['receiving'] || false}
                                aria-controls="receiving-children"
                                aria-label="Toggle sub-menu Penerimaan"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-truck-loading text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Receiving</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['receiving'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="receiving-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['receiving'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-receiving"
                            >
                                <NavLink to="/dashboard/receiving/open-box-balance-viewer" className={({isActive}) => getSidebarChildClasses('receiving-open-box-balance-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-open-box-balance-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Open/Box Balance Viewer</span></NavLink>
                                <NavLink to="/dashboard/receiving/po-quick-find" className={({isActive}) => getSidebarChildClasses('receiving-po-quick-find') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-po-quick-find')}><span className="hover:text-wise-dark-gray transition-colors">Purchase order quick find</span></NavLink>
                                <NavLink to="/dashboard/receiving/receipt-closet-supplier" className={({isActive}) => getSidebarChildClasses('receiving-receipt-closet-supplier') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-receipt-closet-supplier')}><span className="hover:text-wise-dark-gray transition-colors">Receipt Closet By Supplier</span></NavLink>
                                <NavLink to="/dashboard/receiving/receipt-container-viewer" className={({isActive}) => getSidebarChildClasses('receiving-receipt-container-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-receipt-container-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Receipt Container Viewer</span></NavLink>
                                <NavLink to="/dashboard/receiving/receipt-explorer" className={({isActive}) => getSidebarChildClasses('receiving-receipt-explorer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-receipt-explorer')}><span className="hover:text-wise-dark-gray transition-colors">Receipt Explorer</span></NavLink>
                                <NavLink to="/dashboard/receiving/receipt-monitoring-close" className={({isActive}) => getSidebarChildClasses('receiving-receipt-monitoring-close') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-receipt-monitoring-close')}><span className="hover:text-wise-dark-gray transition-colors">Receipt Monitoring/Close Viewer</span></NavLink>
                                <NavLink to="/dashboard/receiving/receipt-no-close" className={({isActive}) => getSidebarChildClasses('receiving-receipt-no-close') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-receipt-no-close')}><span className="hover:text-wise-dark-gray transition-colors">Receipt No/Close Viewer</span></NavLink>
                                <NavLink to="/dashboard/receiving/receipt-open-closed" className={({isActive}) => getSidebarChildClasses('receiving-receipt-open-closed') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-receipt-open-closed')}><span className="hover:text-wise-dark-gray transition-colors">Receipt Open And Closed Viewer</span></NavLink>
                                <NavLink to="/dashboard/receiving/receipt-shipment-closed" className={({isActive}) => getSidebarChildClasses('receiving-receipt-shipment-closed') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-receipt-shipment-closed')}><span className="hover:text-wise-dark-gray transition-colors">Receipt Shipment Closed Viewer</span></NavLink>
                                <NavLink to="/dashboard/receiving/performance-viewer" className={({isActive}) => getSidebarChildClasses('receiving-performance-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-performance-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Receiving Performance Viewer</span></NavLink>
                                <NavLink to="/dashboard/receiving/workbench" className={({isActive}) => getSidebarChildClasses('receiving-workbench') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-workbench')}><span className="hover:text-wise-dark-gray transition-colors">Receiving workbench</span></NavLink>
                                <NavLink to="/dashboard/receiving/shipment-closed-viewer" className={({isActive}) => getSidebarChildClasses('receiving-shipment-closed-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-shipment-closed-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Shipment Closed Viewer</span></NavLink>
                                <NavLink to="/dashboard/receiving/virtual-viewer" className={({isActive}) => getSidebarChildClasses('receiving-virtual-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('receiving-virtual-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Virtual Receiving Viewer</span></NavLink>
                            </div>
                        </div>

                        {/* Order Planning */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-order"
                                className={getSidebarItemClasses('order')}
                                onClick={() => toggleChildren('order')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['order'] || false}
                                aria-controls="order-children"
                                aria-label="Toggle sub-menu Perencanaan Pesanan"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-clipboard-list text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Order Planning</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['order'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="order-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['order'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-order"
                            >
                                <NavLink to="/dashboard/order/consolidated-shipment-history" className={({isActive}) => getSidebarChildClasses('order-planning-consolidated-shipment-history') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('order-planning-consolidated-shipment-history')}><span className="hover:text-wise-dark-gray transition-colors">Consolidated Shipment History</span></NavLink>
                                <NavLink to="/dashboard/order/entry" className={({isActive}) => getSidebarChildClasses('order-planning-order-entry') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('order-planning-order-entry')}><span className="hover:text-wise-dark-gray transition-colors">Order entry</span></NavLink>
                                <NavLink to="/dashboard/order/wave-explorer" className={({isActive}) => getSidebarChildClasses('order-planning-wave-explorer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('order-planning-wave-explorer')}><span className="hover:text-wise-dark-gray transition-colors">Wave explorer</span></NavLink>
                                <NavLink to="/dashboard/order/wave-quick-find" className={({isActive}) => getSidebarChildClasses('order-planning-wave-quick-find') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('order-planning-wave-quick-find')}><span className="hover:text-wise-dark-gray transition-colors">Wave quick find</span></NavLink>
                            </div>
                        </div>

                        {/* Shipping */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-shipping"
                                className={getSidebarItemClasses('shipping')}
                                onClick={() => toggleChildren('shipping')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['shipping'] || false}
                                aria-controls="shipping-children"
                                aria-label="Toggle sub-menu Pengiriman"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-shipping-fast text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Shipping</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['shipping'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="shipping-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['shipping'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-shipping"
                            >
                                <NavLink to="/dashboard/shipping/close-container" className={({isActive}) => getSidebarChildClasses('shipping-close-container') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-close-container')}><span className="hover:text-wise-dark-gray transition-colors">Close container</span></NavLink>
                                <NavLink to="/dashboard/shipping/consolidated-container-location-viewer" className={({isActive}) => getSidebarChildClasses('shipping-consolidated-container-location-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-consolidated-container-location-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Consolidated container location viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/containers-delivered" className={({isActive}) => getSidebarChildClasses('shipping-containers-delivered') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-containers-delivered')}><span className="hover:text-wise-dark-gray transition-colors">Containers Delivered</span></NavLink>
                                <NavLink to="/dashboard/shipping/outbound-surplus-viewer" className={({isActive}) => getSidebarChildClasses('shipping-outbound-surplus-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-outbound-surplus-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Outbound Surplus Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/dock-scheduler" className={({isActive}) => getSidebarChildClasses('shipping-dock-scheduler') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-dock-scheduler')}><span className="hover:text-wise-dark-gray transition-colors">Dock scheduler</span></NavLink>
                                <NavLink to="/dashboard/shipping/load-close-viewer" className={({isActive}) => getSidebarChildClasses('shipping-load-close-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-load-close-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Load Close Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/load-count-viewer" className={({isActive}) => getSidebarChildClasses('shipping-load-count-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-load-count-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Load Count Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/load-explorer" className={({isActive}) => getSidebarChildClasses('shipping-load-explorer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-load-explorer')}><span className="hover:text-wise-dark-gray transition-colors">Load Explorer</span></NavLink>
                                <NavLink to="/dashboard/shipping/maxi-high-container-viewer" className={({isActive}) => getSidebarChildClasses('shipping-maxi-high-container-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-maxi-high-container-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Maxi High Container Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/multiple-order-pallet-close" className={({isActive}) => getSidebarChildClasses('shipping-multiple-order-pallet-close') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-multiple-order-pallet-close')}><span className="hover:text-wise-dark-gray transition-colors">Multiple order pallet close</span></NavLink>
                                <NavLink to="/dashboard/shipping/oos-viewer" className={({isActive}) => getSidebarChildClasses('shipping-oos-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-oos-viewer')}><span className="hover:text-wise-dark-gray transition-colors">OOS Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/operator-surplus-viewer" className={({isActive}) => getSidebarChildClasses('shipping-operator-surplus-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-operator-surplus-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Operator Surplus Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/pallet-close" className={({isActive}) => getSidebarChildClasses('shipping-pallet-close') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-pallet-close')}><span className="hover:text-wise-dark-gray transition-colors">Pallet Close</span></NavLink>
                                <NavLink to="/dashboard/shipping/pallet-in-staging-viewer" className={({isActive}) => getSidebarChildClasses('shipping-pallet-in-staging-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-pallet-in-staging-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Pallet In Staging Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/put-to-store-viewer" className={({isActive}) => getSidebarChildClasses('shipping-put-to-store-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-put-to-store-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Put to store Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/qc-workbench" className={({isActive}) => getSidebarChildClasses('shipping-qc-workbench') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-qc-workbench')}><span className="hover:text-wise-dark-gray transition-colors">QC workbench</span></NavLink>
                                <NavLink to="/dashboard/shipping/shipment-detail-allocation-rejection" className={({isActive}) => getSidebarChildClasses('shipping-shipment-detail-allocation-rejection') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-shipment-detail-allocation-rejection')}><span className="hover:text-wise-dark-gray transition-colors">Shipment detail allocation rejection viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/shipment-explorer" className={({isActive}) => getSidebarChildClasses('shipping-shipment-explorer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-shipment-explorer')}><span className="hover:text-wise-dark-gray transition-colors">Shipment explorer</span></NavLink>
                                <NavLink to="/dashboard/shipping/shipment-quick-find" className={({isActive}) => getSidebarChildClasses('shipping-shipment-quick-find') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-shipment-quick-find')}><span className="hover:text-wise-dark-gray transition-colors">Shipment quick find</span></NavLink>
                                <NavLink to="/dashboard/shipping/shipment-start-pick-viewer" className={({isActive}) => getSidebarChildClasses('shipping-shipment-start-pick-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-shipment-start-pick-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Shipment Start/Pick Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/shipment-stop-tuk-viewer" className={({isActive}) => getSidebarChildClasses('shipping-shipment-stop-tuk-viewer') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-shipment-stop-tuk-viewer')}><span className="hover:text-wise-dark-gray transition-colors">Shipment Stop/Tuk Viewer</span></NavLink>
                                <NavLink to="/dashboard/shipping/container-identification" className={({isActive}) => getSidebarChildClasses('shipping-container-identification') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-container-identification')}><span className="hover:text-wise-dark-gray transition-colors">Shipping container identification</span></NavLink>
                                <NavLink to="/dashboard/shipping/container-workbench" className={({isActive}) => getSidebarChildClasses('shipping-container-workbench') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-container-workbench')}><span className="hover:text-wise-dark-gray transition-colors">Shipping container workbench</span></NavLink>
                                <NavLink to="/dashboard/shipping/sit-workbench" className={({isActive}) => getSidebarChildClasses('shipping-sit-workbench') + (isActive ? ' border-l-2 border-wise-primary' : '')} onClick={() => selectCategory('shipping-sit-workbench')}><span className="hover:text-wise-dark-gray transition-colors">SIT workbench</span></NavLink>
                            </div>
                        </div>

                        {/* Work */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-work"
                                className={getSidebarItemClasses('work')}
                                onClick={() => toggleChildren('work')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['work'] || false}
                                aria-controls="work-children"
                                aria-label="Toggle sub-menu Pekerjaan"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-tasks text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Work</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['work'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="work-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['work'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-work"
                            >
                                <NavLink
                                    to="/dashboard/work/tasks"
                                    className={({ isActive }) => getSidebarChildClasses('work-tasks') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('work-tasks')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Tugas"
                                ><span className="hover:text-wise-dark-gray transition-colors">Tasks</span></NavLink>
                                <NavLink
                                    to="/dashboard/work/schedule"
                                    className={({ isActive }) => getSidebarChildClasses('work-schedule') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('work-schedule')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Jadwal"
                                ><span className="hover:text-wise-dark-gray transition-colors">Schedule</span></NavLink>
                                <NavLink
                                    to="/dashboard/work/teams"
                                    className={({ isActive }) => getSidebarChildClasses('work-teams') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('work-teams')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Tim"
                                ><span className="hover:text-wise-dark-gray transition-colors">Teams</span></NavLink>
                            </div>
                        </div>

                        {/* Cross Application */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-cross-application"
                                className={getSidebarItemClasses('cross-application')}
                                onClick={() => toggleChildren('cross-application')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['cross-application'] || false}
                                aria-controls="cross-application-children"
                                aria-label="Toggle sub-menu Lintas Aplikasi"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-exchange-alt text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Cross Application</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['cross-application'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="cross-application-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['cross-application'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-cross-application"
                            >
                                <NavLink
                                    to="/dashboard/cross-application/integrations"
                                    className={({ isActive }) => getSidebarChildClasses('cross-app-integrations') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('cross-app-integrations')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Integrasi"
                                ><span className="hover:text-wise-dark-gray transition-colors">Integrations</span></NavLink>
                                <NavLink
                                    to="/dashboard/cross-application/data-sync"
                                    className={({ isActive }) => getSidebarChildClasses('cross-app-data-sync') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('cross-app-data-sync')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Sinkronisasi Data"
                                ><span className="hover:text-wise-dark-gray transition-colors">Data Sync</span></NavLink>
                                <NavLink
                                    to="/dashboard/cross-application/api"
                                    className={({ isActive }) => getSidebarChildClasses('cross-app-api') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('cross-app-api')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Manajemen API"
                                ><span className="hover:text-wise-dark-gray transition-colors">API Management</span></NavLink>
                            </div>
                        </div>

                        {/* Inventory */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-inventory"
                                className={getSidebarItemClasses('inventory')}
                                onClick={() => toggleChildren('inventory')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['inventory'] || false}
                                aria-controls="inventory-children"
                                aria-label="Toggle sub-menu Inventaris"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-boxes text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Inventory</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['inventory'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="inventory-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['inventory'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-inventory"
                            >
                                <NavLink
                                    to="/dashboard/inventory/yard"
                                    className={({ isActive }) => getSidebarChildClasses('inventory-yard') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('inventory-yard')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Yard"
                                ><span className="hover:text-wise-dark-gray transition-colors">Yard</span></NavLink>
                                <NavLink
                                    to="/dashboard/inventory/warehouse"
                                    className={({ isActive }) => getSidebarChildClasses('inventory-warehouse') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('inventory-warehouse')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Gudang"
                                ><span className="hover:text-wise-dark-gray transition-colors">Warehouse</span></NavLink>
                                <NavLink
                                    to="/dashboard/inventory/storage"
                                    className={({ isActive }) => getSidebarChildClasses('inventory-storage') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('inventory-storage')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Penyimpanan"
                                ><span className="hover:text-wise-dark-gray transition-colors">Storage</span></NavLink>
                            </div>
                        </div>

                        {/* Performance Management */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-performance"
                                className={getSidebarItemClasses('performance')}
                                onClick={() => toggleChildren('performance')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['performance'] || false}
                                aria-controls="performance-children"
                                aria-label="Toggle sub-menu Manajemen Kinerja"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-chart-line text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Performance Management</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['performance'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="performance-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['performance'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-performance"
                            >
                                <NavLink
                                    to="/dashboard/performance/kpis"
                                    className={({ isActive }) => getSidebarChildClasses('performance-kpis') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('performance-kpis')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih KPI"
                                ><span className="hover:text-wise-dark-gray transition-colors">KPIs</span></NavLink>
                                <NavLink
                                    to="/dashboard/performance/analytics"
                                    className={({ isActive }) => getSidebarChildClasses('performance-analytics') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('performance-analytics')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Analitik"
                                ><span className="hover:text-wise-dark-gray transition-colors">Analytics</span></NavLink>
                                <NavLink
                                    to="/dashboard/performance/goals"
                                    className={({ isActive }) => getSidebarChildClasses('performance-goals') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('performance-goals')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Tujuan"
                                ><span className="hover:text-wise-dark-gray transition-colors">Goals</span></NavLink>
                            </div>
                        </div>

                        {/* System Management */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-system-management"
                                className={getSidebarItemClasses('system-management')}
                                onClick={() => toggleChildren('system-management')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['system-management'] || false}
                                aria-controls="system-management-children"
                                aria-label="Toggle sub-menu Manajemen Sistem"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-server text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">System Management</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['system-management'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="system-management-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['system-management'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-system-management"
                            >
                                <NavLink
                                    to="/dashboard/system-management/users"
                                    className={({ isActive }) => getSidebarChildClasses('system-management-users') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('system-management-users')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Pengguna"
                                ><span className="hover:text-wise-dark-gray transition-colors">Users</span></NavLink>
                                <NavLink
                                    to="/dashboard/system-management/logs"
                                    className={({ isActive }) => getSidebarChildClasses('system-management-logs') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('system-management-logs')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Log"
                                ><span className="hover:text-wise-dark-gray transition-colors">Logs</span></NavLink>
                                <NavLink
                                    to="/dashboard/system-management/backup"
                                    className={({ isActive }) => getSidebarChildClasses('system-management-backup') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('system-management-backup')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Cadangan"
                                ><span className="hover:text-wise-dark-gray transition-colors">Backup</span></NavLink>
                            </div>
                        </div>

                        {/* Setting Optimization */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-setting-optimization"
                                className={getSidebarItemClasses('setting-optimization')}
                                onClick={() => toggleChildren('setting-optimization')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['setting-optimization'] || false}
                                aria-controls="setting-optimization-children"
                                aria-label="Toggle sub-menu Optimalisasi Pengaturan"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-sliders-h text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Setting Optimization</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['setting-optimization'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="setting-optimization-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['setting-optimization'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-setting-optimization"
                            >
                                <NavLink
                                    to="/dashboard/setting-optimization/general"
                                    className={({ isActive }) => getSidebarChildClasses('setting-optimization-general') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('setting-optimization-general')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Pengaturan Umum"
                                ><span className="hover:text-wise-dark-gray transition-colors">General</span></NavLink>
                                <NavLink
                                    to="/dashboard/setting-optimization/performance"
                                    className={({ isActive }) => getSidebarChildClasses('setting-optimization-performance') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('setting-optimization-performance')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Kinerja"
                                ><span className="hover:text-wise-dark-gray transition-colors">Performance</span></NavLink>
                                <NavLink
                                    to="/dashboard/setting-optimization/notifications"
                                    className={({ isActive }) => getSidebarChildClasses('setting-optimization-notifications') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('setting-optimization-notifications')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Pemberitahuan"
                                ><span className="hover:text-wise-dark-gray transition-colors">Notifications</span></NavLink>
                            </div>
                        </div>

                        {/* Data Archiving */}
                        <div className="sidebar-section">
                            <div
                                id="sidebar-archive"
                                className={getSidebarItemClasses('archive')}
                                onClick={() => toggleChildren('archive')}
                                tabIndex="0"
                                role="button"
                                aria-expanded={openSubMenus['archive'] || false}
                                aria-controls="archive-children"
                                aria-label="Toggle sub-menu Pengarsipan Data"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <i className="fas fa-archive text-wise-gray"></i>
                                </div>
                                <span className="text-wise-dark-gray font-medium text-sm flex-1">Data Archiving</span>
                                <i className={`fas fa-chevron-down w-4 h-4 text-wise-gray transform transition-transform-smooth ${openSubMenus['archive'] ? 'rotate-90' : 'rotate-0'}`}></i>
                            </div>
                            <div
                                id="archive-children"
                                className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all-smooth ${openSubMenus['archive'] ? 'block' : 'hidden'}`}
                                role="group"
                                aria-labelledby="sidebar-archive"
                            >
                                <NavLink
                                    to="/dashboard/archive/documents"
                                    className={({ isActive }) => getSidebarChildClasses('archive-documents') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('archive-documents')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Dokumen"
                                ><span className="hover:text-wise-dark-gray transition-colors">Documents</span></NavLink>
                                <NavLink
                                    to="/dashboard/archive/media"
                                    className={({ isActive }) => getSidebarChildClasses('archive-media') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('archive-media')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Media"
                                ><span className="hover:text-wise-dark-gray transition-colors">Media</span></NavLink>
                                <NavLink
                                    to="/dashboard/archive/financial"
                                    className={({ isActive }) => getSidebarChildClasses('archive-financial') + (isActive ? ' border-l-2 border-wise-primary' : '')}
                                    onClick={() => selectCategory('archive-financial')}
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Pilih Keuangan"
                                ><span className="hover:text-wise-dark-gray transition-colors">Financial</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;