import {Type} from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { nameDTOSchema, surnameDTOSchema } from '#Dto/Global-DTO.js';


const UpdateDataDTOSchema = Type.Object(
    {
        name : nameDTOSchema,
        surname : surnameDTOSchema,
    },
    {
        additionalProperties : false,
        errorMessage : {
            additionalProperties : 'El formato del objeto no es valido'
        }
    }
);


const ajv = new Ajv({allErrors : true});
addErrors(ajv);

const validateSchema = ajv.compile(UpdateDataDTOSchema);

const userUpdateDataDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);


    if(!isDTOValid) 
        return res
            .status(400)        //devolver array con los errores (para cada error devolver su mensaje)
            .send({errors : validateSchema.errors.map(error => error.message)});
    
    next();
};

export default userUpdateDataDTO;