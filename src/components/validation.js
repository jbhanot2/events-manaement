export const required = value => (value ? undefined : 'This field is mandatory.')
export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export const number = value =>
    value && (isNaN(Number(value)) || value < 0) ? 'Please enter a valid input' : undefined
export const name = value =>
    value && !/^(?![ .]+$)[a-zA-Z .]*$/.test(value) ? 'This field should contain alphabets only.' : undefined 