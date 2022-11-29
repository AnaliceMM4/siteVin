// $(function () {
//     $('#btEnviar').click(function (e) {
//         e.preventDefault();
//         validarForm();
//         exibirMsgErro(validarForm());
//     })
// })
$(function () {
    $('#btEnviar').click(function (e) {
        e.preventDefault();
        $('.erromsg').remove();
        validateForm1();
        validateForm2();
    })

    $('#form1 .user-box input' && '#form2 .user-box input').blur(function () {
        $('.erromsg').remove();
        validateForm1();
        validateForm2();
    })
})

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

// function validarTelefone(element) {
//     const tel = new RegExp(/^(\(?[0-9]{2}\)?)\s?[0-9]{4,5}(-?)[0-9]{4}$/);
//     if (!tel.test($(element).val())) {
//         return false;
//     }
//     return true;
// }
// function validarEmail(element) {
//     const email = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
//     if (!email.test($(element).val())) {
//         return false;
//     }
//     return true;
// }

// function validarCpf(element) {
//     const cpf = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
//     if (!cpf.test($(element).val())) {
//         return false;
//     }
//     return true;
// }

// function validarCnpj(element) {
//     const cnpj = new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/);
//     if (!cnpj.test($(element).val())) {
//         return false;
//     }
//     return true;
// }

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

        // min value
        if ($(this).hasClass('password')) {
            if ($.trim($(this).val()).length < 5) {
                $(this).addClass('invalid');
                $(this).after(erroMsg);
                $('.erromsg span').html(validatePasswordMin);
                $(this).focus();
                return false;
            }
        }
        else {
            $(this).removeClass('invalid');
        }

        if ($(this).hasClass('rpassword')) {
            if ($(this).val() != ($('.password').val())) {
                $(this).addClass('invalid');
                $(this).after(erroMsg);
                $('.erromsg span').html(validatePasswordMsg);
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
        // if ($(this).hasClass('data')) {
        //     const data = new RegExp^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9];{3}$;
        //     if (!data.test($(this).val())) {
        //         $(this).addClass('invalid');
        //         $(this).focus();
        //         $(this).after(erroMsg);
        //         $('.erromsg span').html(validateDataNas);
        //         return false;
        //     }
        // }
        // else {
        //     $(this).removeClass('invalid');
        // }

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

        // min value
        if ($(this).hasClass('password')) {
            if ($.trim($(this).val()).length < 5) {
                $(this).addClass('invalid');
                $(this).after(erroMsg);
                $('.erromsg span').html(validatePasswordMin);
                $(this).focus();
                return false;
            }
        }
        else {
            $(this).removeClass('invalid');
        }

        if ($(this).hasClass('rpassword')) {
            if ($(this).val() != ($('.password').val())) {
                $(this).addClass('invalid');
                $(this).after(erroMsg);
                $('.erromsg span').html(validatePasswordMsg);
                $(this).focus();
                return false;
            }
        }
        else {
            $(this).removeClass('invalid');
        }
    })

}


// function exibirMsgErro(erros) {
//     const ul = $('#msgErro');
//     ul.html("");
//     erros.forEach(function (erro) {
//         let li = `<li>${erro}</li>`
//         ul.append(li);
//     })
// }