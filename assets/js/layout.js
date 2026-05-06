// assets/js/layout.js

// 1. Centralized CSS Injection for Smooth Animations & Containment
const sidebarStyles = `
<style id="siyam-sidebar-styles">
    .sidebar-transition { transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    .nav-text, .profile-data { 
        transition: max-width 0.3s ease, opacity 0.3s ease, margin 0.3s ease; 
        max-width: 200px; 
        overflow: hidden; 
        opacity: 1; 
    }
    .nav-header { 
        transition: max-height 0.3s ease, opacity 0.3s ease, margin 0.3s ease; 
        max-height: 50px; 
        overflow: hidden; 
    }
    
    .sidebar-collapsed .nav-text { max-width: 0; opacity: 0; pointer-events: none; margin-left: 0 !important; }
    .sidebar-collapsed .profile-data { max-width: 0; opacity: 0; pointer-events: none; margin-left: 0 !important; }
    .sidebar-collapsed .nav-header { max-height: 0; opacity: 0; margin-top: 0; margin-bottom: 0; border: none; }
</style>
`;
document.head.insertAdjacentHTML('beforeend', sidebarStyles);

// 2. State Management & Initialization (MPA Persistence)
let sidebarCollapsed = localStorage.getItem('siyam_sidebar_state') === 'collapsed';

window.toggleSidebar = function() {
    const sidebar = document.getElementById('main-sidebar');
    const chevron = document.getElementById('sidebar-chevron');
    sidebarCollapsed = !sidebarCollapsed;
    
    if (sidebarCollapsed) {
        localStorage.setItem('siyam_sidebar_state', 'collapsed');
        sidebar.classList.remove('w-64');
        sidebar.classList.add('w-[72px]', 'sidebar-collapsed');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
    } else {
        localStorage.setItem('siyam_sidebar_state', 'expanded');
        sidebar.classList.remove('w-[72px]', 'sidebar-collapsed');
        sidebar.classList.add('w-64');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
    }
};

// 3. Updated Sidebar HTML with Flexbox Containment
const sidebarHTML = `
    <aside id="main-sidebar" class="${sidebarCollapsed ? 'w-[72px] sidebar-collapsed' : 'w-64'} bg-brand-forest text-white flex flex-col shrink-0 z-30 sidebar-transition relative border-r border-brand-forestLight/30 shadow-ledger">
        
        <button onclick="toggleSidebar()" class="absolute -right-3 top-5 w-6 h-6 bg-brand-paper border border-brand-sandDark rounded-full flex items-center justify-center text-gray-500 hover:text-brand-forest shadow-sm z-40 transition-transform">
            <i data-lucide="chevron-left" id="sidebar-chevron" class="w-4 h-4" style="transform: ${sidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'}"></i>
        </button>

        <div class="h-16 flex items-center px-4 border-b border-brand-forestLight/30 shrink-0 overflow-hidden">
            <div class="w-8 h-8 rounded bg-brand-forestLight/40 flex items-center justify-center shrink-0">
                <i data-lucide="paw-print" class="w-4 h-4 text-brand-sand/80 shrink-0"></i>
            </div>
            <span class="nav-text ml-3 text-white font-bold tracking-wide">DAS <span class="font-normal text-brand-sand/80">SIYAM</span></span>
        </div>

        <nav class="flex-1 overflow-y-auto custom-scrollbar py-6 flex flex-col gap-1 px-3">
            
            <p class="nav-header px-3 text-[10px] font-bold text-brand-sand/60 uppercase tracking-widest mb-2">Operations</p>
            
            <a href="index.html" class="nav-btn w-full flex items-center h-10 px-3 rounded text-brand-sand/80 hover:bg-brand-forestLight/20 hover:text-white font-medium transition-colors group overflow-hidden">
                <i data-lucide="layout-dashboard" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm truncate min-w-0">Dashboard</span>
            </a>

            <a href="inventory.html" class="nav-btn w-full flex items-center h-10 px-3 rounded text-brand-sand/80 hover:bg-brand-forestLight/20 hover:text-white font-medium transition-colors group overflow-hidden">
                <i data-lucide="package" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm truncate min-w-0">Inventory</span>
            </a>

            <a href="population.html" class="nav-btn w-full flex items-center h-10 px-3 rounded text-brand-sand/80 hover:bg-brand-forestLight/20 hover:text-white font-medium transition-colors group overflow-hidden">
                <i data-lucide="dog" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm truncate min-w-0">Pets</span>
            </a>

            <a href="medical.html" class="nav-btn w-full flex items-center h-10 px-3 rounded text-brand-sand/80 hover:bg-brand-forestLight/20 hover:text-white font-medium transition-colors group overflow-hidden">
                <i data-lucide="stethoscope" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm truncate min-w-0">Medical Log</span>
            </a>

            <p class="nav-header px-3 text-[10px] font-bold text-brand-sand/60 uppercase tracking-widest mt-6 mb-2">Support & Growth</p>

            <a href="donation.html" class="nav-btn w-full flex items-center h-10 px-3 rounded text-brand-sand/80 hover:bg-brand-forestLight/20 hover:text-white font-medium transition-colors group overflow-hidden">
                <i data-lucide="heart-handshake" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm truncate min-w-0">Donations</span>
            </a>

            <a href="procurement.html" class="nav-btn w-full flex items-center h-10 px-3 rounded text-brand-sand/80 hover:bg-brand-forestLight/20 hover:text-white font-medium transition-colors group overflow-hidden">
                <i data-lucide="shopping-cart" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm truncate min-w-0">Replenishment</span>
            </a>

            <a href="reports.html" class="nav-btn w-full flex items-center h-10 px-3 rounded text-brand-sand/80 hover:bg-brand-forestLight/20 hover:text-white font-medium transition-colors group overflow-hidden">
                <i data-lucide="bar-chart-3" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm truncate min-w-0">Reports</span>
            </a>

        </nav>

        <div class="p-3 border-t border-brand-forestLight/30 shrink-0 flex flex-col gap-1">
            <a href="setting.html" class="nav-btn w-full flex items-center h-10 px-3 rounded text-brand-sand/80 hover:bg-brand-forestLight/20 hover:text-white font-medium transition-colors group mb-2 overflow-hidden">
                <i data-lucide="settings" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm truncate min-w-0">Settings</span>
            </a>
            
            <div class="flex items-center h-12 px-2 bg-brand-forestLight/20 rounded overflow-hidden shrink-0 border border-brand-forestLight/30 cursor-pointer hover:bg-brand-forestLight/40 transition">
                <div class="w-8 h-8 rounded bg-brand-sand text-brand-forest flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">MB</div>
                <div class="profile-data ml-3 flex-1 min-w-0">
                    <p class="text-xs font-bold text-white truncate">Mike Barnes</p>
                    <p id="global-profile-role" class="text-[10px] text-brand-sand/60 truncate">Admin POV</p>
                </div>
            </div>
        </div>
    </aside>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Inject the sidebar
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

    // Auto-Highlight Active Menu Item & Attach Auto-Minimize Logic
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('a.nav-btn'); 
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Auto-Minimize on Click
        link.addEventListener('click', () => {
            localStorage.setItem('siyam_sidebar_state', 'collapsed');
        });

        if (linkPage === currentPage) {
            // Apply specific "Active" state classes mapped to new design system
            link.classList.remove('text-brand-sand/80', 'font-medium', 'hover:bg-brand-forestLight/20');
            link.classList.add('bg-brand-forestLight/40', 'text-white', 'font-bold');
        }
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
});