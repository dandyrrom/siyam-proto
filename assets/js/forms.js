// assets/js/forms.js

// 1. Exact Modal HTML (Inputs converted to strict Select Dropdowns)
const globalModalHTML = `
    <div id="modal-backdrop" class="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-50 hidden transition-opacity opacity-0 duration-300" onclick="closeModal()"></div>
    <div id="modal-wrapper" class="fixed inset-0 z-50 flex items-center justify-center hidden pointer-events-none p-4">
        <div id="modal-panel" class="bg-white rounded-xl shadow-2xl w-full max-w-3xl flex flex-col pointer-events-auto transform scale-95 translate-y-4 opacity-0 transition-all duration-300 max-h-[90vh]">
            
            <div class="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50 rounded-t-xl shrink-0">
                <div class="flex items-center gap-3">
                    <div id="modal-icon-container" class="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-100 text-brand-accent">
                        <i id="modal-icon" data-lucide="plus" class="w-4 h-4"></i>
                    </div>
                    <h2 id="modal-title" class="text-lg font-semibold text-slate-900">Modal Title</h2>
                </div>
                <button onclick="closeModal()" class="text-slate-400 hover:text-slate-700 hover:bg-slate-200 p-1.5 rounded-md transition"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>

            <div class="p-6 overflow-y-auto custom-scrollbar relative">
                
                <!-- FORM 1: CREATE MASTER ITEM -->
                <div id="form-create" class="hidden form-section space-y-6">
                    <div class="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Core Identity</h3>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Category <span class="text-red-500">*</span></label>
                                <select id="create-category" onchange="handleCategorySchemaChange()" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none font-medium text-brand-accent bg-blue-50/50">
                                    <option value="" disabled selected>Select Category to generate schema...</option>
                                    <option value="Medications">Medications</option>
                                    <option value="Injectables">Injectables</option>
                                    <option value="Topicals">Topicals</option>
                                    <option value="Vaccines">Vaccines</option>
                                    <option value="Diagnostics">Diagnostics</option>
                                    <option value="Consumables">Consumables</option>
                                    <option value="Nutrition">Nutrition</option>
                                    <option value="Equipment">Equipment</option>
                                    <option value="Chemicals">Chemicals</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Item Group</label>
                                <select id="create-item-group" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none bg-white shadow-sm">
                                    <option value="" disabled selected>Select Group...</option>
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <div><label class="block text-sm font-medium text-slate-700 mb-1">Commodity Name <span class="text-red-500">*</span></label><input type="text" id="create-name" placeholder="e.g., Ascorbic Acid" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none"></div>
                            <div><label class="block text-sm font-medium text-slate-700 mb-1">Brand / Mfg <span class="text-red-500">*</span></label><input type="text" id="create-brand" placeholder="e.g., Generic, 3M" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none"></div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Target Species <span class="text-red-500">*</span></label>
                                <select id="create-species" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none">
                                    <option value="Multi-Species (Both)">Multi-Species (Both)</option>
                                    <option value="Canine (Dog)">Canine (Dog)</option>
                                    <option value="Feline (Cat)">Feline (Cat)</option>
                                    <option value="Avian/Other">Avian / Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div id="dynamic-schema-container" class="hidden bg-indigo-50/50 p-5 rounded-lg border border-indigo-100">
                        <h3 class="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-4 border-b border-indigo-200 pb-2">Specific Attributes (Auto-Generated)</h3>
                        <div id="dynamic-fields-grid" class="grid grid-cols-2 gap-4"></div>
                    </div>

                    <div class="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Base Metrics & Storage</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <div>
                                <label class="block text-xs font-medium text-slate-500 mb-1">Base Unit <span class="text-red-500">*</span></label>
                                <select id="create-base-unit" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent bg-white shadow-sm">
                                    <option value="" disabled selected>Select Unit...</option>
                                </select>
                            </div>
                            <div><label class="block text-xs font-medium text-slate-500 mb-1">Alert Threshold <span class="text-red-500">*</span></label><input type="number" id="create-min-threshold" placeholder="10" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                            <div>
                                <label class="block text-xs font-medium text-slate-500 mb-1">Storage Protocol <span class="text-red-500">*</span></label>
                                <select id="create-storage" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent">
                                    <option value="Ambient (Room Temp)">Ambient (Room Temp)</option>
                                    <option value="Refrigerated (Cold Chain)">Refrigerated (Cold Chain)</option>
                                    <option value="Frozen">Frozen</option>
                                    <option value="Secure (Controlled)">Secure (Controlled)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="bg-blue-50 p-5 rounded-lg border border-blue-200">
                        <h3 class="text-xs font-bold text-blue-800 uppercase tracking-wider mb-4 border-b border-blue-200 pb-2">Opening Balance (Initial Batch Setup)</h3>
                        
                        <div class="grid grid-cols-3 gap-4 mb-4">
                            <div>
                                <label class="block text-xs font-medium text-slate-700 mb-1">Purchasing Unit <span class="text-red-500">*</span></label>
                                <select id="create-purch-unit" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent bg-white shadow-sm">
                                    <option value="" disabled selected>Select Unit...</option>
                                </select>
                            </div>
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">Multiplier <span class="text-red-500">*</span></label><input type="number" id="create-multiplier" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">Qty Received <span class="text-red-500">*</span></label><input type="number" id="create-init-qty" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Procurement Channel <span class="text-red-500">*</span></label>
                                <select id="create-procurement" onchange="handleProcurementChange('create')" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent bg-white">
                                    <option value="Commercial Purchase">Commercial Purchase</option>
                                    <option value="Private Donation">Private Donation</option>
                                    <option value="Municipal Allocation">Municipal Allocation</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Physical Location</label>
                                <select id="create-location" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent bg-white shadow-sm">
                                    <option value="" disabled selected>Select Location...</option>
                                </select>
                            </div>
                        </div>

                        <div id="create-finance-purchase" class="grid grid-cols-2 gap-4 mb-4">
                            <div><label class="block text-sm font-medium text-slate-700 mb-1">Actual Total Cost (₱) <span class="text-red-500">*</span></label><input type="number" id="create-actual-cost" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                            <div><label class="block text-sm font-medium text-slate-700 mb-1">Receipt / PO #</label><input type="text" id="create-receipt" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                        </div>
                        
                        <div id="create-finance-donation" class="grid grid-cols-2 gap-4 mb-4 hidden">
                            <div><label class="block text-sm font-medium text-slate-700 mb-1">Est. Market Value (₱) <span class="text-red-500">*</span></label><input type="number" id="create-est-value" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                            <div><label class="block text-sm font-medium text-slate-700 mb-1">Donor Name / Intent ID</label><input type="text" id="create-donor" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 border-t border-blue-200 pt-4">
                            <div><label class="block text-sm font-medium text-slate-700 mb-1">Expiration Date <span id="req-exp" class="text-red-500 hidden">*</span></label><input type="date" id="create-expiry" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                            <div><label class="block text-sm font-medium text-slate-700 mb-1">Batch / Lot ID <span id="req-batch" class="text-red-500 hidden">*</span></label><input type="text" id="create-batch" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                        </div>
                    </div>
                </div>

                <!-- FORM 2: STOCK IN (RECEIVE BATCH) -->
                <div id="form-in" class="hidden form-section space-y-6">
                    <div class="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                        <label class="block text-sm font-bold text-slate-700 mb-2">Select Item <span class="text-red-500">*</span></label>
                        <select id="in-item-select" onchange="handleItemSelect('in')" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none bg-white shadow-sm"></select>
                    </div>
                    
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4">
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2">Quantity & Logistics</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <div>
                                <label class="block text-xs font-medium text-slate-700 mb-1">Packaging (e.g., Box) <span class="text-red-500">*</span></label>
                                <select id="in-purch-unit" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent bg-white shadow-sm">
                                    <option value="" disabled selected>Select Unit...</option>
                                </select>
                            </div>
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">Multiplier (Base/Pack) <span class="text-red-500">*</span></label><input type="number" id="in-multiplier" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent bg-white"></div>
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">Qty Received (Packs) <span class="text-red-500">*</span></label><input type="number" id="in-qty" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Procurement Channel <span class="text-red-500">*</span></label>
                                <select id="in-procurement" onchange="handleProcurementChange('in')" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent bg-white">
                                    <option value="Commercial Purchase">Commercial Purchase</option>
                                    <option value="Private Donation">Private Donation</option>
                                    <option value="Municipal Allocation">Municipal Allocation</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Physical Location</label>
                                <select id="in-location" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent bg-white shadow-sm">
                                    <option value="" disabled selected>Select Location...</option>
                                </select>
                            </div>
                        </div>

                        <div id="in-finance-purchase" class="grid grid-cols-2 gap-4">
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">Actual Total Cost (₱) <span class="text-red-500">*</span></label><input type="number" id="in-actual-cost" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">Receipt / PO #</label><input type="text" id="in-receipt" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                        </div>
                        <div id="in-finance-donation" class="grid grid-cols-2 gap-4 hidden">
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">Est. Market Value (₱) <span class="text-red-500">*</span></label><input type="number" id="in-est-value" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">Donor Name / Intent ID</label><input type="text" id="in-donor" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>
                        </div>
                    </div>

                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4">
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2">Batch Data</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">New Expiration Date</label><input type="date" id="in-new-expiry" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none"></div>
                            <div><label class="block text-xs font-medium text-slate-700 mb-1">New Batch / Lot ID</label><input type="text" id="in-new-batch" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none"></div>
                            <div>
                                <label class="block text-xs font-medium text-slate-700 mb-1">Received By <span class="text-red-500">*</span></label>
                                <select id="in-personnel" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none bg-white shadow-sm">
                                    <option value="" disabled selected>Select Staff...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- FORM 3: STOCK OUT (DEDUCT) -->
                <div id="form-out" class="hidden form-section space-y-6">
                     <div class="bg-red-50/50 p-4 rounded-lg border border-red-100">
                        <label class="block text-sm font-bold text-slate-700 mb-2">Select Item <span class="text-red-500">*</span></label>
                        <select id="out-item-select" onchange="handleOutSelect()" class="w-full border border-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none bg-white shadow-sm"></select>
                    </div>
                    
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Quantity</h3>
                        <label class="block text-sm font-medium text-slate-700 mb-1">Quantity Deducted (<span id="out-base-label" class="text-brand-accent">Base Unit</span>) <span class="text-red-500">*</span></label>
                        <input type="number" id="out-qty" placeholder="e.g., 5" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none">
                        <p id="out-available-hint" class="text-xs font-medium text-amber-600 text-right mt-1">Available: --</p>
                    </div>

                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4">
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2">Reason & Impact Tracking</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Deduction Reason <span class="text-red-500">*</span></label>
                                <select id="out-reason" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none bg-white shadow-sm">
                                    <option value="" disabled selected>Select Reason...</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Personnel / Auth By <span class="text-red-500">*</span></label>
                                <select id="out-personnel" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none bg-white shadow-sm">
                                    <option value="" disabled selected>Select Staff...</option>
                                </select>
                            </div>
                        </div>
                        <div id="out-subject-container" class="block">
                            <label class="block text-sm font-medium text-slate-700 mb-1">Subject / Dispensed To <span class="text-red-500">*</span></label>
                            <select id="out-subject" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-accent outline-none bg-white shadow-sm">
                                <option value="" disabled selected>Select Destination...</option>
                            </select>
                            <p class="text-[10px] text-slate-500 mt-1">Required for Impact Statement Generation.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3 rounded-b-xl shrink-0">
                <button onclick="closeModal()" class="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition">Cancel</button>
                <button id="modal-submit-btn" onclick="submitModal()" class="px-4 py-2 bg-brand-accent text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition shadow-sm">Confirm</button>
            </div>
        </div>
    </div>
`;

