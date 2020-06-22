/*
* Created by Thomas
* */


const validation = {
    email: {
        presence: {
            message: 'Please enter an email address'
        },
        email: {
            message: 'Please enter a valid email address'
        }
    },

    password: {
        presence: {
            message: 'Please enter a password'
        },
        length: {
            minimum: 4,
            message: 'Your password must be at least 4 characters'
        }
    }
}

export default validation
