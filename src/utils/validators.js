export function validateEmpty(value) {

    if (!value)
        return 'Este campo é obrigatório'

    return true
}

export function validateEmail(value) {

    if (!value)
        return 'Este campo é obrigatório'

    // const emailRegex = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")
    // const emailIsValid = emailRegex.test(value)

    // if (!emailIsValid)
    //     return 'Insira um email válido'

    return true
}

export function validateUsername(value) {

    if (!value)
        return 'Este campo é obrigatório'

    if (value.length < 4)
        return 'Este campo deve conter entre 4 e 20 caracteres'

    const usernameRegex = new RegExp("^([a-zA-Z0-9_]){4,20}$")
    const usernameIsValid = usernameRegex.test(value)

    if (!usernameIsValid)
        return 'Este campo deve conter apenas letras, números e "_"'

    return true

}

export function validatePassword(value) {

    if (!value)
        return 'Este campo é obrigatório'

    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$")
    const passwordIsValid = passwordRegex.test(value)

    if (!passwordIsValid)
        return 'Este campo deve ter entre 8 e 20 caracteres, pelo menos um número, uma letra maiúscula e uma letra minúscula'

    return true
}