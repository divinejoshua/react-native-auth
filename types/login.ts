export interface LoginForm {
    email       : string;
    password    : string;
    errors      : FormErrors[];
}

export interface FormErrors {
    emailError  : boolean;
    passwordError  : boolean;
}