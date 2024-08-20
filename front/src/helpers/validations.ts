export const validateSignin = (signinValues: {
    email:string,
    password:string
}) => {
    let errors = {};
    if (!signinValues.email) {
        errors= {...errors, email: "Email is required"};
    }
    if (!signinValues.password) {
        errors= {...errors, email: "Password is required"};
    }
    if  (!/^\w+([.-]?w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(signinValues.email)) {
        errors= {...errors, email: "Email is invalid"};
    }
    if (signinValues.password.length < 6 ) {
        errors= {...errors, password: "Password must be at lest 6 characters"};
    }
    if (!/[a-z]/.test(signinValues.password)) {
        errors= {...errors, password: "Password must contain at least one lowercase letter"};
    }
    if (!/\d/.test(signinValues.password)) {
        errors= {...errors, password: "Password must contain at least one number"};
    }

    return errors;

};

export const validateSignup = (signUpValues: {
    email:string;
    password: string;
    name:string;
    phone: string;
    address: string;
}) => {
    let errors = {};
    if (!signUpValues.email) {
        errors= {...errors, email: "Email is required"};
    }
    if (!signUpValues.password) {
        errors= {...errors, email: "Password is required"};
    }
    if  (!/^\w+([.-]?w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(signUpValues.email)) {
        errors= {...errors, email: "Email is invalid"};
    }
    if (signUpValues.password.length < 6 ) {
        errors= {...errors, password: "Password must be at lest 6 characters"};
    }
    if (!/[a-z]/.test(signUpValues.password)) {
        errors= {...errors, password: "Password must contain at least one lowercase letter"};
    }
    if (!/\d/.test(signUpValues.password)) {
        errors= {...errors, password: "Password must contain at least one number"};
    }

    if (!signUpValues.name) {
        errors= {...errors, name: "Name is required"};
    }
    if (!signUpValues.phone) {
        errors= {...errors, phone: "Phone Number is required"};
    }
    if (!/\d+$/.test(signUpValues.phone)) {
        errors= {...errors, phone: "Password must contain at least one number"};
    }
    if (!signUpValues.address) {
        errors= {...errors, address: "Address is required"};
    }
    
    return errors;

};