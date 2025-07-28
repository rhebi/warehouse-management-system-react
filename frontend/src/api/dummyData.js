export const contentData = {
    dashboard: {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Dashboard Overview</h2>
            <p class="text-wise-gray mb-4">Welcome to your dashboard. Here's a quick summary of your operations.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-wise-light-gray p-5 rounded-lg shadow-md">
                    <h3 class="text-lg font-medium text-wise-dark-gray mb-2">Total Orders</h3>
                    <p class="text-3xl font-bold text-wise-primary">1,250</p>
                    <p class="text-wise-gray text-sm mt-1">last 30 days</p>
                </div>
                <div class="bg-wise-light-gray p-5 rounded-lg shadow-md">
                    <h3 class="text-lg font-medium text-wise-dark-gray mb-2">Active Crews</h3>
                    <p class="text-3xl font-bold text-wise-info">85</p>
                    <p class="text-wise-gray text-sm mt-1">currently working</p>
                </div>
                <div class="bg-wise-light-gray p-5 rounded-lg shadow-md">
                    <h3 class="text-lg font-bold text-wise-success">$2.5M</p>
                    <p class="text-wise-gray text-sm mt-1">Total assets</p>
                </div>
            </div>
            <div class="mt-8">
                <h3 class="text-lg md:text-xl font-semibold text-wise-dark-gray mb-3">Recent Activity</h3>
                <div class="space-y-4">
                    <div class="flex items-center justify-between py-3 px-4 bg-wise-light-gray rounded-lg shadow-sm">
                        <h4 class="text-wise-dark-gray font-medium">New order for Project Alpha</h4>
                        <span class="text-wise-gray text-xs md:text-sm">5 minutes ago</span>
                    </div>
                    <div class="flex items-center justify-between py-3 px-4 bg-wise-light-gray rounded-lg shadow-sm">
                        <h4 class="text-wise-dark-gray font-medium">Crew #123 completed task</h4>
                        <span class="text-wise-gray text-xs md:text-sm">1 hour ago</span>
                    </div>
                    <div class="flex items-center justify-between py-3 px-4 bg-wise-light-gray rounded-lg shadow-sm">
                        <h4 class="text-wise-dark-gray font-medium">Inventory update: 10 units added to Warehouse</h4>
                        <span class="text-wise-gray text-xs md:text-sm">3 hours ago</span>
                    </div>
                </div>
            </div>
        `,
    },
    'yard-management': {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Yard Management</h2>
            <p class="text-wise-gray mb-4">Manage your yard resources and equipment here. Select a sub-category from the sidebar.</p>
            <div class="bg-wise-light-gray p-4 rounded-lg shadow-sm">
                <h3 class="font-medium text-wise-dark-gray">Overview</h3>
                <ul class="list-disc list-inside text-wise-gray text-sm mt-2 space-y-1">
                    <li>Total Vehicles: 50, Available: 35</li>
                    <li>Total Equipment: 120, Available: 80</li>
                </ul>
            </div>
        `,
    },
    'yard-vehicles': {
        full: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Yard - Vehicles (Full Page)</h2><p class="text-wise-gray">This is the full page view for Vehicles in the Yard. It contains a complete list of vehicles, their status, and history.</p><p class="text-wise-gray text-sm mt-2">Full vehicle details.</p>`,
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Yard - Vehicles</h2><p class="text-wise-gray">List of vehicles available in the yard.</p><p class="text-wise-gray text-sm mt-2">Count: 35 units</p>`,
    },
    'yard-equipment': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Yard - Equipment</h2><p class="text-wise-gray">List of equipment available in the yard.</p><p class="text-wise-gray text-sm mt-2">Count: 80 units</p>`,
    },
    'yard-personnel': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Yard - Personnel</h2><p class="text-wise-gray">List of personnel assigned to the yard.</p><p class="text-wise-gray text-sm mt-2">Count: 15 people</p>`,
    },
    receiving: {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Receiving Management</h2>
            <p class="text-wise-gray mb-4">Track and manage all incoming shipments and deliveries. Select a sub-category from the sidebar.</p>
            <div class="bg-wise-light-gray p-4 rounded-lg shadow-sm">
                <h3 class="font-medium text-wise-dark-gray">Pending Receiving</h3>
                <ul class="list-disc list-inside text-wise-gray text-sm mt-2 space-y-1">
                    <li>Shipment #101 - Expected: Today</li>
                    <li>Shipment #102 - Expected: Tomorrow</li>
                </ul>
            </div>
        `,
    },
    'receiving-deliveries': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Receiving - Deliveries</h2><p class="text-wise-gray">Details of all incoming deliveries.</p><p class="text-wise-gray text-sm mt-2">Number of deliveries: 5</p>`,
    },
    'receiving-returns': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Receiving - Returns</h2><p class="text-wise-gray">Details of all received returns.</p><p class="text-wise-gray text-sm mt-2">Number of returns: 2</p>`,
    },
    'receiving-vendors': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Receiving - Vendors</h2><p class="text-wise-gray">List of vendors and their delivery status.</p><p class="text-wise-gray text-sm mt-2">Number of active vendors: 10</p>`,
    },
    order: {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Order Planning</h2>
            <p class="text-wise-gray mb-4">Plan and optimize your orders. Track order status, manage shipments, and forecast demand. Select a sub-category from the sidebar.</p>
            <div class="bg-wise-light-gray p-4 rounded-lg shadow-sm">
                <h3 class="font-medium text-wise-dark-gray">Pending Orders</h3>
                <ul class="list-disc list-inside text-wise-gray text-sm mt-2 space-y-1">
                    <li>Shipment #X123 - Status: Awaiting Approval</li>
                    <li>Shipment #Y456 - Status: In Transit</li>
                </ul>
            </div>
        `,
    },
    'order-new': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Order Planning - New Orders</h2><p class="text-wise-gray">List of new orders to be processed.</p><p class="text-wise-gray text-sm mt-2">New orders: 7</p>`,
    },
    'order-pending': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Order Planning - Pending Orders</h2><p class="text-wise-gray">List of orders that are in process or awaiting action.</p><p class="text-wise-gray text-sm mt-2">Pending orders: 12</p>`,
    },
    'order-history': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Order Planning - Order History</h2><p class="text-wise-gray">Archive of all completed orders.</p><p class="text-wise-gray text-sm mt-2">Total completed orders: 500</p>`,
    },
    work: {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Work Management</h2>
            <p class="text-wise-gray mb-4">Assign tasks, track progress, and manage your workforce efficiently. Select a sub-category from the sidebar.</p>
            <div class="bg-wise-light-gray p-4 rounded-lg shadow-sm">
                <h3 class="font-medium text-wise-dark-gray">Overview</h3>
                <ul class="list-disc list-inside text-wise-gray text-sm mt-2 space-y-1">
                    <li>Tasks Completed (Today): 5</li>
                    <li>Pending Tasks: 12</li>
                </ul>
            </div>
        `,
    },
    'work-tasks': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Work - Tasks</h2><p class="text-wise-gray">List of assigned tasks and their status.</p><p class="text-wise-gray text-sm mt-2">Active tasks: 8</p>`,
    },
    'work-schedule': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Work - Schedule</h2><p class="text-wise-gray">Work schedule for all teams and individuals.</p><p class="text-wise-gray text-sm mt-2">Today's schedule: Full</p>`,
    },
    'work-teams': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Work - Teams</h2><p class="text-wise-gray">List of work teams and their members.</p><p class="text-wise-gray text-sm mt-2">Count: 5</p>`,
    },
    'cross-application': {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Cross Application Management</h2>
            <p class="text-wise-gray mb-4">Manage integrations and data flow between different applications. Select a sub-category from the sidebar.</p>
            <div class="bg-wise-light-gray p-4 rounded-lg shadow-sm">
                <h3 class="font-medium text-wise-dark-gray">Connected Systems</h3>
                <ul class="list-disc list-inside text-wise-gray text-sm mt-2 space-y-1">
                    <li>CRM System (Active)</li>
                    <li>ERP System (Active)</li>
                </ul>
            </div>
        `,
    },
    'cross-app-integrations': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Cross Application - Integrations</h2><p class="text-wise-gray">Status and configuration of application integrations.</p><p class="text-wise-gray text-sm mt-2">Active integrations: 3</p>`,
    },
    'cross-app-data-sync': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Cross Application - Data Synchronization</h2><p class="text-wise-gray">Track data synchronization status between systems.</p><p class="text-wise-gray text-sm mt-2">Last sync: 10 minutes ago</p>`,
    },
    'cross-app-api': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Cross Application - API Management</h2><p class="text-wise-gray">Manage API keys and access for integrations.</p><p class="text-wise-gray text-sm mt-2">Active API keys: 7</p>`,
    },
    inventory: {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Inventory Overview</h2>
            <p class="text-wise-gray mb-4">Select an inventory location from the sidebar to view details.</p>
            <div class="bg-wise-light-gray p-4 rounded-lg shadow-sm">
                <h3 class="font-medium text-wise-dark-gray">Summary</h3>
                <p class="text-wise-gray text-sm mt-2">Total Items Across All Locations: 1,500</p>
                <p class="text-wise-gray text-sm">Available for Use: 1,200</p>
            </div>
        `,
    },
    yard: {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Inventory - Yard</h2><p class="text-wise-gray">Manage inventory located in the yard.</p><p class="text-wise-gray text-sm mt-2">Item count: 150</p>`,
    },
    warehouse: {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Inventory - Warehouse</h2><p class="text-wise-gray">Manage inventory located in the warehouse.</p><p class="text-wise-gray text-sm mt-2">Item count: 1000</p>`,
    },
    storage: {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Inventory - Storage</h2><p class="text-wise-gray">Manage long-term or overflow storage.</p><p class="text-wise-gray text-sm mt-2">Item count: 350</p>`,
    },
    performance: {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Performance Management</h2>
            <p class="text-wise-gray mb-4">Monitor and analyze performance metrics for various operations and personnel. Select a sub-category from the sidebar.</p>
            <div class="bg-wise-light-gray p-4 rounded-lg shadow-sm">
                <h3 class="font-medium text-wise-dark-gray">Key Performance Indicators (KPIs)</h3>
                <ul class="list-disc list-inside text-wise-gray text-sm mt-2 space-y-1">
                    <li>On-Time Delivery Rate: 98%</li>
                    <li>Task Completion Rate: 95%</li>
                </ul>
            </div>
        `,
    },
    'performance-kpis': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Performance - KPIs</h2><p class="text-wise-gray">View key performance metrics.</p><p class="text-wise-gray text-sm mt-2">KPIs: 5 active</p>`,
    },
    'performance-analytics': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Performance - Analytics</h2><p class="text-wise-gray">Analyze detailed performance data.</p><p class="text-wise-gray text-sm mt-2">Last report: Today</p>`,
    },
    'performance-goals': {
        detail: `<h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Performance - Goals</h2><p class="text-wise-gray">Track and manage performance goals.</p><p class="text-wise-gray text-sm mt-2">Active goals: 3</p>`,
    },

    'setting-optimization': {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Setting Optimization</h2>
            <p class="text-wise-gray mb-4">Manage settings to optimize system performance and notification preferences.</p>
            <div class="bg-wise-light-gray p-4 rounded-lg shadow-sm">
                <h3 class="font-medium text-wise-dark-gray">Setting Overview</h3>
                <ul class="list-disc list-inside text-wise-gray text-sm mt-2 space-y-1">
                    <li>Optimization Status: Active</li>
                    <li>Automatic Updates: Enabled</li>
                    <li>Email Notifications: Enabled</li>
                </ul>
            </div>
        `,
    },
    'setting-optimization-general': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">General Settings</h2>
            <p class="text-wise-gray">Configure basic system settings.</p>
            <div class="mt-4 space-y-4">
                <div>
                    <label for="auto-update" class="flex items-center">
                        <input type="checkbox" id="auto-update" class="form-checkbox h-4 w-4 text-wise-primary rounded border-wise-border focus:ring-wise-primary" checked>
                        <span class="ml-2 text-sm text-wise-dark-gray">Enable Automatic Updates</span>
                    </label>
                </div>
                <div>
                    <label for="language-select" class="block text-sm font-medium text-wise-dark-gray mb-1">Language:</label>
                    <select id="language-select" class="w-full px-3 py-2 border border-wise-border rounded-md shadow-sm focus:outline-none focus:ring-wise-primary focus:border-wise-primary sm:text-sm bg-white text-wise-dark-gray">
                        <option value="id">Indonesian</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        `,
    },
    'setting-optimization-performance': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Performance Adjustments</h2>
            <p class="text-wise-gray">Optimize application performance.</p>
            <div class="mt-4 space-y-4">
                <div>
                    <label for="cache-size" class="block text-sm font-medium text-wise-dark-gray mb-1">Cache Size (MB):</label>
                    <input type="number" id="cache-size" value="256" class="w-full px-3 py-2 border border-wise-border rounded-md shadow-sm focus:outline-none focus:ring-wise-primary focus:border-wise-primary sm:text-sm bg-white text-wise-dark-gray">
                </div>
                <div>
                    <label for="data-compression" class="flex items-center">
                        <input type="checkbox" id="data-compression" class="form-checkbox h-4 w-4 text-wise-primary rounded border-wise-border focus:ring-wise-primary">
                        <span class="ml-2 text-sm text-wise-dark-gray">Enable Data Compression</span>
                    </label>
                </div>
            </div>
        `,
    },
    'setting-optimization-notifications': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Notification Preferences</h2>
            <p class="text-wise-gray">Set how you receive notifications.</p>
            <div class="mt-4 space-y-4">
                <div>
                    <label for="email-notifications" class="flex items-center">
                        <input type="checkbox" id="email-notifications" class="form-checkbox h-4 w-4 text-wise-primary rounded border-wise-border focus:ring-wise-primary" checked>
                        <span class="ml-2 text-sm text-wise-dark-gray">Email Notifications</span>
                    </label>
                </div>
                <div>
                    <label for="sms-notifications" class="flex items-center">
                        <input type="checkbox" id="sms-notifications" class="form-checkbox h-4 w-4 text-wise-primary rounded border-wise-border focus:ring-wise-primary">
                        <span class="ml-2 text-sm text-wise-dark-gray">SMS Notifications</span>
                    </label>
                </div>
            </div>
        `,
    },
    'system-management-users': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">System Management Users</h2>
            <p class="text-wise-gray">Kelola semua pengguna yang ada di dalam sistem.</p>
            <p class="text-wise-gray text-sm mt-2">Total Pengguna: 5</p>
        `
    },
    'system-management-logs': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">System Management Log</h2>
            <p class="text-wise-gray">Kelola semua log pengguna yang ada di dalam sistem.</p>
            <p class="text-wise-gray text-sm mt-2">Total Log Pengguna: 5</p>
        `,
    },
    'system-management-backup': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">System Management Backup</h2>
            <p class="text-wise-gray">Kelola cadangan sistem.</p>
            <p class="text-wise-gray text-sm mt-2">Total Cadangan Tersedia: 5</p>
        `,
    },
    'archive': {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Data Archiving</h2>
            <p class="text-wise-gray mb-4">Kelola data yang diarsipkan di sini. Pilih sub-kategori dari sidebar.</p>
            <div class="bg-wise-light-gray p-4 rounded-lg shadow-sm">
                <h3 class="font-medium text-wise-dark-gray">Ringkasan Arsip</h3>
                <ul class="list-disc list-inside text-wise-gray text-sm mt-2 space-y-1">
                    <li>Total Dokumen Diarsipkan: 150</li>
                    <li>Total Media Diarsipkan: 75</li>
                    <li>Total Arsip Keuangan: 40</li>
                </ul>
            </div>
        `,
    },
    'archive-documents': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Archive Documments</h2>
            <p class="text-wise-gray">Lihat dan kelola semua dokumen yang diarsipkan.</p>
            <p class="text-wise-gray text-sm mt-2">Total dokumen: 150</p>
        `,
    },
    'archive-media': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Archive Media</h2>
            <p class="text-wise-gray">Lihat dan kelola semua file media yang diarsipkan.</p>
            <p class="text-wise-gray text-sm mt-2">Total file media: 75</p>
        `,
    },
    'archive-financial': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Archive Financial</h2>
            <p class="text-wise-gray">Lihat dan kelola semua laporan keuangan yang diarsipkan.</p>
            <p class="text-wise-gray text-sm mt-2">Total laporan keuangan: 40</p>
        `,
    },
    configuration: {
        full: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">System Configuration</h2>
            <p class="text-wise-gray mb-4">Here you can manage various configurations for the WISE system. Select a sub-category from the sidebar to manage Warehouse, Zone, or Location Type.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-wise-light-gray p-5 rounded-lg shadow-md">
                    <h3 class="text-lg font-medium text-wise-dark-gray mb-2">Warehouse Management</h3>
                    <p class="text-wise-gray text-sm mt-1">Manage warehouse details, including addresses and authorized users.</p>
                    <button class="mt-4 px-4 py-2 bg-wise-primary text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md active-press transform" onclick="selectCategory('configuration-warehouse')">
                        Manage Warehouses
                    </button>
                </div>
                <div class="bg-wise-light-gray p-5 rounded-lg shadow-md">
                    <h3 class="text-lg font-medium text-wise-dark-gray mb-2">Zone Management</h3>
                    <p class="text-wise-gray text-sm mt-1">Define and manage various zones within the warehouse.</p>
                    <button class="mt-4 px-4 py-2 bg-wise-primary text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md active-press transform" onclick="selectCategory('configuration-zone')">
                        Manage Zones
                    </button>
                </div>
                <div class="bg-wise-light-gray p-5 rounded-lg shadow-md">
                    <h3 class="text-lg font-medium text-wise-dark-gray mb-2">Location Type Management</h3>
                    <p class="text-wise-gray text-sm mt-1">Configure storage location types based on dimensions and weight.</p>
                    <button class="mt-4 px-4 py-2 bg-wise-primary text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md active-press transform" onclick="selectCategory('configuration-location-type')">
                        Manage Location Types
                    </button>
                </div>
                <div class="bg-wise-light-gray p-5 rounded-lg shadow-md">
                    <h3 class="text-lg font-medium text-wise-dark-gray mb-2">Locating Strategy Management</h3>
                    <p class="text-wise-gray text-sm mt-1">Manage strategies used to place items in warehouse locations.</p>
                    <button class="mt-4 px-4 py-2 bg-wise-primary text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md active-press transform" onclick="selectCategory('locating-strategies')">
                        Manage Locating Strategies
                    </button>
                </div>
                <div class="bg-wise-light-gray p-5 rounded-lg shadow-md">
                    <h3 class="text-lg font-medium text-wise-dark-gray mb-2">Locating Rule Management</h3>
                    <p class="text-wise-gray text-sm mt-1">Define rules that determine how items are placed in warehouse locations.</p>
                    <button class="mt-4 px-4 py-2 bg-wise-primary text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md active-press transform" onclick="selectCategory('locating-rule')">
                        Manage Locating Rules
                    </button>
                </div>
            </div>
        `,
    },
    'configuration-warehouse': {
        full: `<div id="warehouse-management-content"></div>`, // Placeholder for React component content
    },
    'configuration-zone': {
        full: `<div id="zone-management-content"></div>`, // Placeholder for React component content
    },
    'configuration-location-type': {
        full: `<div id="location-type-management-content"></div>`, // Placeholder for React component content
    },
    'article a': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Article A Details</h2>
            <p class="text-wise-gray">This is the detailed content for Article A. It has just been updated and contains important information regarding system updates.</p>
            <p class="text-wise-gray text-sm mt-2">Last updated: 2 hours ago</p>
        `,
    },
    'paragraph b': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Paragraph B Details</h2>
            <p class="text-wise-gray">Here you will find more information about Paragraph B. This section covers various aspects of data handling and processing.</p>
            <p class="text-wise-gray text-sm mt-2">Last updated: 1 hour ago</p>
        `,
    },
    'method c': {
        detail: `
            <h2 class="text-xl md:text-2xl font-semibold text-wise-dark-gray mb-4">Method C Details</h2>
            <p class="text-wise-gray">Details about Method C, including its implementation steps and best practices. This method is crucial for optimizing performance.</p>
            <p class="text-wise-gray text-sm mt-2">Last updated: 30 minutes ago</p>
        `,
    },
    'locating-strategies': {
        full: `<div id="locating-strategy-management-content"></div>`, // Placeholder for React component content
    },
    'locating-rule': {
        full: `<div id="locating-rule-management-content"></div>`, // Placeholder for React component content
    },
    'security-group': {
        full: `<div id="security-group-management-content"></div>`, // Placeholder for React component content
    },
    'security-permission': {
        full: `<div id="security-permission-management-content"></div>`, // Placeholder for React component content
    },
};

