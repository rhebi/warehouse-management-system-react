import React, { useState, useContext, useEffect, useRef } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { Link, NavLink } from 'react-router-dom'; 

function Header() {
    const {
        searchQuery,
        setSearchQuery,
        handleSearch,
        isSearchOverlayOpen,
        searchHistory,
        addSearchHistoryEntry,
        removeSearchHistoryEntry,
        clearAllSearchHistory,
        toggleSidebar,
        handleLogout,
        navigateToProfile
    } = useContext(DashboardContext);

    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isSearchHistoryDropdownOpen, setIsSearchHistoryDropdownOpen] = useState(false);
    const searchInputRef = useRef(null);
    const userDropdownRef = useRef(null);
    const searchHistoryDropdownRef = useRef(null);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(prev => !prev);
    };

    const handleSearchInput = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 0) {
            setIsSearchHistoryDropdownOpen(false);
            handleSearch(query, 'header');
        } else {
            setIsSearchHistoryDropdownOpen(true);
            handleSearch(query, 'header');
        }
    };

    const handleSearchClick = () => {
        if (searchQuery.length === 0 && isSearchHistoryDropdownOpen) {
            setIsSearchHistoryDropdownOpen(false);
        } else if (searchQuery.length === 0 && !isSearchHistoryDropdownOpen) {
            setIsSearchHistoryDropdownOpen(true);
        } else {
            handleSearch(searchQuery, 'header');
            addSearchHistoryEntry(searchQuery);
            setIsSearchHistoryDropdownOpen(false);
        }
    };

    const applySearchHistory = (query) => {
        setSearchQuery(query);
        handleSearch(query, 'header');
        setIsSearchHistoryDropdownOpen(false);
    };

    const handleRemoveSearchHistory = (index, e) => {
        e.stopPropagation();
        removeSearchHistoryEntry(index);
        if (searchHistory.length === 1) {
            setIsSearchHistoryDropdownOpen(false);
        }
    };

    const handleClearAllHistory = (e) => {
        e.stopPropagation();
        clearAllSearchHistory();
        setIsSearchHistoryDropdownOpen(false);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target) &&
                !event.target.closest('.user-avatar-button')) { // Perbarui selektor untuk user button
                setIsUserDropdownOpen(false);
            }
            if (searchHistoryDropdownRef.current && !searchHistoryDropdownRef.current.contains(event.target) &&
                searchInputRef.current && !searchInputRef.current.contains(event.target) &&
                !event.target.closest('.flex.items-center.bg-white.rounded-xl.border.border-wise-border')) {
                setIsSearchHistoryDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Sembunyikan search history jika overlay search terbuka
    useEffect(() => {
        if (isSearchOverlayOpen) {
            setIsSearchHistoryDropdownOpen(false);
        }
    }, [isSearchOverlayOpen]);

    return (
        <header className="bg-white/90 backdrop-blur-glass border-b border-wise-border px-4 py-3 md:px-6 md:py-4 fixed top-0 left-0 right-0 z-30 shadow-sm transition-all-smooth">
            <div className="flex items-center justify-between w-full">
                {/* Left Section - Logo and Dashboard/Config Switch */}
                <div className="flex items-center space-x-4 flex-none">
                    <button
                        id="sidebar-toggle-btn"
                        className="text-wise-dark-gray focus:outline-none md:hidden p-2 -ml-2 mr-2 rounded-lg hover:bg-gray-100 transition-all-smooth active-press"
                        aria-label="Toggle sidebar"
                        onClick={toggleSidebar}
                    >
                        <i className="fas fa-bars w-6 h-6 flex items-center justify-center transition-transform-smooth"></i>
                    </button>
                    <Link to="/dashboard" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">W</span>
                        </div>
                        <span className="text-wise-dark-gray text-xl font-bold tracking-tight">WISE</span>
                    </Link>

                    {/* Dashboard / Configuration Switch (Buttons like in Figma) */}
                    <div className="hidden md:flex items-center ml-4 border border-wise-border rounded-xl bg-wise-light-gray p-1 text-sm font-medium">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all-smooth ${isActive ? 'bg-white shadow-sm text-wise-dark-gray' : 'text-wise-gray hover:bg-gray-100'}`
                            }
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/configuration"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all-smooth ${isActive ? 'bg-white shadow-sm text-wise-dark-gray' : 'text-wise-gray hover:bg-gray-100'}`
                            }
                        >
                            Configuration
                        </NavLink>
                    </div>
                </div>

                {/* Center Section - Search */}
                <div className="flex-1 flex justify-center relative max-w-lg mx-4">
                    <div className="flex items-center bg-white rounded-xl border border-wise-border overflow-hidden shadow-card w-full focus-within:ring-2 focus-within:ring-wise-primary/20 focus-within:border-wise-primary transition-all-smooth">
                        <div className="pl-4">
                            <i className="fas fa-search text-wise-gray"></i>
                        </div>
                        <input
                            ref={searchInputRef}
                            type="text"
                            id="search-input"
                            placeholder="Search now..."
                            className="flex-1 px-3 py-2.5 focus:outline-none text-sm placeholder-wise-gray bg-transparent text-wise-dark-gray"
                            value={searchQuery}
                            onChange={handleSearchInput}
                            onFocus={() => setIsSearchHistoryDropdownOpen(true)}
                            aria-label="Search dashboard"
                        />
                        <button
                            className="bg-wise-dark-gray text-white px-4 py-2.5 text-sm font-medium hover:bg-gray-700 transition-all-smooth active-press"
                            aria-label="Search button"
                            onClick={handleSearchClick}
                        >
                            <span className="hidden sm:inline">Search</span>
                            <i className="fas fa-search sm:hidden"></i>
                        </button>
                    </div>

                    {/* Search History Dropdown */}
                    {isSearchHistoryDropdownOpen && (
                        <div
                            id="search-history-dropdown"
                            className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-wise-border z-50 overflow-hidden animate-fade-in"
                            ref={searchHistoryDropdownRef}
                        >
                            <div className="p-2" id="search-history-content">
                                {searchHistory.length > 0 ? (
                                    <>
                                        {searchHistory.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-wise-light-gray rounded-md transition-all-smooth"
                                                onClick={() => applySearchHistory(item)}
                                            >
                                                <span className="text-wise-dark-gray text-sm">{item}</span>
                                                <button
                                                    className="text-wise-gray hover:text-wise-dark-gray text-xs ml-2"
                                                    onClick={(e) => handleRemoveSearchHistory(index, e)}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        ))}
                                        <div className="text-right pt-2 pb-1 px-3">
                                            <button
                                                className="text-wise-gray hover:underline text-xs"
                                                onClick={handleClearAllHistory}
                                            >
                                                Clear All History
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <p className="p-3 text-wise-gray text-sm">No search history.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Section - User Profile */}
                <div className="flex-1 flex justify-end items-center space-x-3 relative">
                    <span className="text-wise-dark-gray font-medium text-sm hidden lg:block">
                        Welcome, <span id="username-display" className="font-semibold text-wise-primary">SuperAdmin</span>
                    </span>
                    <button
                        className="user-avatar-button w-9 h-9 bg-wise-dark-gray rounded-full flex items-center justify-center shadow-card cursor-pointer hover-lift transition-all-smooth active-press"
                        onClick={toggleUserDropdown}
                        aria-label="User menu"
                    >
                        <i className="fas fa-user text-white"></i>
                    </button>

                    {/* User Dropdown */}
                    {isUserDropdownOpen && (
                        <div
                            id="user-dropdown"
                            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-wise-border z-50 overflow-hidden animate-slide-up"
                            ref={userDropdownRef}
                        >
                            <div className="p-2">
                                <a href="#" className="flex items-center px-3 py-2 text-sm text-wise-dark-gray hover:bg-wise-light-gray rounded-lg transition-all-smooth" onClick={navigateToProfile}>
                                    <i className="fas fa-user-circle mr-3 text-wise-gray"></i>
                                    Profile
                                </a>
                                <a href="#" className="flex items-center px-3 py-2 text-sm text-wise-dark-gray hover:bg-wise-light-gray rounded-lg transition-all-smooth" onClick={handleLogout}>
                                    <i className="fas fa-sign-out-alt mr-3 text-wise-gray"></i>
                                    Log Out
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;