// Dashboard JavaScript - Populate and manage dashboard content

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', function() {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  
  // Redirect to login if not authenticated
  if (!currentUser) {
    console.warn('No user session found. Redirecting to login.');
    window.location.href = 'login.html';
    return;
  }

  console.log('Dashboard loaded for user:', currentUser.username);
  
  // Initialize dashboard sections
  loadUserData(currentUser);
  setupSectionNavigation();
});

// Load and populate all user data
function loadUserData(user) {
  populateProfile(user);
  populateFees(user);
  populateTransactions(user);
  populateCourses(user);
  populateSettings(user);
  updateGreeting(user);
}

// Update user greeting in header
function updateGreeting(user) {
  const greeting = document.getElementById('userGreeting');
  if (greeting) {
    const firstName = user.fullName.split(' ')[0];
    greeting.textContent = `Welcome, ${firstName}`;
  }
}

// ========================================
// PROFILE SECTION
// ========================================

function populateProfile(user) {
  const deptCode = user.departmentId ? getDeptNameByCode(user.departmentId) : 'Unknown';
  const courseCount = getStudentCourseCount(user.id);

  document.getElementById('profileName').textContent = user.fullName;
  document.getElementById('profileSPC').textContent = user.username;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileType').textContent = user.studentType || 'Student';
  document.getElementById('profileDept').textContent = user.department || deptCode;
  document.getElementById('profileAvailableCourses').textContent = courseCount + ' Course(s)';
  document.getElementById('profileMatric').textContent = user.matricNo || 'N/A (New Student)';
}

// Helper function to get department name by ID
function getDeptNameByCode(deptId) {
  const dept = DATABASE.departments.find(d => d.id === deptId);
  return dept ? dept.name : 'Unknown';
}

// Count courses for student
function getStudentCourseCount(userId) {
  return DATABASE.registrations.filter(reg => reg.studentId === userId).length;
}

// ========================================
// FEES SECTION
// ========================================

function populateFees(user) {
  const fees = DATABASE.fees.filter(fee => fee.studentId === user.id);
  
  // Calculate totals
  let totalAmount = 0;
  let paidAmount = 0;
  let pendingAmount = 0;

  fees.forEach(fee => {
    totalAmount += fee.amount;
    if (fee.status === 'Paid') {
      paidAmount += fee.amount;
    } else {
      pendingAmount += fee.amount;
    }
  });

  // Update summary cards
  document.getElementById('totalFees').textContent = formatCurrency(totalAmount);
  document.getElementById('paidFees').textContent = formatCurrency(paidAmount);
  document.getElementById('pendingFees').textContent = formatCurrency(pendingAmount);

  // Populate fees table
  const feesTableBody = document.getElementById('feesTableBody');
  feesTableBody.innerHTML = '';

  if (fees.length === 0) {
    feesTableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #999; padding: 20px;">No fees on record</td></tr>';
    return;
  }

  fees.forEach(fee => {
    const row = document.createElement('tr');
    const statusBadgeClass = fee.status === 'Paid' ? 'status-paid' : 'status-pending';
    const actionButton = fee.status === 'Paid' 
      ? '<button class="btn-pay-single" disabled>Paid</button>'
      : '<button class="btn-pay-single" onclick="payFee(' + fee.id + ')">Pay Now</button>';

    row.innerHTML = `
      <td>${fee.feeType}</td>
      <td>${formatCurrency(fee.amount)}</td>
      <td>${formatDate(fee.dueDate)}</td>
      <td><span class="status-badge ${statusBadgeClass}">${fee.status}</span></td>
      <td>${actionButton}</td>
    `;
    feesTableBody.appendChild(row);
  });
}

