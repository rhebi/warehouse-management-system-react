import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import DashboardLayout from '../layout/DashboardLayout';
import ConfigurationLayout from '../layout/ConfigurationLayout'; // Import ConfigurationLayout
import { DashboardProvider } from '../context/DashboardContext';
import { useEffect } from 'react';

// Komponen PrivateRoute untuk melindungi rute
const PrivateRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  // Initial load logic, mirip dengan window.onload di HTML
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    // Hanya redirect ke /login jika belum login DAN bukan di halaman login
    if (!isLoggedIn && window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
    // Jika sudah login, dan mencoba akses /login atau / (root), redirect ke /dashboard
    else if (isLoggedIn && (window.location.pathname === '/login' || window.location.pathname === '/')) {
      window.location.href = '/dashboard';
    }
  }, []);

  return (
    <DashboardProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Rute default atau root, redirect ke dashboard jika login, ke login jika belum */}
        <Route path="/" element={<Navigate to={sessionStorage.getItem('isLoggedIn') === 'true' ? "/dashboard" : "/login"} />} />
        
        {/* Rute untuk Dashboard dan fitur-fitur utamanya */}
        <Route path="/dashboard" element={<PrivateRoute><DashboardLayout><Dashboard /></DashboardLayout></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            {/* Rute untuk fitur-fitur utama Dashboard (sesuai struktur /dashboard/features/) */}
            <Route path="yard/:subCategory" element={<Dashboard />} />
            <Route path="receiving/:subCategory" element={<Dashboard />} />
            <Route path="order/:subCategory" element={<Dashboard />} />
            <Route path="shipping/:subCategory" element={<Dashboard />} />
            <Route path="work/:subCategory" element={<Dashboard />} />
            <Route path="cross-application/:subCategory" element={<Dashboard />} />
            <Route path="inventory/:subCategory" element={<Dashboard />} />
            <Route path="performance/:subCategory" element={<Dashboard />} />
            <Route path="system-management/:subCategory" element={<Dashboard />} />
            <Route path="archive/:subCategory" element={<Dashboard />} />
            <Route path="setting-optimization/:subCategory" element={<Dashboard />} />

            {/* Rute untuk parent category yang punya full content tapi juga children */}
            <Route path="yard-management" element={<Dashboard />} />
            <Route path="receiving" element={<Dashboard />} />
            <Route path="order" element={<Dashboard />} />
            <Route path="shipping" element={<Dashboard />} />
            <Route path="work" element={<Dashboard />} />
            <Route path="cross-application" element={<Dashboard />} />
            <Route path="inventory" element={<Dashboard />} />
            <Route path="performance" element={<Dashboard />} />
            <Route path="system-management" element={<Dashboard />} />
            <Route path="archive" element={<Dashboard />} />
            <Route path="setting-optimization" element={<Dashboard />} />
            
            {/* Hapus rute konfigurasi dari sini, karena sudah punya layout sendiri */}
        </Route>

        {/* Rute untuk Configuration dan fitur-fitur konfigurasinya */}
        <Route path="/configuration" element={<PrivateRoute><ConfigurationLayout><Dashboard /></ConfigurationLayout></PrivateRoute>}>
            <Route index element={<Dashboard />} /> {/* Default content untuk /configuration */}
            {/* Rute untuk fitur-fitur Configuration (sesuai struktur /configuration/features/) */}
            <Route path="warehouse" element={<Dashboard />} />
            <Route path="zone" element={<Dashboard />} />
            <Route path="location-type" element={<Dashboard />} />
            <Route path="locating-strategies" element={<Dashboard />} />
            <Route path="locating-rule" element={<Dashboard />} />
            <Route path="security-group" element={<Dashboard />} />
            <Route path="security-permission" element={<Dashboard />} />
        </Route>
        
        <Route path="/profile" element={<PrivateRoute><DashboardLayout><Profile /></DashboardLayout></PrivateRoute>} />
        
        {/* Tambahkan rute fallback untuk 404 jika diperlukan */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </DashboardProvider>
  );
}

export default AppRoutes;