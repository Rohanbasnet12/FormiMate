import * as yup from "yup";

const passwordRules = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5).matches(passwordRules, {
        message: 'Please create a stronger password'
    }).required("Required")
})