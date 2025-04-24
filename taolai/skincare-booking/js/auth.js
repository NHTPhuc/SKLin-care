// Authentication functions

// Check if a user is logged in
const isLoggedIn = () => {
    return localStorage.getItem('currentUser') !== null;
};

// Get the current user
const getCurrentUser = () => {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
};

// Check if current user is admin
const isAdmin = () => {
    const user = getCurrentUser();
    return user && user.role === 'ROLE_ADMIN';
};

// Logout function
const logout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
};

// Redirect if not logged in
const requireAuth = () => {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
};

// Redirect if not admin
const requireAdmin = () => {
    if (!isLoggedIn() || !isAdmin()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
};

// Update UI based on authentication status
const updateAuthUI = () => {
    const authContainer = document.getElementById('auth-container');
    if (!authContainer) return;

    if (isLoggedIn()) {
        const user = getCurrentUser();
        authContainer.innerHTML = `
      <span class="mr-4">Welcome, ${user.fullName}</span>
      <button id="logout-btn" class="btn btn-outline">Logout</button>
    `;

        // Add admin dashboard link if user is admin
        if (isAdmin()) {
            const navItems = document.querySelector('.items-center');
            if (navItems) {
                const adminLink = document.createElement('a');
                adminLink.href = 'admin-dashboard.html';
                adminLink.className = 'text-gray-700 hover:text-teal-500 px-3 py-2';
                adminLink.textContent = 'Admin';
                navItems.appendChild(adminLink);
            }
        }

        // Add event listener for logout button
        document.getElementById('logout-btn').addEventListener('click', logout);
    } else {
        authContainer.innerHTML = `
      <a href="login.html" class="btn btn-outline">Login</a>
      <a href="register.html" class="ml-2 btn btn-outline">Register</a>
    `;
    }
};