import React, { useState, useContext, useEffect, useRef } from 'react';
import { DashboardContext } from '../../context/DashboardContext'; // Path diperbaiki
import DOMPurify from 'dompurify';

function SearchOverlay() {
    const {
        isSearchOverlayOpen,
        closeSearchOverlay,
        searchQuery,
        setSearchQuery,
        performSearch,
        activeFilters,
        setActiveFilters,
        contentData,
        selectCategory,
        addSearchHistoryEntry
    } = useContext(DashboardContext);

    const [overlaySearchInput, setOverlaySearchInput] = useState(searchQuery);
    const [searchResults, setSearchResults] = useState([]);
    const [detailContent, setDetailContent] = useState('');

    const overlayInputRef = useRef(null);

    // Sync search query from context when overlay opens or search query changes externally
    useEffect(() => {
        setOverlaySearchInput(searchQuery);
        if (isSearchOverlayOpen && searchQuery.length > 0) {
            const results = performSearch(searchQuery, 'overlay');
            setSearchResults(results);
        } else {
            setSearchResults([]);
            setDetailContent('');
        }
    }, [isSearchOverlayOpen, searchQuery, performSearch]);

    // Focus input when overlay opens
    useEffect(() => {
        if (isSearchOverlayOpen && overlayInputRef.current) {
            overlayInputRef.current.focus();
        }
    }, [isSearchOverlayOpen]);

    const handleOverlaySearchInput = (e) => {
        const query = e.target.value;
        setOverlaySearchInput(query);
        setSearchQuery(query);
        const results = performSearch(query, 'overlay');
        setSearchResults(results);
        setDetailContent('');
    };

    const showPreview = (id) => {
        const content = contentData[id];
        if (content && (content.detail || content.full)) {
            const previewHtml = content.detail || content.full;
            // Gunakan DOMPurify untuk membersihkan HTML sebelum menampilkannya
            setDetailContent(`
                ${DOMPurify.sanitize(previewHtml)}
                <button class="mt-4 px-4 py-2 bg-wise-primary text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md active-press transform" onclick="document.getElementById('display-page-button-${id}').click()">
                    Tampilkan Halaman
                </button>
                <button id="display-page-button-${id}" class="hidden" onClick={() => handleSelectSearchResult(id)}></button>
            `);
        } else {
            setDetailContent('<p class="text-wise-gray text-center text-sm">Pratinjau tidak tersedia untuk item ini.</p>');
        }
    };

    const handleSelectSearchResult = (id) => {
        addSearchHistoryEntry(overlaySearchInput);
        selectCategory(id);
        closeSearchOverlay();
    };

    const toggleFilter = (filterName) => {
        setActiveFilters(prev => {
            if (prev.includes(filterName.toLowerCase())) {
                return prev.filter(f => f !== filterName.toLowerCase());
            } else {
                return [...prev, filterName.toLowerCase()];
            }
        });
    };

    const clearAllFilters = () => {
        setActiveFilters([]);
    };

    const isFilterActive = (filterName) => activeFilters.includes(filterName.toLowerCase());

    if (!isSearchOverlayOpen) return null;

    return (
        <div id="search-overlay" className="fixed inset-0 backdrop-blur-overlay z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Overlay Pencarian">
            <div className="bg-white rounded-xl border border-wise-border shadow-lg w-full max-w-3xl h-5/6 flex flex-col animate-slide-up">
                <div className="flex items-center bg-white rounded-t-xl border-b border-wise-border overflow-hidden p-4">
                    <input
                        ref={overlayInputRef}
                        type="text"
                        id="overlay-search-input"
                        placeholder="Cari sekarang..."
                        className="flex-1 px-4 py-2.5 focus:outline-none text-sm placeholder-wise-gray bg-transparent text-wise-dark-gray"
                        value={overlaySearchInput}
                        onChange={handleOverlaySearchInput}
                        aria-label="Input pencarian overlay"
                    />
                    <button className="bg-wise-dark-gray text-white px-4 py-2.5 text-sm font-medium hover:bg-gray-700 transition-all-smooth active-press rounded-r-lg" aria-label="Tombol pencarian overlay" onClick={() => handleSelectSearchResult(searchResults[0]?.id || '')}>
                        <span className="hidden sm:inline">Cari</span>
                        <i className="fas fa-search sm:hidden"></i>
                    </button>
                    <button className="ml-2 text-wise-gray hover:text-wise-dark-gray rounded-full p-1 hover:bg-gray-100 transition-all-smooth" onClick={closeSearchOverlay} aria-label="Tutup overlay pencarian">
                        <i className="fas fa-times w-6 h-6 flex items-center justify-center"></i>
                    </button>
                </div>
                {/* Search Filters */}
                {overlaySearchInput.length > 0 && (
                    <div id="overlay-search-filters" className="flex items-center space-x-2 mt-3 ml-4 text-xs flex-wrap animate-slide-up">
                        <span className="text-wise-gray font-medium">Filter:</span>
                        <div className="flex flex-wrap gap-2">
                            {searchResults.some(item => item.category.toLowerCase().includes('article')) && (
                                <span className={`bg-wise-light-gray text-wise-dark-gray px-3 py-1 rounded-full flex items-center hover:bg-gray-200 transition-all-smooth cursor-pointer ${isFilterActive('articles') ? 'ring-2 ring-wise-primary' : ''}`} onClick={() => toggleFilter('articles')}>
                                    Articles
                                    <button className="ml-2 text-wise-gray hover:text-wise-error transition-colors" onClick={(e) => { e.stopPropagation(); toggleFilter('articles'); }} aria-label="Hapus filter artikel">
                                        <i className="fas fa-times w-3 h-3 flex items-center justify-center"></i>
                                    </button>
                                </span>
                            )}
                            {searchResults.some(item => item.category.toLowerCase().includes('photography') || item.title.toLowerCase().includes('photo')) && (
                                <span className={`bg-wise-light-gray text-wise-dark-gray px-3 py-1 rounded-full flex items-center hover:bg-gray-200 transition-all-smooth cursor-pointer ${isFilterActive('photography') ? 'ring-2 ring-wise-primary' : ''}`} onClick={() => toggleFilter('photography')}>
                                    Photography
                                    <button className="ml-2 text-wise-gray hover:text-wise-error transition-colors" onClick={(e) => { e.stopPropagation(); toggleFilter('photography'); }} aria-label="Hapus filter fotografi">
                                        <i className="fas fa-times w-3 h-3 flex items-center justify-center"></i>
                                    </button>
                                </span>
                            )}
                            {/* Add other dynamic filters based on searchResults categories if needed */}
                        </div>
                        {activeFilters.length > 0 && (
                            <button className="text-wise-gray hover:text-wise-error hover:underline" onClick={clearAllFilters} aria-label="Hapus semua filter">
                                Hapus semua
                            </button>
                        )}
                    </div>
                )}
                <div className="flex flex-1 overflow-hidden mt-4">
                    <div id="overlay-search-results-list-panel" className="w-full md:w-1/3 border-r border-wise-border p-4 overflow-y-auto text-wise-dark-gray">
                        {searchResults.length > 0 ? (
                            searchResults.map(item => (
                                <div
                                    key={item.id}
                                    className="py-2 px-3 bg-wise-light-gray rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 mb-2 transition-all-smooth"
                                    onMouseEnter={() => showPreview(item.id)}
                                    onClick={() => handleSelectSearchResult(item.id)}
                                >
                                    <h4 className="text-wise-dark-gray font-medium text-sm">{item.title}</h4>
                                    <p className="text-wise-gray text-xs">Kategori: {item.category} | Terakhir Diperbarui: {item.lastUpdated}</p>
                                </div>
                            ))
                        ) : (
                            <p className="p-3 text-wise-gray text-sm">Tidak ada hasil ditemukan.</p>
                        )}
                    </div>
                    <div id="overlay-detail-content-panel" className="flex-1 p-4 overflow-y-auto flex flex-col justify-center items-center text-wise-dark-gray">
                        <p className="text-wise-gray text-center text-sm">Arahkan kursor ke item di sebelah kiri untuk pratinjau, atau klik untuk melihat detail.</p>
                        {detailContent && <div dangerouslySetInnerHTML={{ __html: detailContent }} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchOverlay;