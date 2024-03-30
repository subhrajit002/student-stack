function validation(values) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.full_name === "") {
        error.full_name = "Name should not be empty"
    } else {
        error.full_name = ""
    }

    if (values.email === "") {
        error.email = "Email should not be empty"
    } else {
        error.email = ""
    }

    if (values.user_name === "") {
        error.user_name = "User name should not be empty"
    } else {
        error.user_name = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    } else {
        error.password = ""
    }
    return error;
}

export default validation;