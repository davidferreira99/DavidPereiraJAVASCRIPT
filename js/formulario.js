// Javascript para el formulario

       document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('formulario');
        const nombreInput = document.getElementById('name');
        const apellidoInput = document.getElementById('apellido');
        const telefonoInput = document.getElementById('telefono');
        const emailInput = document.getElementById('email');
        const productInput = document.getElementById('productos');
        const timeInput = document.getElementById('plazo');
        const extraInputs = document.querySelectorAll('.extra');
        const precioFinal = document.getElementById('precioFinal');
        const privacidadCheck = document.getElementById('privacidad');
        const enviarButton = document.getElementById('enviar');
    
        function calculateBudget() {
            const productPrice = parseFloat(productInput.value) || 0;
            const timeDiscount = parseInt(timeInput.value) || 1;
            let extraTotal = 0;
    
            extraInputs.forEach(extra => {
                if (extra.checked) extraTotal += parseFloat(extra.value);
            });
    
            const basePrice = productPrice + extraTotal;
            const discount = timeDiscount > 12 ? basePrice * 0.1 : 0; // 10% descuento si maior a 12 meses
            const total = basePrice - discount;
    
            precioFinal.innerText = `€${total.toFixed(2)}`;
        }
    
        function validarInput() {
            let valido = true;
    
            // Validar nombre
            if (!/^[a-zA-Z\s]{1,15}$/.test(nombreInput.value)) {
                nombreInput.classList.add('error');
                valido = false;
            } else {
                nombreInput.classList.remove('error');
            }
    
            // Validar apellidos
            if (!/^[a-zA-Z\s]{1,40}$/.test(apellidoInput.value)) {
                apellidoInput.classList.add('error');
                valido = false;
            } else {
                apellidoInput.classList.remove('error');
            }
    
            // Validar teléfono
            if (!/^\d{9}$/.test(telefonoInput.value)) {
                telefonoInput.classList.add('error');
                valido = false;
            } else {
                telefonoInput.classList.remove('error');
            }
    
            // Validar correo
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                emailInput.classList.add('error');
                valido = false;
            } else {
                emailInput.classList.remove('error');
            }
    
            return valido;
        }
    
        function resetForm() {
            form.reset();
            precioFinal.innerText = '€0';
        }
    
        if (form) {
            form.addEventListener('input', calculateBudget);
    
            enviarButton.addEventListener('click', () => {
                if (validarInput() && privacidadCheck.checked) {
                    alert('Formulario enviado correctamente.');
                    resetForm();
                } else {
                    alert('Completa todos los campos correctamente.');
                }
            });
        }
    });
          





   