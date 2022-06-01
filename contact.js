
function validacion()
{
    valor = document.getElementById("name").value;
    if( valor == null || valor.length == 0)
    {
        document.getElementById('mensaje-nombre').innerHTML = "Tenés que completar el nombre!";
        elemento = document.getElementById('name');
        elemento.focus();
        return false;
    }
    valor = document.getElementById("email").value;
    if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valor)))
    {
        document.getElementById('mensaje-email').innerHTML = "No es una dirección de email correcta" ;
        elemento = document.getElementById('email');
        elemento.value = '';
        elemento.focus();
        return false;
    }
    valor = document.getElementById("tel").value;
    if (/^[09][0-9]{1,7}$/.test('091234567'))
    {
        document.getElementById('mensaje-tel').innerHTML = "No corresponde a un número de teléfono";
        elemento = document.getElementById('tel');
        elemento.value = '';
        elemento.focus();
        return false;
    }
    valor = document.getElementById("comentario").value;
    if (valor == null || valor.length == 0)
    {
        document.getElementById('mensaje-comentario').innerHTML = "No olvides escribir su comentario" ;
        elemento = document.getElementById('comentario');
        elemento.value = '';
        elemento.focus();
        return false;
    }   
    return true;
}

