import { object, ObjectSchema, string } from 'yup';
import { LoginForm } from './types';
import { requiredField } from './messages';

const emailValidationSchema = string().required(requiredField);
const passwordOptionalValidationSchema = string()
    .matches(
        /^[\w#?!@$%^&*-]+$|^$/i,
        'Password can only contain Latin letters, numbers and special characters',
    )
    .test('min-password-length', 'The password must contain at least 4 characters', (value) => {
        if (!value) {
            return true;
        }

        return value.length >= 4 || value.length === 0;
    })
    .defined();
const passwordValidationSchema = passwordOptionalValidationSchema.required(requiredField);

export const loginFormValidationSchema: ObjectSchema<LoginForm> = object({
    email: emailValidationSchema,
    password: passwordValidationSchema,
});
