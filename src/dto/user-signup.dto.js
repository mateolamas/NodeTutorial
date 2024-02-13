import {Type} from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import { emailDTOSchema, idDTOSchema, nameDTOSchema, passwordDTOSchema, surnameDTOSchema } from '#Dto/Global-DTO.js';


const SignupDTOSchema = Type.Object(
    {
        _id : idDTOSchema,
        name : nameDTOSchema,
        surname : surnameDTOSchema,
        email : emailDTOSchema,
        password : passwordDTOSchema
    },
    {
        additionalProperties : false,
        errorMessage : {
            additionalProperties : 'El formato del objeto no es valido'
        }
    }
);


const ajv = new Ajv({allErrors : true}).addKeyword('kind').addKeyword('modifier');
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ['email', 'uuid']);
addErrors(ajv);

const validateSchema = ajv.compile(SignupDTOSchema);

const userSignupDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);


    if(!isDTOValid) 
        return res
            .status(400)        //devolver array con los errores (para cada error devolver su mensaje)
            .send({errors : validateSchema.errors.map(error => error.message)});
    
    next();
};

export default userSignupDTO;