const buttonRegistro = document.querySelector('#btEnviar');

// $(function () {
buttonRegistro.addEventListener('click', function (e) {
    e.preventDefault();
    $('.erromsg').remove();
    validateForm2();
    criarCadastro();
})
// })

const validateRequiredMsg = "Campo de preenchimento obrigatório.";
const validateTelMsg = "Formato de telefone inválido.";
const validateCpfMsg = "Formato do CPF não é válido.";
const validateCnpjMsg = "Formato do CNPJ não é válido."
const validateEmailMsg = "O e-mail inserido não é válido.";
const validateDataNas = "A data de nascimento inserida não é válida"
const validatePasswordMin = "Campo senha dever ter no mínimo 5 caracteres.";
const validatePasswordMsg = "Campos não conferem";

const erroMsg = `<div class="erromsg"><span></span></div>`

function validarCamposObrigatorios(element) {
    return ($(element).val()).length > 0;
}

function validateForm1() {
    let erros = [];
    $('#form1 .user-box input').each(function () {
        if ($(this).val() == "") {
            $(this).addClass('invalid');
            $(this).after(erroMsg);
            $('.erromsg span').html(validateRequiredMsg);
            $(this).focus();
            return false;
        }
        else {
            $(this).removeClass('invalid');
        }
        if ($(this).hasClass('email')) {
            const email = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
            if (!email.test($.trim($(this).val()))) {
                $(this).addClass('invalid');
                $(this).after(erroMsg);
                $('.erromsg span').html(validateEmailMsg);
                $(this).focus();
                return false;
            }
        }
        else {
            $(this).removeClass('invalid');
        }
    })
}

function validateForm2() {
    $('#form2 .user-box input').each(function () {
        if ($(this).val() == "") {
            $(this).addClass('invalid');
            $(this).after(erroMsg);
            $('.erromsg span').html(validateRequiredMsg);
            $(this).focus();
            return false;
        }
        else {
            $(this).removeClass('invalid');
        }

        if ($(this).hasClass('cpf')) {
            const cpf = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
            if (!cpf.test($(this).val())) {
                $(this).addClass('invalid');
                $(this).focus();
                $(this).after(erroMsg);
                $('.erromsg span').html(validateCpfMsg);
                return false;
            }
        }
        else {
            $(this).removeClass('invalid');
        }

        if ($(this).hasClass('cnpj')) {
            const cnpj = new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/);
            if (!cnpj.test($(this).val())) {
                $(this).addClass('invalid');
                $(this).focus();
                $(this).after(erroMsg);
                $('.erromsg span').html(validateCnpjMsg);
                return false;
            }
        }
        else {
            $(this).removeClass('invalid');
        }

        if ($(this).hasClass('tel')) {
            const tel = new RegExp(/^(\(?[0-9]{2}\)?)\s?[0-9]{4,5}(-?)[0-9]{4}$/);
            if (!tel.test($(this).val())) {
                $(this).addClass('invalid');
                $(this).focus();
                $(this).after(erroMsg);
                $('.erromsg span').html(validateTelMsg);
                return false;
            }
        }
        else {
            $(this).removeClass('invalid');
        }

        if ($(this).hasClass('email')) {
            const email = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
            if (!email.test($.trim($(this).val()))) {
                $(this).addClass('invalid');
                $(this).after(erroMsg);
                $('.erromsg span').html(validateEmailMsg);
                $(this).focus();
                return false;
            }
        }
        else {
            $(this).removeClass('invalid');
        }
    })


}
const array = [];
function criarCadastro() {
    const form2 = document.querySelector('#form2')
    const registro = new novoRegistro(form2.cpf.value,
        form2.nome.value,
        form2.data.value,
        // form2.radioM.value,
        // form2.radioF.value,
        // form2.genero.option,
        form2.email.value,
        form2.tel.value,
        form2.rua.value,
        form2.numero.value,
        form2.bairro.value,
        form2.cidade.value,
        form2.estado.value,
        form2.cep.value);

    console.log(registro);
    array.push(registro);
    setLocalStorage(array);
}

//       radioM, radioF, genero,
function novoRegistro(cpf, nome, data, email, tel, rua, numero, bairro, cidade,
    estado, cep) {
    this.cpf = cpf;
    this.nome = nome;
    this.data = data;
    // this.radioM = radioM;
    // this.radioF = radioF;
    // this.genero = genero; 
    this.email = email;
    this.tel = tel;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
}

function setLocalStorage(arrRegistro) {
    localStorage.setItem('registros', JSON.stringify(arrRegistro))
}

// function exibirMsgErro(erros) {
//     const ul = $('#msgErro');
//     ul.html("");
//     erros.forEach(function (erro) {
//         let li = `<li>${erro}</li>`
//         ul.append(li);
//     })
// }