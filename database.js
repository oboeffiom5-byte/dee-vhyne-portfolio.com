// Database Configuration and Sample Data
const DATABASE = {
  // Database Connection Info
  connection: {
    host: 'localhost',
    port: 5432,
    database: 'unicross_portal',
    user: 'admin',
    password: 'secure_password_123'
  },

  // Departments Database
  departments: [
    {
      id: 1,
      code: 'CEN',
      name: 'Civil Engineering',
      faculty: 'Engineering',
      building: 'Block A'
    },
    {
      id: 2,
      code: 'MEN',
      name: 'Mechanical Engineering',
      faculty: 'Engineering',
      building: 'Block B'
    },
    {
      id: 3,
      code: 'EEN',
      name: 'Electrical Engineering',
      faculty: 'Engineering',
      building: 'Block C'
    },
    {
      id: 4,
      code: 'CSC',
      name: 'Computer Science',
      faculty: 'Computing',
      building: 'Block D'
    },
    {
      id: 5,
      code: 'BIO',
      name: 'Biology',
      faculty: 'Sciences',
      building: 'Block E'
    }
  ],

  // Users/Students Database
  users: [
    {
      id: 1,
      username: 'SPC210',
      password: '24/CEN/210',
      fullName: 'OBO OBO EFFIOM (CEO/ADMIN)',
      email: 'oboeffiom5@gmail.com',
      studentType: 'Returning ',
      matricNo: '24/CEN/210',
      departmentId: 1,
      department: 'Civil Engineering'
    },
    {
      id: 2,
      username: 'SPC077',
      password: '24/MEN/077',
      fullName: 'EKOH DANIEL ( Einstein Jnr )',
      email: 'ekohdaniel5@gmail.com',
      studentType: 'Returning',
      matricNo: '24/MEN/077',
      departmentId: 2,
      department: 'Mechanical Engineering'
    },
    {
      id: 3,
      username: 'SPC061',
      password: '24/EEN/061',
      fullName: 'NSIKAK JOHN ( Academic Weapon )',
      email: 'nsikakjohn@gmail.com',
      studentType: 'Returning',
      matricNo: '24/EEN/061',
      departmentId: 3,
      department: 'Electrical Engineering'
    },
    {
      id: 4,
      username: 'SPC004',
      password: '24/CSC/022',
      fullName: 'Sarah Williams',
      email: 'sarah.williams@university.edu',
      studentType: 'New',
      matricNo: null,
      departmentId: 4,
      department: 'Computer Science'
    },
    {
      id: 5,
      username: 'SPC005',
      password: '23/BIO/010',
      fullName: 'David Brown',
      email: 'david.brown@university.edu',
      studentType: 'Returning',
      matricNo: 'MAT2023015',
      departmentId: 5,
      department: 'Biology'
    },
    {
      id: 6,
      username: 'SPC317',
      password: '24/CEN/317',
      fullName: 'WISDOM BASSEY ( Wisery )',
      email: 'wisdombassey@gmail.com',
      studentType: 'Returning',
      matricNo: '24/CEN/317',
      departmentId: 1,
      department: 'Civil Engineering'
    },
    {
      id: 7,
      username: 'SPC007',
      password: '23/MEN/005',
      fullName: 'Daniel Martinez',
      email: 'daniel.martinez@university.edu',
      studentType: 'Returning',
      matricNo: 'MAT2023008',
      departmentId: 2,
      department: 'Mechanical Engineering'
    },
    {
      id: 8,
      username: 'SPC008',
      password: '24/EEN/011',
      fullName: 'Olivia Anderson',
      email: 'olivia.anderson@university.edu',
      studentType: 'New',
      matricNo: null,
      departmentId: 3,
      department: 'Electrical Engineering'
    },
    {
      id: 9,
      username: 'SPC009',
      password: '23/CSC/007',
      fullName: 'James Taylor',
      email: 'james.taylor@university.edu',
      studentType: 'Returning',
      matricNo: 'MAT2023050',
      departmentId: 4,
      department: 'Computer Science'
    },
    {
      id: 10,
      username: 'SPC010',
      password: '24/BIO/009',
      fullName: 'Jessica Lee',
      email: 'jessica.lee@university.edu',
      studentType: 'New',
      matricNo: null,
      departmentId: 5,
      department: 'Biology'
    }
  ],

  // Fees Information (fees for all students)
  fees: [
    // Student 1 - SPC001
    { id: 1, studentId: 1, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-15' },
    { id: 2, studentId: 1, feeType: 'Library', amount: 25000, dueDate: '2026-09-01', status: 'Pending', paidDate: null },
    { id: 3, studentId: 1, feeType: 'Laboratory', amount: 30000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-15' },
    
    // Student 2 - SPC002
    { id: 4, studentId: 2, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-10' },
    { id: 5, studentId: 2, feeType: 'Laboratory', amount: 50000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-12' },
    { id: 6, studentId: 2, feeType: 'Registration', amount: 15000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-10' },
    
    // Student 3 - SPC003
    { id: 7, studentId: 3, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Pending', paidDate: null },
    { id: 8, studentId: 3, feeType: 'Laboratory', amount: 50000, dueDate: '2026-09-01', status: 'Pending', paidDate: null },
    
    // Student 4 - SPC004
    { id: 9, studentId: 4, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-18' },
    { id: 10, studentId: 4, feeType: 'Library', amount: 25000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-18' },
    
    // Student 5 - SPC005
    { id: 11, studentId: 5, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-12' },
    { id: 12, studentId: 5, feeType: 'Laboratory', amount: 40000, dueDate: '2026-09-01', status: 'Pending', paidDate: null },
    
    // Student 6 - SPC006
    { id: 13, studentId: 6, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Pending', paidDate: null },
    { id: 14, studentId: 6, feeType: 'Library', amount: 25000, dueDate: '2026-09-01', status: 'Pending', paidDate: null },
    
    // Student 7 - SPC007
    { id: 15, studentId: 7, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-08' },
    { id: 16, studentId: 7, feeType: 'Laboratory', amount: 50000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-08' },
    
    // Student 8 - SPC008
    { id: 17, studentId: 8, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Pending', paidDate: null },
    { id: 18, studentId: 8, feeType: 'Laboratory', amount: 50000, dueDate: '2026-09-01', status: 'Pending', paidDate: null },
    
    // Student 9 - SPC009
    { id: 19, studentId: 9, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-05' },
    { id: 20, studentId: 9, feeType: 'Library', amount: 25000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-05' },
    
    // Student 10 - SPC010
    { id: 21, studentId: 10, feeType: 'Tuition', amount: 250000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-20' },
    { id: 22, studentId: 10, feeType: 'Laboratory', amount: 40000, dueDate: '2026-09-01', status: 'Paid', paidDate: '2026-08-20' }
  ],

  // Courses Database (20 courses - 4 per department)
  courses: [
    // Civil Engineering (CEN) - Courses 101-104
    { id: 101, code: 'GET209', title: 'Engineering Maths', credits: 3, semester: 1, departmentId: 1 },
    { id: 102, code: 'CEE201', title: 'Civil Engineering Drawing', credits: 2, semester: 1, departmentId: 1 },
    { id: 103, code: 'GET205', title: 'Fluid Mechanics', credits: 3, semester: 1, departmentId: 1 },
    { id: 104, code: 'GET201', title: 'Applied Electricity', credits: 3, semester: 1, departmentId: 1 },
    
    // Mechanical Engineering (MEN) - Courses 105-108
    { id: 105, code: 'MEN101', title: 'Thermodynamics I', credits: 4, semester: 1, departmentId: 2 },
    { id: 106, code: 'MEN102', title: 'Machine Tools I', credits: 4, semester: 1, departmentId: 2 },
    { id: 107, code: 'MEN201', title: 'Fluid Mechanics II', credits: 4, semester: 2, departmentId: 2 },
    { id: 108, code: 'MEN202', title: 'Control Systems', credits: 3, semester: 2, departmentId: 2 },
    
    // Electrical Engineering (EEN) - Courses 109-112
    { id: 109, code: 'EEN101', title: 'Circuit Theory I', credits: 4, semester: 1, departmentId: 3 },
    { id: 110, code: 'EEN102', title: 'Electromagnetics', credits: 4, semester: 1, departmentId: 3 },
    { id: 111, code: 'EEN201', title: 'Applied Electricity II', credits: 4, semester: 2, departmentId: 3 },
    { id: 112, code: 'EEN202', title: 'Digital Signal Processing', credits: 3, semester: 2, departmentId: 3 },
    
    // Computer Science (CSC) - Courses 113-116
    { id: 113, code: 'CSC101', title: 'Introduction to Programming', credits: 3, semester: 1, departmentId: 4 },
    { id: 114, code: 'CSC102', title: 'Data Structures', credits: 4, semester: 1, departmentId: 4 },
    { id: 115, code: 'CSC201', title: 'Database Management Systems', credits: 3, semester: 2, departmentId: 4 },
    { id: 116, code: 'CSC202', title: 'Web Development', credits: 3, semester: 2, departmentId: 4 },
    
    // Biology (BIO) - Courses 117-120
    { id: 117, code: 'BIO101', title: 'General Biology I', credits: 4, semester: 1, departmentId: 5 },
    { id: 118, code: 'BIO102', title: 'Cellular Biology', credits: 4, semester: 1, departmentId: 5 },
    { id: 119, code: 'BIO201', title: 'Ecology', credits: 3, semester: 2, departmentId: 5 },
    { id: 120, code: 'BIO202', title: 'Biochemistry', credits: 4, semester: 2, departmentId: 5 }
  ],

  // Registrations (each student registered for 3-4 courses)
  registrations: [
    // SPC001 (Civil Engineering)
    { id: 1, studentId: 1, courseId: 101, semester: 1, grade: 'A', registrationDate: '2026-01-15' },
    { id: 2, studentId: 1, courseId: 102, semester: 1, grade: 'A+', registrationDate: '2026-01-15' },
    { id: 3, studentId: 1, courseId: 103, semester: 2, grade: 'A-', registrationDate: '2026-01-15' },
    
    // SPC002 (Mechanical Engineering)
    { id: 4, studentId: 2, courseId: 105, semester: 1, grade: 'B', registrationDate: '2026-01-15' },
    { id: 5, studentId: 2, courseId: 106, semester: 1, grade: 'B+', registrationDate: '2026-01-15' },
    { id: 6, studentId: 2, courseId: 107, semester: 2, grade: 'A-', registrationDate: '2026-01-15' },
    
    // SPC003 (Electrical Engineering)
    { id: 7, studentId: 3, courseId: 109, semester: 1, grade: 'A', registrationDate: '2026-01-15' },
    { id: 8, studentId: 3, courseId: 110, semester: 1, grade: 'A', registrationDate: '2026-01-15' },
    { id: 9, studentId: 3, courseId: 111, semester: 2, grade: 'B+', registrationDate: '2026-01-15' },
    
    // SPC004 (Computer Science)
    { id: 10, studentId: 4, courseId: 113, semester: 1, grade: 'A', registrationDate: '2026-01-15' },
    { id: 11, studentId: 4, courseId: 114, semester: 1, grade: 'A-', registrationDate: '2026-01-15' },
    { id: 12, studentId: 4, courseId: 115, semester: 2, grade: 'A', registrationDate: '2026-01-15' },
    { id: 13, studentId: 4, courseId: 116, semester: 2, grade: 'B+', registrationDate: '2026-01-15' },
    
    // SPC005 (Biology)
    { id: 14, studentId: 5, courseId: 117, semester: 1, grade: 'B+', registrationDate: '2026-01-15' },
    { id: 15, studentId: 5, courseId: 118, semester: 1, grade: 'B', registrationDate: '2026-01-15' },
    { id: 16, studentId: 5, courseId: 119, semester: 2, grade: 'A-', registrationDate: '2026-01-15' },
    
    // SPC006 (Civil Engineering)
    { id: 17, studentId: 6, courseId: 101, semester: 1, grade: 'B', registrationDate: '2026-01-15' },
    { id: 18, studentId: 6, courseId: 104, semester: 2, grade: 'B+', registrationDate: '2026-01-15' },
    
    // SPC007 (Mechanical Engineering)
    { id: 19, studentId: 7, courseId: 105, semester: 1, grade: 'A-', registrationDate: '2026-01-15' },
    { id: 20, studentId: 7, courseId: 108, semester: 2, grade: 'A', registrationDate: '2026-01-15' },
    
    // SPC008 (Electrical Engineering)
    { id: 21, studentId: 8, courseId: 109, semester: 1, grade: 'B+', registrationDate: '2026-01-15' },
    { id: 22, studentId: 8, courseId: 112, semester: 2, grade: 'A-', registrationDate: '2026-01-15' },
    
    // SPC009 (Computer Science)
    { id: 23, studentId: 9, courseId: 113, semester: 1, grade: 'A', registrationDate: '2026-01-15' },
    { id: 24, studentId: 9, courseId: 114, semester: 1, grade: 'A', registrationDate: '2026-01-15' },
    { id: 25, studentId: 9, courseId: 115, semester: 2, grade: 'A-', registrationDate: '2026-01-15' },
    
    // SPC010 (Biology)
    { id: 26, studentId: 10, courseId: 117, semester: 1, grade: 'A', registrationDate: '2026-01-15' },
    { id: 27, studentId: 10, courseId: 120, semester: 2, grade: 'A', registrationDate: '2026-01-15' }
  ],

  // Transactions/Payments
  transactions: [
    { id: 1, studentId: 1, amount: 250000, date: '2026-08-15', type: 'Tuition Payment', reference: 'TXN-001-250826', status: 'Completed', accountNumber: '7013060802' },
    { id: 2, studentId: 1, amount: 30000, date: '2026-08-15', type: 'Laboratory Fee', reference: 'TXN-002-250826', status: 'Completed', accountNumber: '7013060802' },
    { id: 3, studentId: 2, amount: 300000, date: '2026-08-10', type: 'Full Payment', reference: 'TXN-003-250826', status: 'Completed', accountNumber: '7013060802' },
    { id: 4, studentId: 4, amount: 275000, date: '2026-08-18', type: 'Tuition + Library', reference: 'TXN-004-250826', status: 'Completed', accountNumber: '7013060802' },
    { id: 5, studentId: 5, amount: 250000, date: '2026-08-12', type: 'Tuition Payment', reference: 'TXN-005-250826', status: 'Completed', accountNumber: '7013060802' },
    { id: 6, studentId: 7, amount: 300000, date: '2026-08-08', type: 'Full Payment', reference: 'TXN-006-250826', status: 'Completed', accountNumber: '7013060802' },
    { id: 7, studentId: 9, amount: 275000, date: '2026-08-05', type: 'Tuition + Library', reference: 'TXN-007-250826', status: 'Completed', accountNumber: '7013060802' },
    { id: 8, studentId: 10, amount: 290000, date: '2026-08-20', type: 'Tuition + Laboratory', reference: 'TXN-008-250826', status: 'Completed', accountNumber: '7013060802' }
  ]
};

// Query Functions
function getUserByUsername(username) {
  return DATABASE.users.find(user => user.username === username);
}

function getUserFees(userId) {
  return DATABASE.fees.filter(fee => fee.studentId === userId);
}

function getUserCourses(userId) {
  return DATABASE.registrations.filter(reg => reg.studentId === userId);
}

function getUserTransactions(userId) {
  return DATABASE.transactions.filter(trans => trans.studentId === userId);
}

function validateCredentials(username, password) {
  const user = getUserByUsername(username);
  if (user && user.password === password) {
    return { success: true, user: user };
  }
  return { success: false, message: 'Invalid username or password' };
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DATABASE;
}
