export function validateEmailFormat(email: string) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

export function validatePasswordFormat(password: string){
    // Password validation regex pattern
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-_])[A-Za-z\d#?!@$%^&*-_]{6,}$/;
    return passwordPattern.test(password)
}