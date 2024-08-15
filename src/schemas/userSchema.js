import * as Yup from 'yup'

const userSchema = Yup.object().shape({
    name: Yup.string().required('campo obrigatório'),
    surname: Yup.string().required('campo obrigatório'),
})

export default userSchema