// Format currency to Nigerian Naira
function formatCurrency(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Pay fee button handler
function payFee(feeId) {
  alert('Payment processing not yet implemented. In production, this would redirect to a payment gateway.');
}

// ========================================
// TRANSACTIONS SECTION
// ========================================

function populateTransactions(user) {
  const transactions = DATABASE.transactions.filter(trans => trans.studentId === user.id);
  const transactionsTableBody = document.getElementById('transactionsTableBody');
  transactionsTableBody.innerHTML = '';

  if (transactions.length === 0) {
    transactionsTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #999; padding: 20px;">No transactions on record</td></tr>';
    return;
  }

  transactions.forEach(trans => {
    const row = document.createElement('tr');
    const statusBadgeClass = trans.status === 'Completed' ? 'status-completed' : 'status-pending';
    
    row.innerHTML = `
      <td>${formatDate(trans.date)}</td>
      <td>${trans.type}</td>
      <td>${formatCurrency(trans.amount)}</td>
      <td>${trans.accountNumber}</td>
      <td>${trans.reference}</td>
      <td><span class="status-badge ${statusBadgeClass}">${trans.status}</span></td>
    `;
    transactionsTableBody.appendChild(row);
  });
}

// ========================================
// COURSES SECTION
// ========================================

function populateCourses(user) {
  const userCourses = DATABASE.registrations.filter(reg => reg.studentId === user.id);
  const coursesGrid = document.getElementById('coursesGrid');
  coursesGrid.innerHTML = '';

  if (userCourses.length === 0) {
    coursesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 30px;">No courses registered</p>';
    return;
  }

  userCourses.forEach(registration => {
    const course = DATABASE.courses.find(c => c.id === registration.courseId);
    if (course) {
      const courseCard = document.createElement('div');
      courseCard.className = 'course-card';
      courseCard.innerHTML = `
        <div class="course-code">${course.code}</div>
        <h4>${course.title}</h4>
        <div class="course-info">
          <span><i class="fa-solid fa-book"></i> ${course.credits} Credits</span>
          <span><i class="fa-solid fa-calendar"></i> Sem ${course.semester}</span>
        </div>
        <div class="course-grade">
          Grade: <strong>${registration.grade}</strong>
        </div>
      `;
      coursesGrid.appendChild(courseCard);
    }
  });
}

// Count courses by department for student
function getStudentDeptCode(userId) {
  const user = DATABASE.users.find(u => u.id === userId);
  return user ? user.departmentId : null;
}

// ========================================
// SETTINGS SECTION
// ========================================

function populateSettings(user) {
  document.getElementById('settingsEmail').value = user.email;
}

// ========================================
// SECTION NAVIGATION
// ========================================

function setupSectionNavigation() {
  // Add click handlers for navigation items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      showSection(sectionId);
    });
  });
}

// Show specific section
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Remove active class from nav items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
  });

  // Show selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }

  // Add active class to corresponding nav item
  const selectedNavItem = document.querySelector(`.nav-item[href="#${sectionId}"]`);
  if (selectedNavItem) {
    selectedNavItem.classList.add('active');
  }

  console.log('Switched to section:', sectionId);
}

// ========================================
// LOGOUT FUNCTION
// ========================================

function logout() {
  if (confirm('Are you sure you want to logout?')) {
    sessionStorage.removeItem('currentUser');
    console.log('User logged out successfully');
    window.location.href = 'login.html';
  }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Get current user from session
function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem('currentUser'));
}

// Save settings
function saveSettings() {
  alert('Settings saved successfully! (This is a demo message)');
}

// Change password
function changePassword() {
  alert('Password change feature coming soon!');
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', function() {
  const btnSaveSettings = document.querySelector('.btn-save-settings');
  if (btnSaveSettings) {
    btnSaveSettings.addEventListener('click', saveSettings);
  }

  const btnChangePassword = document.querySelector('.btn-change-pwd');
  if (btnChangePassword) {
    btnChangePassword.addEventListener('click', changePassword);
  }
});

// Console logging
console.log('Dashboard Script Loaded');
console.log('Available functions:');
console.log('- showSection(sectionId)');
console.log('- logout()');
console.log('- payFee(feeId)');
