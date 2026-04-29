// assets/js/db.js

// 1. Define the Initial Mock Data (Expanded with April 2026 Stock Log)
const initialData = {
    inventory: [
        // --- Original Items ---
        { id: 'i1', name: 'Co-amoxiclav', brand: 'Generic', generatedName: '65mg Tablet', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Antibiotics & Antimicrobials', baseUnit: 'tab', minThreshold: 50, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 14, latestLocation: 'Shelf A', totalBaseUnits: 134, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,200', expiry: '2026-08-15', batchId: 'COA-65-8', addedDate: '2026-04-01' },
        { id: 'i2', name: 'Adult Dog Food', brand: 'TopBreed', generatedName: 'Beef Flavor', category: 'Nutrition', targetSpecies: 'Canine', itemGroup: 'Nutrition', baseUnit: 'kg', minThreshold: 20, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Sack', latestMultiplier: 20, latestLocation: 'Storage Room 1', totalBaseUnits: 115, procurement: 'Private Donation', costInfo: 'Est Value: ₱3,500 (Donor: John Doe)', expiry: '2026-10-01', batchId: null, addedDate: '2026-04-04' },
        { id: 'i3', name: 'Tramadol', brand: 'Generic', generatedName: '50mg/ml Vial', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Injectables & Sedatives', baseUnit: 'vial', minThreshold: 10, storage: 'Secure (Controlled)', isControlled: 'Yes', latestPurchasingUnit: 'Vial', latestMultiplier: 1, latestLocation: 'Safe 1', totalBaseUnits: 37, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,850', expiry: '2026-11-30', batchId: 'TRM-CTRL-01', addedDate: '2026-04-05' },
        { id: 'i4', name: '5-in-1 Vaccine', brand: 'Zoetis', generatedName: 'Modified Live', category: 'Vaccines', targetSpecies: 'Canine', itemGroup: 'Vaccines', baseUnit: 'dose', minThreshold: 25, storage: 'Refrigerated (Cold Chain)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 25, latestLocation: 'Fridge A', totalBaseUnits: 75, procurement: 'Commercial Purchase', costInfo: 'Total: ₱15,000', expiry: '2026-12-01', batchId: 'VAC-5-2026', addedDate: '2026-04-06' },

        // --- Migrated Items (April 2026 CSV + PDF Metadata) ---
        { id: 'i5', name: 'Omeprazole', brand: 'Generic', generatedName: '20mg Capsule', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Gastrointestinal', baseUnit: 'cap', minThreshold: 50, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 100, latestLocation: 'Shelf B', totalBaseUnits: 100, procurement: 'Commercial Purchase', costInfo: 'Total: ₱500', expiry: '2027-01-10', batchId: 'OMP-11', addedDate: '2026-04-10' },
        { id: 'i6', name: 'Ascorbic Acid', brand: 'Generic', generatedName: '500mg Tablet', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Vitamins & Supplements', baseUnit: 'tab', minThreshold: 500, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 100, latestLocation: 'Shelf C', totalBaseUnits: 5460, procurement: 'Private Donation', costInfo: 'Est Value: ₱2,500', expiry: '2028-05-01', batchId: 'ASC-22', addedDate: '2026-04-11' },
        { id: 'i7', name: 'Prednisone', brand: 'Generic', generatedName: '10mg Tablet', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Anti-inflammatory', baseUnit: 'tab', minThreshold: 200, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 100, latestLocation: 'Shelf B', totalBaseUnits: 1164, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,200', expiry: '2026-11-01', batchId: 'PRD-01', addedDate: '2026-04-11' },
        { id: 'i8', name: 'Neptra', brand: 'Elanco', generatedName: 'Otic Suspension 1ml', category: 'Topicals', targetSpecies: 'Canine', itemGroup: 'Wound Care & Bandaging', baseUnit: 'tube', minThreshold: 10, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 1, latestLocation: 'Cabinet 2', totalBaseUnits: 3, procurement: 'Commercial Purchase', costInfo: 'Total: ₱3,200', expiry: '2027-03-15', batchId: 'NEP-88', addedDate: '2026-04-12' }, // Low Stock Trigger
        { id: 'i9', name: 'Micropore', brand: '3M', generatedName: '1-inch Surgical Tape', category: 'Consumables', targetSpecies: 'Multi-Species', itemGroup: 'Wound Care & Bandaging', baseUnit: 'roll', minThreshold: 50, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 12, latestLocation: 'Supply Closet', totalBaseUnits: 32, procurement: 'Commercial Purchase', costInfo: 'Total: ₱600', expiry: '', batchId: '', addedDate: '2026-04-13' }, // Low Stock Trigger
        { id: 'i10', name: 'Lidocaine', brand: 'Generic', generatedName: '2% Injectable 50ml', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Injectables & Sedatives', baseUnit: 'vial', minThreshold: 5, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Vial', latestMultiplier: 1, latestLocation: 'Cabinet 1', totalBaseUnits: 0, procurement: 'Commercial Purchase', costInfo: 'Total: ₱250', expiry: '2026-09-01', batchId: 'LID-001', addedDate: '2026-04-14' }, // Zero Stock Trigger
        { id: 'i11', name: 'Calmivet', brand: 'Vetoquinol', generatedName: 'Acepromazine 50ml', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Injectables & Sedatives', baseUnit: 'vial', minThreshold: 10, storage: 'Secure (Controlled)', isControlled: 'Yes', latestPurchasingUnit: 'Vial', latestMultiplier: 1, latestLocation: 'Safe 1', totalBaseUnits: 4, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,800', expiry: '2027-06-30', batchId: 'CAL-99', addedDate: '2026-04-14' }, // Low Stock Trigger
        { id: 'i12', name: 'Phytomenadione', brand: 'Cycomin', generatedName: 'Vitamin K1 10mg/ml', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Vitamins & Supplements', baseUnit: 'ampoule', minThreshold: 20, storage: 'Secure (Controlled)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 10, latestLocation: 'Cabinet 1', totalBaseUnits: 10, procurement: 'Private Donation', costInfo: 'Est Value: ₱1,500', expiry: '2026-12-01', batchId: 'PHY-10', addedDate: '2026-04-15' }, // Low Stock Trigger
        { id: 'i13', name: 'Cefuroxime', brand: 'Generic', generatedName: '750mg Powder for Injection', category: 'Injectables', targetSpecies: 'Multi-Species', itemGroup: 'Antibiotics & Antimicrobials', baseUnit: 'vial', minThreshold: 30, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Vial', latestMultiplier: 1, latestLocation: 'Shelf A', totalBaseUnits: 59, procurement: 'Commercial Purchase', costInfo: 'Total: ₱4,500', expiry: '2027-02-28', batchId: 'CEF-02', addedDate: '2026-04-15' },
        { id: 'i14', name: 'Furosemide', brand: 'Generic', generatedName: '40mg Tablet', category: 'Medications', targetSpecies: 'Multi-Species', itemGroup: 'Cardiovascular & Renal', baseUnit: 'tab', minThreshold: 200, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 100, latestLocation: 'Shelf B', totalBaseUnits: 1100, procurement: 'Commercial Purchase', costInfo: 'Total: ₱1,800', expiry: '2027-11-15', batchId: 'FUR-04', addedDate: '2026-04-16' },
        { id: 'i15', name: 'Synoquin', brand: 'VetPlus', generatedName: 'Joint Supplement 10s', category: 'Medications', targetSpecies: 'Canine', itemGroup: 'Vitamins & Supplements', baseUnit: 'tab', minThreshold: 50, storage: 'Ambient (Room Temp)', isControlled: 'No', latestPurchasingUnit: 'Box', latestMultiplier: 10, latestLocation: 'Shelf C', totalBaseUnits: 200, procurement: 'Commercial Purchase', costInfo: 'Total: ₱8,000', expiry: '2028-01-20', batchId: 'SYN-26', addedDate: '2026-04-17' }
    ],
    medicalLogs: [
        { id: "med_007", date: "2026-04-25", personnel: "Benjamin Buena", patientName: "Luna", patientType: "Dog", type: "Surgical", desc: "Complex trauma surgery and amputation of hind leg. Extensive wound debridement performed.", supplies: [{ name: "Tramadol (50mg/ml)", qty: 2, unit: "vial" }, { name: "Clindamycin", qty: 3, unit: "ampoule" }, { name: "Vetwrap", qty: 4, unit: "pcs" }, { name: "Micropore (1-inch)", qty: 2, unit: "pcs" }, { name: "Potassium", qty: 1, unit: "vial" }] },
        { id: "med_006", date: "2026-04-24", personnel: "Alvin", patientName: "Bruno", patientType: "Dog", type: "Wound Care", desc: "Cleaned and dressed bite wound on front left leg.", supplies: [{ name: "Vetwrap", qty: 1, unit: "pcs" }, { name: "Micropore (1-inch)", qty: 2, unit: "pcs" }] },
        { id: "med_005", date: "2026-04-24", personnel: "Jessie", patientName: "Milo", patientType: "Cat", type: "Medication", desc: "Administered daily dose for respiratory infection.", supplies: [{ name: "Co-amoxiclav (65mg)", qty: 1, unit: "tabs" }] },
        { id: "med_004", date: "2026-04-23", personnel: "Benjamin Buena", patientName: "Luna", patientType: "Dog", type: "Routine", desc: "Deworming and general checkup. Patient is healthy.", supplies: [{ name: "Papi Doxy", qty: 1, unit: "bot" }] },
        { id: "med_003", date: "2026-04-23", personnel: "Jaslyn", patientName: "Bella", patientType: "Dog", type: "Medication", desc: "Treated for skin allergies.", supplies: [{ name: "Prednisone (10mg)", qty: 2, unit: "tabs" }] },
        { id: "med_002", date: "2026-04-23", personnel: "Rachelle", patientName: "Copper", patientType: "Cat", type: "Surgical", desc: "Routine neuter. Pre-op sedatives and post-op antibiotics administered.", supplies: [{ name: "Tramadol (50mg/ml)", qty: 1, unit: "vial" }, { name: "Co-amoxiclav (65mg)", qty: 3, unit: "tabs" }] },
        { id: "med_001", date: "2026-04-22", personnel: "Darryl", patientName: "Max", patientType: "Dog", type: "Medication", desc: "Administered pain relief after minor injury.", supplies: [{ name: "Tramadol (50mg/ml)", qty: 1, unit: "vial" }] }
    ],
    patients: [
        { id: "A-001", name: "Luna", type: "Dog", breed: "Aspin" },
        { id: "A-002", name: "Max", type: "Dog", breed: "Mixed" },
        { id: "A-003", name: "Copper", type: "Cat", breed: "Puspin" },
        { id: "A-004", name: "Bella", type: "Dog", breed: "Aspin" },
        { id: "A-005", name: "Simba", type: "Cat", breed: "Puspin" },
        { id: "A-006", name: "Bruno", type: "Dog", breed: "Bully" },
        { id: "A-007", name: "Milo", type: "Cat", breed: "Puspin" }
    ],
    donations: [
        { id: 'DN-1042', donor: 'Maria Santos', items: '2 Sacks Dog Food, 1 Box Syringes', date: 'Oct 25, 10:00 AM', status: 'Needs Review' },
        { id: 'DN-1044', donor: 'Anna Reyes', items: 'Old Towels, Blankets', date: 'Oct 28, 9:00 AM', status: 'Needs Review' },
        { id: 'DN-1043', donor: 'Juan Dela Cruz', items: '5 Gallons Bleach', date: 'Oct 26, 2:00 PM', status: 'Approved' },
        { id: 'DN-1040', donor: 'Local Pet Shop', items: '10 Boxes Cat Food', date: 'Oct 20, 2023', status: 'Received', handler: 'Admin User' },
        { id: 'DN-1039', donor: 'Anonymous', items: 'Medical Supplies Batch B', date: 'Oct 18, 2023', status: 'Received', handler: 'Staff Member A' }
    ],
    staff: [
        "Benjamin Buena", "Rachelle", "Alvin", "Jessie", "Kurt", "Jaslyn", 
        "Reymart", "Belle", "JJ", "Emer", "Lloyd", "Darryl", "Jenny", 
        "Sean", "Warren", "Ian", "Daryl"
    ]
};

// 2. Initialize the Database
function initDB() {
    // If the database already exists, we want to OVERWRITE it this one time to inject the new April data.
    // In a real app, you wouldn't overwrite, but for prototype testing, we need the fresh data.
    localStorage.setItem('siyam_db', JSON.stringify(initialData));
    console.log("System Status: Database seeded successfully with expanded April Master Data.");
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