export const searchItems = [
    { id: 'article a', title: 'Article A', category: 'General', lastUpdated: '2 hours ago' },
    { id: 'paragraph b', title: 'Paragraph B', category: 'Documentation', lastUpdated: '1 hour ago' },
    { id: 'method c', title: 'Method C', category: 'Technical', lastUpdated: '30 minutes ago' },
    { id: 'recent-booking', title: 'New order for Project Alpha', category: 'Orders', lastUpdated: '5 minutes ago' },
    { id: 'crew-task', title: 'Crew #123 completed task', category: 'Work', lastUpdated: '1 hour ago' },
    { id: 'inventory-update', title: 'Inventory update: 10 units added to Warehouse', category: 'Inventory', lastUpdated: '3 hours ago' },
    { id: 'vehicle-a', title: 'Heavy Loader A', category: 'Yard Management', lastUpdated: '1 day ago' },
    { id: 'delivery-x', title: 'Delivery X from Supplier A', category: 'Receiving', lastUpdated: '4 hours ago' },
    { id: 'order-123', title: 'Customer Order #123', category: 'Order Planning', lastUpdated: '1 day ago' },
    { id: 'integration-crm', title: 'CRM Integration Status', category: 'Cross Application', lastUpdated: '1 hour ago' },
    { id: 'report-q1', title: 'Q1 Performance Report', category: 'Performance', lastUpdated: '2 weeks ago' },
    { id: 'setting-notifications', title: 'Notification Preferences', category: 'Setting Optimization', lastUpdated: 'Yesterday' },
    { id: 'log-errors', title: 'Error Logs', category: 'System Management', lastUpdated: '5 minutes ago' },
    { id: 'archive-finance', title: 'Financial Report 2023', category: 'Data Archiving', lastUpdated: 'Jan 2024' },
    { id: 'yard-vehicles', title: 'Yard Vehicles', category: 'Yard Management', lastUpdated: 'Just updated' },
    { id: 'yard-equipment', title: 'Yard Equipment', category: 'Yard Management', lastUpdated: 'Just updated' },
    { id: 'yard-personnel', title: 'Yard Personnel', category: 'Yard Management', lastUpdated: 'Just updated' },
    { id: 'receiving-deliveries', title: 'Receiving Deliveries', category: 'Receiving', lastUpdated: 'Today' },
    { id: 'receiving-returns', title: 'Receiving Returns', category: 'Receiving', lastUpdated: 'Last week' },
    { id: 'receiving-vendors', title: 'Receiving Vendors', category: 'Receiving', lastUpdated: 'Monthly' },
    { id: 'order-new', title: 'New Orders', category: 'Order Planning', lastUpdated: 'Today' },
    { id: 'order-pending', title: 'Pending Orders', category: 'Order Planning', lastUpdated: 'Ongoing' },
    { id: 'order-history', title: 'Order History', category: 'Order Planning', lastUpdated: 'All time' },
    { id: 'work-tasks', title: 'Work Tasks', category: 'Work', lastUpdated: 'Active' },
    { id: 'work-schedule', title: 'Work Schedule', category: 'Work', lastUpdated: 'Daily' },
    { id: 'work-teams', title: 'Work Teams', category: 'Work', lastUpdated: 'Active' },
    { id: 'cross-app-integrations', title: 'Cross Application Integrations', category: 'Cross Application', lastUpdated: 'Active' },
    { id: 'cross-app-data-sync', title: 'Cross Application Data Sync', category: 'Cross Application', lastUpdated: 'Latest' },
    { id: 'cross-app-api', title: 'Cross Application API Management', category: 'Cross Application', lastUpdated: 'Active' },
    { id: 'performance-kpis', title: 'Performance KPIs', category: 'Performance', lastUpdated: 'Live' },
    { id: 'performance-analytics', title: 'Performance Analytics', category: 'Performance', lastUpdated: 'Daily' },
    { id: 'performance-goals', title: 'Performance Goals', category: 'Performance', lastUpdated: 'Quarterly' },
    { id: 'configuration-warehouse', title: 'Warehouse Configuration', category: 'Configuration', lastUpdated: 'Latest' },
    { id: 'configuration-zone', title: 'Zone Configuration', category: 'Configuration', lastUpdated: 'Latest' },
    { id: 'configuration-location-type', title: 'Location Type Configuration', category: 'Configuration', lastUpdated: 'Latest' },
    { id: 'system-users', title: 'System Users', category: 'System Management', lastUpdated: 'Active' },
    { id: 'system-logs', title: 'System Logs', category: 'System Management', lastUpdated: 'Latest' },
    { id: 'system-backup', title: 'System Backup', category: 'System Management', lastUpdated: 'Daily' },
    { id: 'data-archiving', title: 'Data Archiving', category: 'System Management', lastUpdated: 'Weekly' },
    { id: 'archive-documents', title: 'Archived Documents', category: 'Data Archiving', lastUpdated: 'Old' },
    { id: 'archive-media', title: 'Archived Media', category: 'Data Archiving', lastUpdated: 'Old' },
    { id: 'archive-financial', title: 'Archived Financial', category: 'Data Archiving', lastUpdated: 'Old' },

    { id: 'setting-optimization-general', title: 'General Settings', category: 'Setting Optimization', lastUpdated: 'Just now' },
    { id: 'setting-optimization-performance', title: 'Performance Adjustments', category: 'Setting Optimization', lastUpdated: 'Today' },
    { id: 'setting-optimization-notifications', title: 'Notification Preferences', category: 'Setting Optimization', lastUpdated: 'Yesterday' },

    { id: 'locating-strategies', title: 'Locating Strategies', category: 'Configuration', lastUpdated: 'Latest' },
    { id: 'locating-rule', title: 'Locating Rule', category: 'Configuration', lastUpdated: 'Latest' },

    { id: 'security-group', title: 'Security Group Management', category: 'System Management', lastUpdated: 'Just now' },
    { id: 'security-permission', title: 'Security Permission Management', category: 'System Management', lastUpdated: 'Just now' },
];