// Inject the Modal into the page automatically
document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML('beforeend', globalModalHTML);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});

// 2. Extracted Logic Variables
let currentModalMode = null;
let currentDonationContext = null; 

// 3. Extracted Helper Functions
const categorySchemas = {
    clinical: ['Medications', 'Injectables', 'Topicals', 'Diagnostics'], 
    vaccines: ['Vaccines'],
    consumables: ['Consumables', 'Chemicals'], 
    nutrition: ['Nutrition'],
    equipment: ['Equipment']
};

const htmlField = (id, label, type='text', placeholder='', required=false) => `
    <div><label class="block text-xs font-medium text-slate-700 mb-1">${label} ${required ? '<span class="text-red-500">*</span>' : ''}</label><input type="${type}" id="${id}" placeholder="${placeholder}" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent"></div>`;
const htmlSelect = (id, label, options, required=false) => `
    <div><label class="block text-xs font-medium text-slate-700 mb-1">${label} ${required ? '<span class="text-red-500">*</span>' : ''}</label><select id="${id}" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-accent bg-white">${options.map(o => `<option value="${o}">${o}</option>`).join('')}</select></div>`;

window.handleCategorySchemaChange = function() {
    const cat = document.getElementById('create-category').value;
    const container = document.getElementById('dynamic-schema-container');
    const grid = document.getElementById('dynamic-fields-grid');
    const reqExp = document.getElementById('req-exp');
    const reqBatch = document.getElementById('req-batch');
    
    if(!cat) { container.classList.add('hidden'); return; }
    container.classList.remove('hidden');
    grid.innerHTML = '';
    reqExp.classList.add('hidden');
    reqBatch.classList.add('hidden');

    if (categorySchemas.clinical.includes(cat)) {
        grid.innerHTML += htmlField('dyn-spec', 'Dosage & Concentration', 'text', 'e.g., 65mg, 10mg/ml', true);
        grid.innerHTML += htmlSelect('dyn-controlled', 'Controlled Substance', ['No', 'Yes'], true);
        reqExp.classList.remove('hidden'); 
    } 
    else if (categorySchemas.vaccines.includes(cat)) {
        grid.innerHTML += htmlField('dyn-spec', 'Strain / Valency', 'text', 'e.g., 5-in-1, Modified Live', true);
        reqExp.classList.remove('hidden'); reqBatch.classList.remove('hidden'); 
        setTimeout(() => document.getElementById('create-storage').value = 'Refrigerated (Cold Chain)', 50);
    }
    else if (categorySchemas.consumables.includes(cat)) {
        grid.innerHTML += htmlField('dyn-spec', 'Size / Gauge / Dimension', 'text', 'e.g., 3cc, 22G', true);
    }
    else if (categorySchemas.nutrition.includes(cat)) {
        grid.innerHTML += htmlField('dyn-spec', 'Flavor / Formula', 'text', 'e.g., Beef, Puppy', true);
        reqExp.classList.remove('hidden');
    }
    else if (categorySchemas.equipment.includes(cat)) {
        grid.innerHTML += htmlField('dyn-spec', 'Model / Type', 'text', 'e.g., Digital', false);
    }
};

