import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';
import { initialWarehouses, initialZones, initialLocationTypes, initialLocatingStrategies, initialLocatingRules, initialSecurityGroups, initialSecurityPermissions, contentData, searchItems, parentMapping, allUsers, allMenus } from '../api/dummyData';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [warehouses, setWarehouses] = useState(initialWarehouses);
    const [zones, setZones] = useState(initialZones);
    const [locationTypes, setLocationTypes] = useState(initialLocationTypes);
    const [locatingStrategies, setLocatingStrategies] = useState(initialLocatingStrategies);
    const [locatingRules, setLocatingRules] = useState(initialLocatingRules);
    const [securityGroups, setSecurityGroups] = useState(initialSecurityGroups);
    const [securityPermissions, setSecurityPermissions] = useState(initialSecurityPermissions);

    const [currentCategory, setCurrentCategory] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState([]);
    const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('searchHistory')) || []);

    // Custom Modal state
    const [modal, setModal] = useState({
        isOpen: false,
        title: '',
        message: '',
        isConfirm: false,
        resolvePromise: null,
    });

    const resolveRef = useRef(null);

    const showCustomAlert = useCallback((title, message) => {
        return new Promise(resolve => {
            resolveRef.current = resolve;
            setModal({
                isOpen: true,
                title,
                message,
                isConfirm: false,
                resolvePromise: resolve,
            });
        });
    }, []);

    const showCustomConfirm = useCallback((title, message) => {
        return new Promise(resolve => {
            resolveRef.current = resolve;
            setModal({
                isOpen: true,
                title,
                message,
                isConfirm: true,
                resolvePromise: resolve,
            });
        });
    }, []);

    const closeCustomModal = useCallback((result) => {
        setModal(prev => ({ ...prev, isOpen: false }));
        if (resolveRef.current) {
            resolveRef.current(result);
            resolveRef.current = null;
        }
    }, []);

    // Save functions
    useEffect(() => {
        localStorage.setItem('warehouses', JSON.stringify(warehouses));
    }, [warehouses]);

    useEffect(() => {
        localStorage.setItem('zones', JSON.stringify(zones));
    }, [zones]);

    useEffect(() => {
        localStorage.setItem('locationTypes', JSON.stringify(locationTypes));
    }, [locationTypes]);

    useEffect(() => {
        localStorage.setItem('locatingStrategies', JSON.stringify(locatingStrategies));
    }, [locatingStrategies]);

    useEffect(() => {
        localStorage.setItem('locatingRules', JSON.stringify(locatingRules));
    }, [locatingRules]);

    useEffect(() => {
        localStorage.setItem('securityGroups', JSON.stringify(securityGroups));
    }, [securityGroups]);

    useEffect(() => {
        localStorage.setItem('securityPermissions', JSON.stringify(securityPermissions));
    }, [securityPermissions]);

    useEffect(() => {
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }, [searchHistory]);

    // Sidebar & Main Content Logic
    const toggleSidebar = useCallback(() => {
        setIsSidebarOpen(prev => !prev);
    }, []);

    const closeSidebar = useCallback(() => {
        setIsSidebarOpen(false);
    }, []);

    const selectCategory = useCallback((category) => {
        setCurrentCategory(category);
        if (window.innerWidth < 768) {
            closeSidebar();
        }
    }, [closeSidebar]);

    // Search Logic
    const handleSearch = useCallback((query, source = 'header') => {
        setSearchQuery(query);
        if (query.length > 0) {
            setIsSearchOverlayOpen(true);
        } else {
            setIsSearchOverlayOpen(false);
            setActiveFilters([]);
        }
    }, []);

    const performSearch = useCallback((query, source = 'overlay') => {
        let filteredResults = searchItems.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()) ||
            (item.id && item.id.toLowerCase().includes(query.toLowerCase()))
        );

        if (activeFilters.length > 0) {
            filteredResults = filteredResults.filter(item =>
                activeFilters.some(filter => item.category.toLowerCase().includes(filter.toLowerCase()))
            );
        }
        return filteredResults;
    }, [activeFilters]);

    const addSearchHistoryEntry = useCallback((query) => {
        if (query && !searchHistory.includes(query)) {
            setSearchHistory(prev => {
                const newHistory = [query, ...prev].slice(0, 5); // Keep last 5 entries
                return newHistory;
            });
        }
    }, [searchHistory]);

    const removeSearchHistoryEntry = useCallback((index) => {
        setSearchHistory(prev => {
            const newHistory = [...prev];
            newHistory.splice(index, 1);
            return newHistory;
        });
    }, []);

    const clearAllSearchHistory = useCallback(() => {
        setSearchHistory([]);
    }, []);

    const closeSearchOverlay = useCallback(() => {
        setIsSearchOverlayOpen(false);
        setSearchQuery('');
        setActiveFilters([]);
    }, []);

    // User Profile & Logout
    const handleLogout = useCallback(async () => {
        const confirmed = await showCustomAlert('Log Out', 'Kamu berhasil keluar.');
        if (confirmed) {
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('currentUser');
            window.location.href = '/login';
        }
    }, [showCustomAlert]);

    const navigateToProfile = useCallback(() => {
        window.location.href = '/profile';
    }, []);

    // Provide context values
    const contextValue = {
        warehouses, setWarehouses,
        zones, setZones,
        locationTypes, setLocationTypes,
        locatingStrategies, setLocatingStrategies,
        locatingRules, setLocatingRules,
        securityGroups, setSecurityGroups,
        securityPermissions, setSecurityPermissions,
        allUsers,
        allMenus,

        currentCategory,
        selectCategory,
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,

        searchQuery,
        setSearchQuery,
        handleSearch,
        performSearch,
        isSearchOverlayOpen,
        closeSearchOverlay,
        activeFilters,
        setActiveFilters,
        searchHistory,
        addSearchHistoryEntry,
        removeSearchHistoryEntry,
        clearAllSearchHistory,

        handleLogout,
        navigateToProfile,
        contentData,
        parentMapping,
        
        // Custom Modal functions
        showCustomAlert,
        showCustomConfirm,
        closeCustomModal,
        modalState: modal,
    };

    return (
        <DashboardContext.Provider value={contextValue}>
            {children}
        </DashboardContext.Provider>
    );
};