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


const validatejs = require("validate.js");

export default function validate(fieldName, value) {
    // Validate.js validates your values as an object
    // e.g. var form = {email: 'email@example.com'}
    // Line 8-9 creates an object based on the field name and field value
    var formValues = {}
    formValues[fieldName] = value

    // Line 13-14 creates an temporary form with the validation fields
    // e.g. var formFields = {
    //                        email: {
    //                         presence: {
    //                          message: 'Email is blank'
    //                         }
    //                       }
    var formFields = {}
    formFields[fieldName] = validation[fieldName]


    // The formValues and validated against the formFields
    // the variable result hold the error messages of the field
    const result = validatejs(formValues, formFields)

    // If there is an error message, return it!
    if (result) {
        // Return only the field error message if there are multiple
        return result[fieldName][0]
    }

    return null
}
