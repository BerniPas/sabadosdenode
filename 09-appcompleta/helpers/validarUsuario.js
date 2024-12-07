import Joi from'joi';


const validarUsuario = (persona) => {

    const schemaCreate = Joi.object({
        nombre: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });

    try {
        const { error, value } = schemaCreate.validate(persona);

        if(error){
            throw new Error(error.details[0].message);
        }

    } catch (error) {
        throw new Error(error);
    }
}

export default validarUsuario;