window.handleProcurementChange = function(mode) {
    const proc = document.getElementById(`${mode}-procurement`).value;
    const purDiv = document.getElementById(`${mode}-finance-purchase`);
    const donDiv = document.getElementById(`${mode}-finance-donation`);
    if(proc === 'Commercial Purchase') {
        purDiv.classList.remove('hidden'); donDiv.classList.add('hidden');
    } else {
        purDiv.classList.add('hidden'); donDiv.classList.remove('hidden');
    }
};

function populateSelects() {
    const state = db.read('inventory');
    const inSel = document.getElementById('in-item-select');
    const outSel = document.getElementById('out-item-select');
    inSel.innerHTML = '<option value="" disabled selected>Select an item...</option>';
    outSel.innerHTML = '<option value="" disabled selected>Select an item...</option>';
    
    const sorted = [...state].sort((a,b) => a.name.localeCompare(b.name));
    sorted.forEach(i => {
        const opt = `<option value="${i.id}">${i.name} - ${i.brand} (${i.generatedName || i.latestPurchasingUnit})</option>`;
        inSel.innerHTML += opt; outSel.innerHTML += opt;
    });

    if(currentDonationContext) {
        inSel.innerHTML += '<optgroup label="Action"><option value="NEW_ITEM" class="text-blue-600 font-bold">+ Item not found? Create new master item</option></optgroup>';
    }
}

