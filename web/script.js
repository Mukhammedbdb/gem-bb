function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (!name || !email) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return false;
    }
    return true;
}
