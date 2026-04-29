// assets/js/db.js

// 1. Define the Initial Mock Data (Standardized to PawPlacer Nomenclature)
const initialData = {
    inventory: [
        { id: 'i1', name: 'Co-amoxiclav', brand: 'Generic', generatedName: '65mg Tablet', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Antibiotics & Antimicrobials', baseUnit: 'tab', minThreshold: 50, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 14, latestLocation: 'Shelf A', totalBaseUnits: 134, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,200', expiry: '2026-08-15', batchId: 'COA-65-8', addedDate: '2026-04-01' },
        { id: 'i2', name: 'Adult Dog Food', brand: 'TopBreed', generatedName: 'Beef Flavor', category: 'Nutrition', targetSpecies: 'Dog', itemGroup: 'Nutrition', baseUnit: 'kg', minThreshold: 20, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Sack', latestMultiplier: 20, latestLocation: 'Storage Room 1', totalBaseUnits: 115, procurement: 'Private Donation', costInfo: 'Est Value: ₱3,500 (Donor: John Doe)', expiry: '2026-10-01', batchId: null, addedDate: '2026-04-04' },
        { id: 'i3', name: 'Tramadol', brand: 'Generic', generatedName: '50mg/ml Vial', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Injectables & Sedatives', baseUnit: 'vial', minThreshold: 10, storage: 'Secure (Controlled)', isControlled: 'Yes', latestPurchasingUnit: 'Vial', latestMultiplier: 1, latestLocation: 'Safe 1', totalBaseUnits: 37, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,850', expiry: '2026-11-30', batchId: 'TRM-CTRL-01', addedDate: '2026-04-05' },
        { id: 'i4', name: '5-in-1 Vaccine', brand: 'Zoetis', generatedName: 'Modified Live', category: 'Vaccines', targetSpecies: 'Dog', itemGroup: 'Vaccines', baseUnit: 'dose', minThreshold: 25, storage: 'Refrigerated (Cold Chain)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 25, latestLocation: 'Fridge A', totalBaseUnits: 75, procurement: 'Commercial Purchase', costInfo: 'Total: ₱15,000', expiry: '2026-12-01', batchId: 'VAC-5-2026', addedDate: '2026-04-06' },
        { id: 'i5', name: 'Omeprazole', brand: 'Generic', generatedName: '20mg Capsule', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Gastrointestinal', baseUnit: 'cap', minThreshold: 50, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 100, latestLocation: 'Shelf B', totalBaseUnits: 100, procurement: 'Commercial Purchase', costInfo: 'Total: ₱500', expiry: '2027-01-10', batchId: 'OMP-11', addedDate: '2026-04-10' },
        { id: 'i6', name: 'Ascorbic Acid', brand: 'Generic', generatedName: '500mg Tablet', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Vitamins & Supplements', baseUnit: 'tab', minThreshold: 500, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 100, latestLocation: 'Shelf C', totalBaseUnits: 5460, procurement: 'Private Donation', costInfo: 'Est Value: ₱2,500', expiry: '2028-05-01', batchId: 'ASC-22', addedDate: '2026-04-11' },
        { id: 'i7', name: 'Prednisone', brand: 'Generic', generatedName: '10mg Tablet', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Anti-inflammatory', baseUnit: 'tab', minThreshold: 200, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 100, latestLocation: 'Shelf B', totalBaseUnits: 1164, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,200', expiry: '2026-11-01', batchId: 'PRD-01', addedDate: '2026-04-11' },
        { id: 'i8', name: 'Neptra', brand: 'Elanco', generatedName: 'Otic Suspension 1ml', category: 'Topicals', targetSpecies: 'Dog', itemGroup: 'Wound Care & Bandaging', baseUnit: 'tube', minThreshold: 10, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 1, latestLocation: 'Cabinet 2', totalBaseUnits: 3, procurement: 'Commercial Purchase', costInfo: 'Total: ₱3,200', expiry: '2027-03-15', batchId: 'NEP-88', addedDate: '2026-04-12' }, 
        { id: 'i9', name: 'Micropore', brand: '3M', generatedName: '1-inch Surgical Tape', category: 'Consumables', targetSpecies: 'Multi-Species', itemGroup: 'Wound Care & Bandaging', baseUnit: 'roll', minThreshold: 50, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 12, latestLocation: 'Supply Closet', totalBaseUnits: 32, procurement: 'Commercial Purchase', costInfo: 'Total: ₱600', expiry: '', batchId: '', addedDate: '2026-04-13' }, 
        { id: 'i10', name: 'Lidocaine', brand: 'Generic', generatedName: '2% Injectable 50ml', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Injectables & Sedatives', baseUnit: 'vial', minThreshold: 5, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Vial', latestMultiplier: 1, latestLocation: 'Cabinet 1', totalBaseUnits: 0, procurement: 'Commercial Purchase', costInfo: 'Total: ₱250', expiry: '2026-09-01', batchId: 'LID-001', addedDate: '2026-04-14' }, 
        { id: 'i11', name: 'Calmivet', brand: 'Vetoquinol', generatedName: 'Acepromazine 50ml', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Injectables & Sedatives', baseUnit: 'vial', minThreshold: 10, storage: 'Secure (Controlled)', isControlled: 'Yes', latestPurchasingUnit: 'Vial', latestMultiplier: 1, latestLocation: 'Safe 1', totalBaseUnits: 4, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,800', expiry: '2027-06-30', batchId: 'CAL-99', addedDate: '2026-04-14' },
        { id: 'i12', name: 'Phytomenadione', brand: 'Cycomin', generatedName: 'Vitamin K1 10mg/ml', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Vitamins & Supplements', baseUnit: 'ampoule', minThreshold: 20, storage: 'Secure (Controlled)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 10, latestLocation: 'Cabinet 1', totalBaseUnits: 10, procurement: 'Private Donation', costInfo: 'Est Value: ₱1,500', expiry: '2026-12-01', batchId: 'PHY-10', addedDate: '2026-04-15' }, 
        { id: 'i13', name: 'Cefuroxime', brand: 'Generic', generatedName: '750mg Powder for Injection', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Antibiotics & Antimicrobials', baseUnit: 'vial', minThreshold: 30, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Vial', latestMultiplier: 1, latestLocation: 'Shelf A', totalBaseUnits: 59, procurement: 'Commercial Purchase', costInfo: 'Total: ₱4,500', expiry: '2027-02-28', batchId: 'CEF-02', addedDate: '2026-04-15' },
        { id: 'i14', name: 'Furosemide', brand: 'Generic', generatedName: '40mg Tablet', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Cardiovascular & Renal', baseUnit: 'tab', minThreshold: 200, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 100, latestLocation: 'Shelf B', totalBaseUnits: 1100, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,800', expiry: '2027-11-15', batchId: 'FUR-04', addedDate: '2026-04-16' },
        { id: 'i15', name: 'Synoquin', brand: 'VetPlus', generatedName: 'Joint Supplement 10s', category: 'Medications', targetSpecies: 'Dog', itemGroup: 'Vitamins & Supplements', baseUnit: 'tab', minThreshold: 50, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 10, latestLocation: 'Shelf C', totalBaseUnits: 200, procurement: 'Commercial Purchase', costInfo: 'Total: ₱8,000', expiry: '2028-01-20', batchId: 'SYN-26', addedDate: '2026-04-17' }
    ],
    medicalLogs: [
        { id: "med_007", date: "2026-04-25", personnel: "Benjamin Buena", patientName: "Luna", patientType: "Dog", type: "Surgical", desc: "Complex trauma surgery and amputation of hind leg.", supplies: [{ name: "Tramadol", qty: 2, unit: "vial" }] }
    ],
    patients: [
        { id: "P1001", name: "Luna", type: "Dog", breed: "Aspin", status: "Medical Treatment" }
    ],
    donations: [
        { id: 'DN-1043', donor: 'Juan Dela Cruz', items: '5 Gallons Bleach', date: 'Oct 26, 2:00 PM', status: 'Approved' }
    ],
    staff: [
        { id: 'p1', name: 'Benjamin Buena', role: 'Lead Veterinarian', status: 'active' },
        { id: 'p2', name: 'Rachelle', role: 'Shelter Admin', status: 'active' },
        { id: 'p3', name: 'Alvin', role: 'Staff', status: 'active' },
        { id: 'p4', name: 'Jessie', role: 'Volunteer', status: 'inactive' }
    ],
    settingsLists: {
        itemGroups: [
            { id: 'g1', name: 'Antibiotics & Antimicrobials', master: 'Medications', archived: false },
            { id: 'g2', name: 'Core Vaccines', master: 'Vaccines', archived: false }
        ],
        units: [
            { id: 'u1', name: 'vial', archived: false },
            { id: 'u2', name: 'tab', archived: false },
            { id: 'u3', name: 'kg', archived: false },
            { id: 'u4', name: 'bot', archived: false }
        ],
        purchasingUnits: [
            { id: 'pu1', name: 'Box', archived: false },
            { id: 'pu2', name: 'Sack', archived: false },
            { id: 'pu3', name: 'Case', archived: false }
        ],
        storageLocations: [
            { id: 'loc1', name: 'Main Fridge', archived: false },
            { id: 'loc2', name: 'Pharmacy Cabinet', archived: false },
            { id: 'loc3', name: 'Storage Room 1', archived: false }
        ],
        stockDestinations: [
            { id: 'dest1', name: 'Internal Clinic', archived: false },
            { id: 'dest2', name: 'Foster Home', archived: false },
            { id: 'dest3', name: 'Adopted', archived: false },
            { id: 'dest4', name: 'Expired/Disposal', archived: false }
        ],
        reasons: [
            { id: 'r1', name: 'Dispensed / Prescribed', archived: false },
            { id: 'r2', name: 'Spoiled / Expired', archived: false }
        ],
        types: [
            { id: 't1', name: 'Medication', archived: false },
            { id: 't2', name: 'Surgical', archived: false },
            { id: 't3', name: 'Wound Care', archived: false }
        ]
    }
};

// 2. Initialize the Database
function initDB() {
    // Standard Overwrite for Prototype Phase
    localStorage.setItem('siyam_db', JSON.stringify(initialData));
    console.log("System Status: Database seeded successfully with aligned PawPlacer nomenclature.");
}

// 3. Helper Functions for CRUD Operations
const db = {
    read: function(tableName) {
        const data = JSON.parse(localStorage.getItem('siyam_db'));
        return data[tableName] || [];
    },
    write: function(tableName, newDataArray) {
        const data = JSON.parse(localStorage.getItem('siyam_db'));
        data[tableName] = newDataArray;
        localStorage.setItem('siyam_db', JSON.stringify(data));
    }
};

initDB();