// 4. Populate Configured Settings into Dropdowns
function populateFormSettings() {
    const settings = db.read('settingsLists');
    const staffList = db.read('staff').filter(s => s.status === 'active');
    
    // Groups
    const igSelect = document.getElementById('create-item-group');
    if (igSelect) {
        igSelect.innerHTML = '<option value="" disabled selected>Select Group...</option>';
        settings.itemGroups.filter(g => !g.archived).forEach(g => igSelect.add(new Option(g.name, g.name)));
    }
    
    // Units (Base)
    const baseUnit = document.getElementById('create-base-unit');
    if (baseUnit) {
        baseUnit.innerHTML = '<option value="" disabled selected>Select Unit...</option>';
        settings.units.filter(u => !u.archived).forEach(u => baseUnit.add(new Option(u.name, u.name)));
    }

    // Purchasing Units
    const purchUnit = document.getElementById('create-purch-unit');
    const inPurchUnit = document.getElementById('in-purch-unit');
    if (purchUnit) {
        purchUnit.innerHTML = '<option value="" disabled selected>Select Unit...</option>';
        inPurchUnit.innerHTML = '<option value="" disabled selected>Select Unit...</option>';
        settings.purchasingUnits.filter(u => !u.archived).forEach(u => {
            purchUnit.add(new Option(u.name, u.name));
            inPurchUnit.add(new Option(u.name, u.name));
        });
    }

    // Storage Locations
    const createLoc = document.getElementById('create-location');
    const inLoc = document.getElementById('in-location');
    if (createLoc) {
        createLoc.innerHTML = '<option value="" disabled selected>Select Location...</option>';
        inLoc.innerHTML = '<option value="" disabled selected>Select Location...</option>';
        settings.storageLocations.filter(loc => !loc.archived).forEach(loc => {
            createLoc.add(new Option(loc.name, loc.name));
            inLoc.add(new Option(loc.name, loc.name));
        });
    }

    // Stock Destinations
    const outSubj = document.getElementById('out-subject');
    if (outSubj) {
        outSubj.innerHTML = '<option value="" disabled selected>Select Destination...</option>';
        settings.stockDestinations.filter(d => !d.archived).forEach(d => outSubj.add(new Option(d.name, d.name)));
    }

    // Reasons
    const reasonSel = document.getElementById('out-reason');
    if (reasonSel) {
        reasonSel.innerHTML = '<option value="" disabled selected>Select Reason...</option>';
        settings.reasons.filter(r => !r.archived).forEach(r => reasonSel.add(new Option(r.name, r.name)));
    }
    
    // Personnel
    const inPers = document.getElementById('in-personnel');
    const outPers = document.getElementById('out-personnel');
    if (inPers) {
        inPers.innerHTML = '<option value="" disabled selected>Select Staff...</option>';
        outPers.innerHTML = '<option value="" disabled selected>Select Staff...</option>';
        staffList.forEach(s => {
            inPers.add(new Option(s.name, s.name));
            outPers.add(new Option(s.name, s.name));
        });
    }
}

