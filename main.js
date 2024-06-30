document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.form__principal');

    // Manejar el inicio de sesión
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (!users[username] || users[username].password !== password) {
            alert('Credenciales incorrectas');
            return;
        }

        alert('Login exitoso');
        loginForm.reset();
        window.location.href = 'admin.html';
    });
});
