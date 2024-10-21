function validarRegistro(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value
    let Valido = true;

    limpiarErrores();

    if (name.length ===0){
        mostrarError('nameError','El nombre es obligatorio');
        Valido = false;


    }else if (name.length > 20){
        mostrarError('nameError','El nombre no puede exceder los carateres');
        Valido = false; 

    }

    const validarEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!validarEmail.test(email)){
mostrarError('emailError', 'Ingrese un correo electronico valido')
Valido=false;
    }

    const validarPhone = /^[0-9]{10}$/;
    if (!validarPhone.test(phone)){
        mostrarError('phoneError' , 'El telefono debe tener 10 digitos');
        Valido = false;
    }

    const validarContra = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!validarContra.test(password)){
        mostrarError('passwordError' , 'El telefono debe tener por lo menos una mayuscula y un numero')
        Valido = false;
    }

    if(Valido){
        mostrarDatosEnviados(name,email,phone,password);
    }
    
}

function mostrarError(idCampoError , mensaje){
    const CampoError =document.getElementById(idCampoError);
    CampoError.textContent = mensaje;
}

function limpiarErrores(){
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
}

function mostrarDatosEnviados(name, email, phone , password){
    const registroDataDiv = document.getElementById('registroData');
    registroDataDiv.innerHTML= '';

    const titulo = document.createElement('h3');
    titulo.textContent = 'Datos enviados';

    const nameP = document.createElement('p');
    nameP.textContent = `Nombre: ${name}`;

    const emailP = document.createElement('p');
    emailP.textContent = `Correo electrónico: ${email}`;

    const phoneP = document.createElement('p');
    phoneP.textContent = `Telefono: ${phone}`;

    const passwordP = document.createElement('p');
    passwordP.textContent =  `Contraseña: ${password} `

    registroDataDiv.appendChild(titulo);
    registroDataDiv.appendChild(nameP);
    registroDataDiv.appendChild(emailP);
    registroDataDiv.appendChild(phoneP);
    registroDataDiv.appendChild(passwordP);
}

const form = document.getElementById('eventForm');
form.addEventListener('submit' , validarRegistro);