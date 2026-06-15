// Portal JavaScript Functionality

// Page Load Event
document.addEventListener('DOMContentLoaded', function() {
  initializeFormHandlers();
  initializePasswordToggle();
  initializeFullPageTap();
  console.log('Portal initialized successfully');
});

// Tap Entire Portal to Focus Login
function focusLoginForm() {
  const usernameInput = document.querySelector('input[placeholder="username"]');
  if (usernameInput && !usernameInput.value) {
    usernameInput.focus();
    showTapIndicator('Enter your SPC code', 2000);
  }
}

// Initialize Full Page Tap
function initializeFullPageTap() {
  document.body.addEventListener('click', function(e) {
    // Only focus if clicking on non-input areas
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON' && 
        !e.target.closest('.exams') && !e.target.closest('.btn') &&
        !e.target.closest('footer') && !e.target.closest('a')) {
      focusLoginForm();
    }
  });
  
  // Mobile touch support
  document.addEventListener('touchend', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON' && 
        !e.target.closest('.exams') && !e.target.closest('.btn') &&
        !e.target.closest('footer') && !e.target.closest('a')) {
      focusLoginForm();
    }
  }, false);
  
  // Show initial tip
  showTapIndicator('Tap Anywhere to Login', 3000);
}

// Show Tap Indicator
function showTapIndicator(message, duration = 2000) {
  const indicator = document.getElementById('tapIndicator');
  if (indicator) {
    indicator.innerHTML = '<i class="fa-solid fa-hand-pointer"></i> ' + message;
    indicator.classList.add('show');
    setTimeout(() => {
      indicator.classList.remove('show');
    }, duration);
  }
}

// Form Submission Handler
function initializeFormHandlers() {
  const form = document.querySelector('form');
  const usernameInput = document.querySelector('input[placeholder="username"]');
  const passwordInput = document.querySelector('input[placeholder="Password"]');
  const submitBtn = document.querySelector('#submit');

  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    handleLogin(usernameInput.value, passwordInput.value);
  });

  // Allow Enter key to submit
  passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleLogin(usernameInput.value, passwordInput.value);
    }
  });
}

// Login Handler
function handleLogin(username, password) {
  // Validate inputs
  if (!username || !password) {
    showMessage('Please enter both username and password', 'error');
    return;
  }

  // Validate credentials against database
  const result = validateCredentials(username, password);

  if (result.success) {
    showMessage('Login successful! Redirecting...', 'success');
    console.log('User logged in:', result.user);
    
    // Store user session
    sessionStorage.setItem('currentUser', JSON.stringify(result.user));
    
    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1500);
  } else {
    showMessage(result.message, 'error');
    console.warn('Login failed for user:', username);
  }
}

// Password Visibility Toggle
function initializePasswordToggle() {
  const passwordInput = document.querySelector('input[placeholder="Password"]');
  const eyeIcon = document.querySelector('input[placeholder="Password"]').nextElementSibling;

  if (eyeIcon && eyeIcon.classList.contains('fa-eye-slash')) {
    eyeIcon.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
      } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
      }
    });
  }
}

// Message Display Function
function showMessage(message, type) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message-box ' + type;
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 5px;
    font-weight: bold;
    z-index: 1000;
    animation: slideIn 0.3s ease;
    ${type === 'success' ? 'background-color: #4CAF50; color: white;' : 'background-color: #f44336; color: white;'}
  `;
  document.body.appendChild(messageDiv);

  // Auto remove after 3 seconds
  setTimeout(() => {
    messageDiv.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => messageDiv.remove(), 300);
  }, 3000);
}

// Button Navigation Handlers
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.exams button, .btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const linkText = this.textContent.trim();
      
      if (linkText.includes('MOP-UP COURSE REGISTRATION')) {
        console.log('Navigating to MOP-UP COURSE REGISTRATION');
        // window.location.href = 'mopup-registration.html';
      } else if (linkText.includes('PAY FEES')) {
        console.log('Navigating to PAY FEES');
        // window.location.href = 'pay-fees.html';
      } else if (linkText.includes('Home')) {
        console.log('Navigating to Home');
        // window.location.href = 'home.html';
      } else if (linkText.includes('PRINT AND VERIFY')) {
        console.log('Navigating to PRINT AND VERIFY INVOICE/RECEIPT');
        // window.location.href = 'print-invoice.html';
      }
    });
  });
});

// Validate Credentials Function (from database.js)
function validateCredentials(username, password) {
  const user = DATABASE.users.find(user => user.username === username);
  if (user && user.password === password) {
    return { success: true, user: user };
  }
  return { success: false, message: 'Invalid username or password' };
}

// Get user info
function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem('currentUser'));
}

// Get user fees
function getUserFeesInfo(userId) {
  return DATABASE.fees.filter(fee => fee.studentId === userId);
}

// Get user transactions
function getUserTransactionsInfo(userId) {
  return DATABASE.transactions.filter(trans => trans.studentId === userId);
}

// Logout function
function logout() {
  sessionStorage.removeItem('currentUser');
  console.log('User logged out');
  // In a real app: window.location.href = 'index.html';
}

// Input validation utilities
function isValidSPC(spc) {
  return /^SPC\d{3,}$/i.test(spc);
}

function isValidJambReg(jamb) {
  return /^[0-9]{8,}$/.test(jamb);
}

function isValidMatricNo(matric) {
  return /^[A-Z]{3}\d{4}\d{3}$/.test(matric);
}

// Console logging for debugging
console.log('Portal Script Loaded');
console.log('Available database functions:');
console.log('- validateCredentials(username, password)');
console.log('- getCurrentUser()');
console.log('- getUserFeesInfo(userId)');
console.log('- getUserTransactionsInfo(userId)');
console.log('- logout()');
