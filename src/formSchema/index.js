import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, "name must be at least 2 characters")
    .required("Name is required for order"),
    size: yup.string().oneOf(["small", "medium", "large", "super"], "Must Choose a size").required("Must choose a size"),
    pepperoni: yup.boolean(),
    veggie: yup.boolean(),
    meat: yup.boolean(),
    pineapple: yup.boolean(),
    special: yup.string(), 
    gf: yup.boolean()
})

export default formSchema;