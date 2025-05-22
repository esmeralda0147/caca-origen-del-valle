const formValidation = {
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    validatePhone: (phone) => {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    },

    validatePassword: (password) => {
        // Al menos 8 caracteres, una mayúscula, una minúscula y un número
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return re.test(password);
    },

    validateRequired: (value) => {
        return value && value.trim() !== '';
    },

    validateLength: (value, min, max) => {
        return value.length >= min && value.length <= max;
    },

    // Validación para tarjetas de crédito
    validateCardNumber: (number) => {
        // Eliminar espacios y guiones
        const cleanNumber = number.replace(/\s|-/g, '');
        // Debe tener 16 dígitos
        return cleanNumber.length === 16 && !isNaN(cleanNumber);
    },

    validateCardCVC: (cvc) => {
        // Debe tener 3 dígitos
        return cvc.length === 3 && !isNaN(cvc);
    },

    // Validación para fechas
    validateDate: (date) => {
        const dateObj = new Date(date);
        return dateObj instanceof Date && !isNaN(dateObj);
    },

    // Validación para números
    validateNumber: (num) => {
        return !isNaN(num) && num >= 0;
    },

    // Validación para URL
    validateUrl: (url) => {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }
};

export default formValidation;