export const parentMapping = {
    'yard-vehicles': 'yard-management', 'yard-equipment': 'yard-management', 'yard-personnel': 'yard-management',
    'receiving-deliveries': 'receiving', 'receiving-returns': 'receiving', 'receiving-vendors': 'receiving',
    'order-new': 'order', 'order-pending': 'order', 'order-history': 'order',
    'work-tasks': 'work', 'work-schedule': 'work', 'work-teams': 'work',
    'cross-app-integrations': 'cross-application', 'cross-app-data-sync': 'cross-application', 'cross-app-api': 'cross-application',
    'yard': 'inventory', 'warehouse': 'inventory', 'storage': 'inventory',
    'performance-kpis': 'performance', 'performance-analytics': 'performance', 'performance-goals': 'performance',
    'configuration-warehouse': 'configuration', 'configuration-zone': 'configuration', 'configuration-location-type': 'configuration',
    'system-users': 'system-management', 'system-logs': 'system-management', 'system-backup': 'system-management',
    'setting-optimization-general': 'setting-optimization',
    'setting-optimization-performance': 'setting-optimization',
    'setting-optimization-notifications': 'setting-optimization',
    'locating-strategies': 'configuration',
    'locating-rule': 'configuration',
    'archive-documents': 'archive',
    'archive-media': 'archive',
    'archive-financial': 'archive',
    'security-group': 'configuration',
    'security-permission': 'configuration',
};