window.handleItemSelect = function(mode) {
    if(mode === 'in' && document.getElementById('in-item-select').value === "NEW_ITEM") {
        openModal('create', null, currentDonationContext);
        return;
    }
    const id = document.getElementById(`${mode}-item-select`).value;
    const state = db.read('inventory');
    const item = state.find(i => i.id === id);
    if(!item) return;

    if (mode === 'in') {
        document.getElementById('in-purch-unit').value = item.latestPurchasingUnit;
        document.getElementById('in-multiplier').value = item.latestMultiplier;
        document.getElementById('in-location').value = item.latestLocation || '';
    }
};

window.handleOutSelect = function() {
    const id = document.getElementById('out-item-select').value;
    const state = db.read('inventory');
    const item = state.find(i => i.id === id);
    if(!item) return;
    document.getElementById('out-base-label').textContent = item.baseUnit;
    document.getElementById('out-available-hint').textContent = `Total Available: ${item.totalBaseUnits} ${item.baseUnit}`;
};

// 5. Modal Open/Close Logic 
window.openModal = function(mode, preselectedId = null, donationContext = null) {
    currentModalMode = mode;
    currentDonationContext = donationContext;
    if(mode === 'in' || mode === 'out') populateSelects();
    
    // Inject Dynamic Form Data
    populateFormSettings();
    
    document.querySelectorAll('.form-section').forEach(f => f.classList.add('hidden'));
    document.getElementById(`form-${mode}`).classList.remove('hidden');

    const ctx = {
        'in': { title: 'Receive Stock', btn: 'Confirm Stock In' },
        'out': { title: 'Deduct Stock', btn: 'Confirm Deduction' },
        'create': { title: 'Add New Master Item', btn: 'Save & Initialize Stock' }
    }[mode];
    
    document.getElementById('modal-title').textContent = ctx.title;
    document.getElementById('modal-submit-btn').textContent = ctx.btn;
    
    if (donationContext) {
        if(mode === 'in') {
            document.getElementById('in-procurement').value = 'Private Donation';
            handleProcurementChange('in');
            document.getElementById('in-donor').value = donationContext.donorName;
        } else if (mode === 'create') {
            document.getElementById('create-procurement').value = 'Private Donation';
            handleProcurementChange('create');
            document.getElementById('create-donor').value = donationContext.donorName;
        }
    }

    document.getElementById('modal-backdrop').classList.remove('hidden');
    document.getElementById('modal-wrapper').classList.remove('hidden');
    requestAnimationFrame(() => {
        document.getElementById('modal-backdrop').classList.replace('opacity-0', 'opacity-100');
        document.getElementById('modal-panel').classList.add('modal-enter');
    });

    if (preselectedId && (mode === 'in' || mode === 'out')) {
        document.getElementById(`${mode}-item-select`).value = preselectedId;
        if(mode === 'in') handleItemSelect('in');
        if(mode === 'out') handleOutSelect();
    }
};

