// assets/js/layout.js

// 1. Move collapsible logic here so it works globally
let sidebarCollapsed = false;

window.toggleSidebar = function() {
    const sidebar = document.getElementById('main-sidebar');
    const chevron = document.getElementById('sidebar-chevron');
    sidebarCollapsed = !sidebarCollapsed;
    if (sidebarCollapsed) {
        sidebar.classList.remove('w-64');
        sidebar.classList.add('w-[72px]', 'sidebar-collapsed');
        chevron.style.transform = 'rotate(180deg)';
    } else {
        sidebar.classList.remove('w-[72px]', 'sidebar-collapsed');
        sidebar.classList.add('w-64');
        chevron.style.transform = 'rotate(0deg)';
    }
};

// 2. Updated Sidebar HTML with actual MPA Links
const sidebarHTML = `
    <aside id="main-sidebar" class="w-64 bg-brand-primary text-slate-300 flex flex-col shrink-0 z-30 sidebar-transition relative border-r border-slate-800 shadow-xl">
        
        <button onclick="toggleSidebar()" class="absolute -right-3 top-5 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-brand-action shadow-md z-40 transition-transform">
            <i data-lucide="chevron-left" id="sidebar-chevron" class="w-4 h-4"></i>
        </button>

        <div class="h-16 flex items-center px-4 border-b border-white/10 shrink-0 overflow-hidden">
            <div class="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0">
                <i data-lucide="paw-print" class="w-4 h-4 text-brand-action"></i>
            </div>
            <span class="nav-text ml-3 text-white font-black tracking-wide shrink-0 transition-opacity duration-300">DAS <span class="font-normal text-brand-secondary">SIYAM</span></span>
        </div>

        <nav class="flex-1 overflow-y-auto custom-scrollbar py-6 flex flex-col gap-1 px-3">
            
            <p class="nav-header px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 transition-all duration-300">Operations</p>
            
            <a href="index.html" class="nav-btn w-full flex items-center h-10 px-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white font-medium transition-colors relative overflow-hidden group">
                <i data-lucide="layout-dashboard" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm transition-opacity duration-300">Dashboard</span>
            </a>

            <a href="inventory.html" class="nav-btn w-full flex items-center h-10 px-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white font-medium transition-colors relative overflow-hidden group">
                <i data-lucide="package" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm transition-opacity duration-300">Inventory</span>
            </a>

            <a href="#" class="nav-btn w-full flex items-center h-10 px-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white font-medium transition-colors relative overflow-hidden group">
                <i data-lucide="dog" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm transition-opacity duration-300">Population</span>
            </a>

            <a href="medical.html" class="nav-btn w-full flex items-center h-10 px-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white font-medium transition-colors relative overflow-hidden group">
                <i data-lucide="stethoscope" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm transition-opacity duration-300">Medical Log</span>
            </a>

            <p class="nav-header px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-6 mb-2 transition-all duration-300">Support & Growth</p>

            <a href="donation.html" class="nav-btn w-full flex items-center h-10 px-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white font-medium transition-colors relative overflow-hidden group">
                <i data-lucide="heart-handshake" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm transition-opacity duration-300">Donations</span>
            </a>

            <a href="procurement.html" class="nav-btn w-full flex items-center h-10 px-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white font-medium transition-colors relative overflow-hidden group">
                <i data-lucide="shopping-cart" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm transition-opacity duration-300">Procurement</span>
            </a>

            <a href="reports.html" class="nav-btn w-full flex items-center h-10 px-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white font-medium transition-colors relative overflow-hidden group">
                <i data-lucide="bar-chart-3" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm transition-opacity duration-300">Reports</span>
            </a>

        </nav>

        <div class="p-3 border-t border-white/10 shrink-0 flex flex-col gap-1">
            <a href="setting.html" class="nav-btn w-full flex items-center h-10 px-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white font-medium transition-colors relative overflow-hidden group mb-2">
                <i data-lucide="settings" class="w-4 h-4 shrink-0"></i>
                <span class="nav-text ml-3 text-sm transition-opacity duration-300">Settings</span>
            </a>
            
            <div class="flex items-center h-12 px-2 bg-slate-800 rounded-lg overflow-hidden shrink-0 border border-slate-700 cursor-pointer hover:bg-slate-700 transition">
                <div class="w-8 h-8 rounded bg-brand-action text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-inner">MB</div>
                <div class="profile-data ml-3 flex-1 min-w-0 transition-opacity duration-300">
                    <p class="text-xs font-bold text-white truncate">Mike Barnes</p>
                    <p id="global-profile-role" class="text-[10px] text-slate-400 truncate">Admin POV</p>
                </div>
            </div>
        </div>
    </aside>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Inject the sidebar
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

    // Auto-Highlight Active Menu Item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('a.nav-btn'); 
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            // Apply your specific "Active" state classes
            link.classList.remove('text-slate-400', 'font-medium', 'hover:bg-white/5');
            link.classList.add('bg-white/10', 'text-white', 'font-bold');
        }
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
});