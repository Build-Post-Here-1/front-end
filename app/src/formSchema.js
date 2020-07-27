import * as yup from 'yup'
//determine the amount of characters a user will need for the username and password
const formSchema = yup.object().shape({
    username: yup
        .string()
        .required('You must enter a username')
        .min(4, 'Username must be at least 4 characters'),

    password: yup
        .string()
        .required()
        .min(4, 'Password must be at least 4 characters long')
})

export default formSchema