export const initialWarehouses = JSON.parse(localStorage.getItem('warehouses')) || [
    { id: 'DCB', description: 'DC BUAH BATU', active: true, address1: 'JL TERUSAN BUAH BATU NO 12, BATUNUNGGAL', address2: '', address3: '', city: 'Bandung', state: 'West Java', postalCode: '40266', country: 'Indonesia', faxNumber: '(022)-88884377', attentionTo: '', phoneNumber: '(022)-7540576 / 77', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: 'DC BUAH BATU', returnAddress1: 'JL TERUSAN BUAH BATU NO 12, BATUNUNGGAL, BANDUNG.', returnAddress2: '', returnAddress3: '', returnCity: 'Bandung', returnState: 'West Java', returnPostalCode: '40266', returnCountry: 'Indonesia', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '\\\\scale\\fs\\vls\\Report\\DCB', userDefinedField1: 'PT. AKUR PRATAMA', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '8.00000', userDefinedField8: '0.00000', users: ['Abdu23074560', 'Abdul04120625', 'Abdul9100020', 'Ades17080031', 'Adil2010099', 'Adil2020284', 'Adi22110060', 'Adli23070426', 'Adli24070022', 'Administrator', 'ADMReturDCB', 'Alfandi24051301', 'Agung15050074', 'Agung92060006', 'AgusHDA182', 'Aji18100334', 'Aldi18101752', 'Ali17120115', 'Andri06010006', 'Andri10010079', 'Angg', 'Anthc', 'Anwa', 'Apep', 'Arif14', 'anueu03090082'] },
    { id: 'DCC', description: 'DC CIKONENG', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCE', description: 'DC EXTENTION', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCF', description: 'DC BUAH BATU FRESH', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCJ', description: 'DC JAKARTA', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCK', description: 'DC KAYU MANIS', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCL', description: 'DC LEUWIPANJANG', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCM', description: 'DC MOCHAMAD TOHA', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCP', description: 'DC PELABUHAN RATU', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCS', description: 'DC SUMBER', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCT', description: 'DC TEGAL', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'DCY', description: 'DC YOMIMART', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
    { id: 'GBG', description: 'DC GEDE BAGE', active: true, address1: '', address2: '', address3: '', city: '', state: '', postalCode: '', country: '', faxNumber: '', attentionTo: '', phoneNumber: '', emailAddress: '', uccEanNumber: '', returnAddressSame: false, returnName: '', returnAddress1: '', returnAddress2: '', returnAddress3: '', returnCity: '', returnState: '', postalCode: '', returnCountry: '', returnFaxNumber: '', returnAttentionTo: '', returnPhoneNumber: '', returnEmailAddress: '', returnUccEanNumber: '', slottingMoveFileDirectory: '', defaultLocationForUnslottedItems: '', renderedDocumentPdfFileDirectory: '', userDefinedField1: '', userDefinedField2: '', userDefinedField3: '', userDefinedField4: '', userDefinedField5: '', userDefinedField6: '', userDefinedField7: '', userDefinedField8: '', users: [] },
];

export const initialZones = JSON.parse(localStorage.getItem('zones')) || [
    { id: 'Allocation', identifier: 'Allocation', recordType: 'ZONETYPE', description: 'Allocation', systemValue1: 'Yes', systemCreated: true, active: true },
    { id: 'Locating', identifier: 'Locating', recordType: 'ZONETYPE', description: 'Locating', systemValue1: 'Yes', systemCreated: true, active: true },
    { id: 'Work', identifier: 'Work', recordType: 'ZONETYPE', description: 'Work', systemValue1: 'Yes', systemCreated: true, active: true },
];

export const initialLocationTypes = JSON.parse(localStorage.getItem('locationTypes')) || [
    { id: 'CFLOW RESV TYPE 1', locationType: 'CFLOW RESV TYPE 1', length: 120.00, width: 30.00, height: 120.00, dimensionUM: 'CM', maximumWeight: 1000.00, weightUM: 'KG', active: true, lastUpdated: '01-07-2019 9:46:38 AM User: suhartono' },
    { id: 'CARTON FLOW', locationType: 'CARTON FLOW', length: 180.00, width: 60.00, height: 80.00, dimensionUM: 'CM', maximumWeight: 200.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 100/120/80', locationType: 'CARTON FLOW 100/120/80', length: 100.00, width: 120.00, height: 80.00, dimensionUM: 'CM', maximumWeight: 500.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 140/73/40', locationType: 'CARTON FLOW 140/73/40', length: 140.00, width: 73.00, height: 40.00, dimensionUM: 'CM', maximumWeight: 500.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 37/130/60', locationType: 'CARTON FLOW 37/130/60', length: 37.00, width: 130.00, height: 60.00, dimensionUM: 'CM', maximumWeight: 500.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 40/18/40', locationType: 'CARTON FLOW 40/18/40', length: 40.00, width: 18.00, height: 40.00, dimensionUM: 'CM', maximumWeight: 250.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 40/37/40', locationType: 'CARTON FLOW 40/37/40', length: 40.00, width: 37.00, height: 40.00, dimensionUM: 'CM', maximumWeight: 250.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 5 SLOT', locationType: 'CARTON FLOW 5 SLOT', length: 46.00, width: 120.00, height: 88.00, dimensionUM: 'CM', maximumWeight: 300.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 55/70/45', locationType: 'CARTON FLOW 55/70/45', length: 55.00, width: 70.00, height: 45.00, dimensionUM: 'CM', maximumWeight: 200.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 7 SLOT', locationType: 'CARTON FLOW 7 SLOT', length: 32.00, width: 120.00, height: 94.00, dimensionUM: 'CM', maximumWeight: 300.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 70/28/40', locationType: 'CARTON FLOW 70/28/40', length: 70.00, width: 28.00, height: 40.00, dimensionUM: 'CM', maximumWeight: 200.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 70/50/40', locationType: 'CARTON FLOW 70/50/40', length: 70.00, width: 50.00, height: 40.00, dimensionUM: 'CM', maximumWeight: 250.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CARTON FLOW 80/40/55', locationType: 'CARTON FLOW 80/40/55', length: 80.00, width: 40.00, height: 55.00, dimensionUM: 'CM', maximumWeight: 250.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CFLOW.TYPE A', locationType: 'CFLOW.TYPE A', length: 82.00, width: 30.00, height: 93.00, dimensionUM: 'CM', maximumWeight: 70.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CFLOW.TYPE B', locationType: 'CFLOW.TYPE B', length: 42.00, width: 38.00, height: 50.00, dimensionUM: 'CM', maximumWeight: 70.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CFLOW RESV 115cm', locationType: 'CFLOW RESERVE 115cm', length: 239.00, width: 122.00, height: 115.00, dimensionUM: 'CM', maximumWeight: 400.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CFLOW RESV 55cm', locationType: 'CFLOW RESERVE 55cm', length: 239.00, width: 122.00, height: 55.00, dimensionUM: 'CM', maximumWeight: 400.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CFLOW RESV 70cm', locationType: 'CFLOW RESERVE 70cm', length: 239.00, width: 122.00, height: 70.00, dimensionUM: 'CM', maximumWeight: 400.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CFLOW RESV 90cm', locationType: 'CFLOW RESERVE 90cm', length: 239.00, width: 122.00, height: 90.00, dimensionUM: 'CM', maximumWeight: 250.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CFLOW RESV TYPE A', locationType: 'CFLOW RESV TYPE A', length: 40.00, width: 80.00, height: 80.00, dimensionUM: 'CM', maximumWeight: 200.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CFLOW RESV TYPE B', locationType: 'CFLOW RESV TYPE B', length: 40.00, width: 80.00, height: 80.00, dimensionUM: 'CM', maximumWeight: 200.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CFLOW RESV TYPE C', locationType: 'CFLOW RESV TYPE C', length: 37.00, width: 40.00, height: 40.00, dimensionUM: 'CM', maximumWeight: 200.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CONTAINER FACE', locationType: 'CONTAINER FACE', length: 62.00, width: 42.00, height: 26.00, dimensionUM: 'CM', maximumWeight: 150.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CONTAINER PINK 2002', locationType: 'CONTAINER PINK 2002', length: 63.00, width: 43.00, height: 25.00, dimensionUM: 'CM', maximumWeight: 150.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CONTAINER PINK 2004', locationType: 'CONTAINER PINK 2004', length: 63.00, width: 43.00, height: 25.00, dimensionUM: 'CM', maximumWeight: 150.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CONTAINER PINK 2006', locationType: 'CONTAINER PINK 2006', length: 63.00, width: 43.00, height: 25.00, dimensionUM: 'CM', maximumWeight: 150.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CONTAINER PINK 2010', locationType: 'CONTAINER PINK 2010', length: 63.00, width: 43.00, height: 25.00, dimensionUM: 'CM', maximumWeight: 150.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'CONTAINER PINK 2055', locationType: 'CONTAINER PINK 2055', length: 62.00, width: 42.00, height: 26.00, dimensionUM: 'CM', maximumWeight: 150.00, weightUM: 'KG', active: true, lastUpdated: '' },
    { id: 'DCB LOADING LANE', locationType: 'DCB LOADING LANE', length: 0.00, width: 0.00, height: 0.00, dimensionUM: 'CM', maximumWeight: 0.00, weightUM: 'KG', active: true, lastUpdated: '' },
];

export const initialLocatingStrategies = JSON.parse(localStorage.getItem('locatingStrategies')) || [
    { id: 'LOCSTRAT_DEFAULT', identifier: 'DEFAULT', recordType: 'LOCSTRAT', description: 'Default Locating Strategy', inactive: false, systemCreated: true, lastUpdated: '01-01-2023 10:00:00 AM User: SYSTEM' },
    { id: 'LOCSTRAT_FAST_MOVERS', identifier: 'FAST_MOVERS', recordType: 'LOCSTRAT', description: 'Strategy for fast moving items', inactive: false, systemCreated: false, lastUpdated: '01-01-2023 10:00:00 AM User: Admin' },
    { id: 'LOCSTRAT_OVERSTOCK', identifier: 'OVERSTOCK', recordType: 'LOCSTRAT', description: 'Strategy for overstock items', inactive: true, systemCreated: false, lastUpdated: '01-01-2023 10:00:00 AM User: Admin' },
];

export const initialLocatingRules = JSON.parse(localStorage.getItem('locatingRules')) || [
    {
        id: 'LOC_RULE_A',
        ruleName: 'LOC_RULE_A',
        description: 'Rule for small items',
        delayedLocating: false,
        inactive: false,
        detailRecords: [
            { sequence: 1, field: 'Item Size', operator: '<', value: 'Small' },
            { sequence: 2, field: 'Zone Type', operator: '=', value: 'PICKING' }
        ],
        lastUpdated: '01-01-2023 11:00:00 AM User: SYSTEM'
    },
    {
        id: 'LOC_RULE_B',
        ruleName: 'LOC_RULE_B',
        description: 'Second Locating Rule',
        delayedLocating: true,
        inactive: false,
        detailRecords: [
            { sequence: 1, field: 'Weight', operator: '>', value: '50KG' },
            { sequence: 2, field: 'Location Type', operator: '=', value: 'PALLET' }
        ],
        lastUpdated: '01-01-2023 11:00:00 AM User: Admin'
    },
];

export const initialSecurityGroups = JSON.parse(localStorage.getItem('securityGroups')) || [
    { id: 'ADMIN', groupName: 'ADMIN', description: 'Administrator Group', inactive: false, users: ['Administrator', 'Agung15050074', 'Aji18100334'], userDefinedFields: { field1: 'Data Admin 1', field2: 'Data Admin 2'} },
    { id: 'OPERATOR', groupName: 'OPERATOR', description: 'Operator Group', inactive: false, users: ['Operator1', 'Operator2'], userDefinedFields: {} },
    { id: 'VIEWER', groupName: 'VIEWER', description: 'Viewer Group', inactive: true, users: [], userDefinedFields: {} },
];

export const initialSecurityPermissions = JSON.parse(localStorage.getItem('securityPermissions')) || [
    { id: 'admin-access', name: 'Admin Full Access', description: 'Full access for administrators', inactive: false, menus: ['config-company', 'config-billing', 'proc-item-maintenance'] },
    { id: 'viewer-access', name: 'Viewer Access', description: 'View-only access', inactive: false, menus: ['gadget-report'] },
    { id: 'operator-access', name: 'Operator Standard', description: 'Standard access for operators', inactive: true, menus: ['proc-item-maintenance'] },
];

export const allMenus = [
    { id: 'config-billing', name: 'Billing Record Trigger', category: 'Configurations' },
    { id: 'config-company', name: 'Company', category: 'Configurations' },
    { id: 'config-main', name: 'Configuration', category: 'Configurations' },
    { id: 'gadget-report', name: 'Gadget Report', category: 'Gadgets' },
    { id: 'gadget-dashboard', name: 'Gadget Dashboard', category: 'Gadgets' },
    { id: 'proc-adjustment', name: 'Adjustment Reason', category: 'Processing' },
    { id: 'proc-item-maintenance', name: 'Item Maintenance', category: 'Processing' },
];

export const allUsers = [
    'Abdu23074560', 'Abdul04120625', 'Abdul9100020', 'Ades17080031', 'Adil2010099', 'Adil2020284',
    'Adi22110060', 'Adli23070426', 'Adli24070022', 'Administrator', 'ADMReturDCB', 'Alfandi24051301',
    'Agung15050074', 'Agung92060006', 'AgusHDA182', 'Aji18100334', 'Aldi18101752', 'Ali17120115',
    'Andri06010006', 'Andri10010079', 'Angg', 'Anthc', 'Anwa', 'Apep', 'Arif14', 'anueu03090082'
];