const btnFinalizar = document.querySelector(`#finalizarCompra`);
const usuario = {
    mailUsuario: ``,
    numeroTarjeta: ``,
    numeroSeguridad: ``
};

btnFinalizar.addEventListener(`click`, async () => {
    const step1 = await Swal.fire({
        title: `Tambien podes comprar tu Cuadernillo de Orientacion y Memoria por solo u$7500! Si lo queres, segui las instrucciones.`,
        text: `Ingrese su mail`,
        input: `email`,
        inputPlaceholder: `Correo electrónico`,
        confirmButtonText: `Siguiente`,
        showCancelButton: true,
        confirmButtonColor: '#006ec1',
        cancelButtonColor: '#525252',
        customClass: {
            title: 'my-custom-title',
            container: 'my-custom-content',
            input: 'my-custom-input',
            actions: 'my-custom-actions',
        }
    });

    if (step1.isConfirmed) {
        usuario.mailUsuario = step1.value;

        const step2 = await Swal.fire({
            title: `Ya casi terminamos..`,
            text: `Ingresa tu nombre`,
            input: `text`,
            inputPlaceholder: `Nombre del titular de la compra`,
            confirmButtonText: `Siguiente`,
            showCancelButton: true,
            confirmButtonColor: '#006ec1',
            cancelButtonColor: '#525252',
            customClass: {
                title: 'my-custom-title',
                container: 'my-custom-content',
                input: 'my-custom-input',
                actions: 'my-custom-actions',
            }
        });

        if (step2.isConfirmed) {
            usuario.nombreTitular = step2.value;
        
            const step3 = await Swal.fire({
                title: `Ya podes pagar y es tuyo!! Solo segui el link.`,
                text: `https://www.mercadopago.com.ar/`,
                showCancelButton: true,
                confirmButtonColor: '#006ec1',
                cancelButtonColor: '#525252',
                customClass: {
                    title: 'my-custom-title',
                    container: 'my-custom-content',
                    input: 'my-custom-input',
                    actions: 'my-custom-actions',
                }
            });
        
            if (step3.isConfirmed) {
                continuarProceso(usuario)
            } else {
                await Swal.fire({
                    title: 'Muchas gracias por tu compra!!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#006ec1',
                });
            }
        }
    }
    limpiarTotal();
    limpiarCarrito();
});

function isValidCreditCardNumber(number) {
    const cleanedNumber = number.replace(/[-\s]+/g, ``);
    return /^\d{16}$/.test(cleanedNumber);
};

function isValidSecurityCode(code) {
    return /^\d{3,4}$/.test(code);
};






