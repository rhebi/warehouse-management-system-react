import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardContext } from '../context/DashboardContext';

// Import komponen fitur Configuration
// import WarehouseManagement from '../configuration/features/user/WarehouseManagement';
// import ZoneManagement from '../configuration/features/general/ZoneManagement';
// import LocationTypeManagement from '../configuration/features/general/LocationTypeManagement';
// import LocatingStrategyManagement from '../configuration/features/general/LocatingStrategyManagement';
// import LocatingRuleManagement from '../configuration/features/general/LocatingRuleManagement';
// import SecurityGroupManagement from '../configuration/features/security/SecurityGroupManagement';
// import SecurityPermissionManagement from '../configuration/features/security/SecurityPermissionManagement';

// Import komponen fitur Dashboard utama (ini yang baru kita siapkan foldernya)
// Ini hanya placeholder, nanti akan diisi dengan komponen aslinya
import YardManagement from '../components/dashboard/features/YardManagement';
import ReceivingManagement from '../components/dashboard/features/ReceivingManagement';
import OrderPlanning from '../components/dashboard/features/OrderPlanning';
import ShippingManagement from '../components/dashboard/features/ShippingManagement';
import WorkManagement from '../components/dashboard/features/WorkManagement';
import CrossApplicationManagement from '../components/dashboard/features/CrossApplicationManagement';
import InventoryManagement from '../components/dashboard/features/InventoryManagement';
import PerformanceManagement from '../components/dashboard/features/PerformanceManagement';
import SystemManagement from '../components/dashboard/features/SystemManagement';
import DataArchiving from '../components/dashboard/features/DataArchiving';


function Dashboard() {
    const { currentCategory, contentData, selectCategory } = useContext(DashboardContext); //
    const { parentCategory, subCategory } = useParams();

    // Efek untuk mengatur category saat URL berubah
    useEffect(() => {
        let categoryId = 'dashboard';
        if (parentCategory && subCategory) {
            categoryId = `${parentCategory}-${subCategory}`;
        } else if (parentCategory) {
            categoryId = parentCategory;
        }
        selectCategory(categoryId); //
    }, [parentCategory, subCategory, selectCategory]);

    const renderContent = () => {
        // Render komponen spesifik berdasarkan currentCategory
        // Configuration Features
        if (currentCategory === 'configuration-warehouse') {
            return <WarehouseManagement />;
        }
        if (currentCategory === 'configuration-zone') {
            return <ZoneManagement />;
        }
        if (currentCategory === 'configuration-location-type') {
            return <LocationTypeManagement />;
        }
        if (currentCategory === 'locating-strategies') {
            return <LocatingStrategyManagement />;
        }
        if (currentCategory === 'locating-rule') {
            return <LocatingRuleManagement />;
        }
        if (currentCategory === 'security-group') {
            return <SecurityGroupManagement />;
        }
        if (currentCategory === 'security-permission') {
            return <SecurityPermissionManagement />;
        }

        // Dashboard Features (Fitur Utama)
        // Ini placeholder untuk sekarang, nanti akan kita isi dengan komponen aslinya
        if (currentCategory === 'yard-management') {
            return <YardManagement />;
        }
        if (currentCategory === 'receiving') {
            return <ReceivingManagement />;
        }
        if (currentCategory === 'order') {
            return <OrderPlanning />;
        }
        if (currentCategory === 'shipping') {
         return <ShippingManagement />;
        }
        if (currentCategory === 'work') {
            return <WorkManagement />;
        }
        if (currentCategory === 'cross-application') {
            return <CrossApplicationManagement />;
        }
        if (currentCategory === 'inventory') {
            return <InventoryManagement />;
        }
        if (currentCategory === 'performance') {
            return <PerformanceManagement />;
        }
        if (currentCategory === 'system-management') {
            return <SystemManagement />;
        }
        if (currentCategory === 'archive') {
            return <DataArchiving />;
        }
        
        // Jika tidak ada komponen spesifik, render HTML dari contentData
        const categoryContent = contentData[currentCategory]; //
        if (categoryContent && categoryContent.full) {
            return <div dangerouslySetInnerHTML={{ __html: categoryContent.full }} />;
        }
        if (categoryContent && categoryContent.detail) {
            return <div dangerouslySetInnerHTML={{ __html: categoryContent.detail }} />;
        }
        
        // Fallback content
        return (
            <h2 className="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">
                Konten untuk {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1).replace(/-/g, ' ')}
            </h2>
        );
    };

    return (
        <div id="default-content-area" className="bg-white rounded-xl border border-wise-border min-h-[500px] shadow-lg p-6 text-wise-dark-gray animate-fade-in w-full">
            {renderContent()}
        </div>
    );
}

export default Dashboard;