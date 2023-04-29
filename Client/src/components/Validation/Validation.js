

const validation = (userData) => {
    const errors = {};

    if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = "Email address is invalid";
    }
    if(!userData.email){
        errors.email = "Email address is required";
    }
    if(userData.email.length > 35){
        errors.email = "Email address is too long";
    }
    if(!userData.password){
        errors.password = "Password is required";
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "Password must contain at least one digit";
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "Password must be between 6 and 10 characters";
    }
        
return errors;
}

export default validation;