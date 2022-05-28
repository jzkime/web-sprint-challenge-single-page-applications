import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, "name must be at least 2 characters")
    .required("Name is required for order")
})

export default formSchema;