window.closeModal = function() {
    document.getElementById('modal-panel').classList.remove('modal-enter');
    document.getElementById('modal-backdrop').classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => {
        document.getElementById('modal-backdrop').classList.add('hidden');
        document.getElementById('modal-wrapper').classList.add('hidden');
        currentDonationContext = null; 
    }, 300);
};

// 6. Shared Submit Logic
window.submitModal = function() {
    let inventoryState = db.read('inventory');

    if (currentModalMode === 'create') {
        const cat = document.getElementById('create-category').value;
        const name = document.getElementById('create-name').value.trim();
        const brand = document.getElementById('create-brand').value.trim();
        const species = document.getElementById('create-species').value;
        const itemGrp = document.getElementById('create-item-group').value.trim() || 'Uncategorized';
        
        const bUnit = document.getElementById('create-base-unit').value.trim();
        const minThresh = parseInt(document.getElementById('create-min-threshold').value) || 10;
        const storage = document.getElementById('create-storage').value;
        
        const pUnit = document.getElementById('create-purch-unit').value.trim();
        const mult = parseInt(document.getElementById('create-multiplier').value);
        const initQty = parseInt(document.getElementById('create-init-qty').value) || 0;
        const loc = document.getElementById('create-location').value.trim();
        
        const totalBase = (initQty * mult);

        const proc = document.getElementById('create-procurement').value;
        let costInfoStr = '';
        if(proc === 'Commercial Purchase') costInfoStr = `Total: ₱${document.getElementById('create-actual-cost').value || 0}`;
        else costInfoStr = `Est: ₱${document.getElementById('create-est-value').value || 0} (Donor: ${document.getElementById('create-donor').value || 'Unknown'})`;

        const specInput = document.getElementById('dyn-spec');
        const expiry = document.getElementById('create-expiry').value;
        const batch = document.getElementById('create-batch').value;
        const isControlled = document.getElementById('dyn-controlled') ? document.getElementById('dyn-controlled').value : 'No';

        if(!cat || !name || !brand || !pUnit || isNaN(mult) || !bUnit) return alert("Fill required core fields.");

        const newItemId = 'i' + Date.now();
        inventoryState.push({
            id: newItemId, name, brand, generatedName: specInput ? specInput.value : '', category: cat, targetSpecies: species, itemGroup: itemGrp,
            baseUnit: bUnit, minThreshold: minThresh, storage, isControlled, condition: null,
            latestPurchasingUnit: pUnit, latestMultiplier: mult, latestLocation: loc,
            totalBaseUnits: totalBase, procurement: proc, costInfo: costInfoStr,
            expiry, batchId: batch, addedDate: new Date().toISOString().split('T')[0]
        });

        if(currentDonationContext) {
            db.write('inventory', inventoryState);
            closeModal();
            setTimeout(() => openModal('in', newItemId, currentDonationContext), 350);
            return;
        }

    } else if (currentModalMode === 'in') {
        const item = inventoryState.find(i => i.id === document.getElementById('in-item-select').value);
        if(!item) return;
        
        const pUnit = document.getElementById('in-purch-unit').value.trim();
        const mult = parseInt(document.getElementById('in-multiplier').value);
        const qty = parseInt(document.getElementById('in-qty').value);
        
        if(isNaN(qty) || qty <= 0 || isNaN(mult) || mult <= 0 || !pUnit) return alert("Invalid packaging entry.");
        
        item.totalBaseUnits += (qty * mult);
        item.latestPurchasingUnit = pUnit;
        item.latestMultiplier = mult;
        item.latestLocation = document.getElementById('in-location').value.trim() || item.latestLocation;
        item.procurement = document.getElementById('in-procurement').value; 

        if(item.procurement === 'Commercial Purchase') item.costInfo = `Total: ₱${document.getElementById('in-actual-cost').value || 0}`;
        else item.costInfo = `Est: ₱${document.getElementById('in-est-value').value || 0}`;
        
        if(document.getElementById('in-new-expiry').value) item.expiry = document.getElementById('in-new-expiry').value; 
        if(document.getElementById('in-new-batch').value) item.batchId = document.getElementById('in-new-batch').value; 

    } else if (currentModalMode === 'out') {
        const item = inventoryState.find(i => i.id === document.getElementById('out-item-select').value);
        if(!item) return;
        const qty = parseInt(document.getElementById('out-qty').value);
        
        if(isNaN(qty) || qty <= 0) return alert("Invalid deduction quantity.");
        if(qty > item.totalBaseUnits) return alert("Insufficient stock.");
        item.totalBaseUnits -= qty;
    }

    db.write('inventory', inventoryState);
    
    if(typeof window.renderList === 'function') window.renderList();
    
    if(currentDonationContext && typeof window.finalizeDonationReceive === 'function') {
        window.finalizeDonationReceive(currentDonationContext.donationId);
    }

    closeModal();
};