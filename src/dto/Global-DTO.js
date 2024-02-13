
import {Type} from '@sinclair/typebox';


export const idDTOSchema = Type.String({
    format : 'uuid',
    errorMessage:{
        type : 'El tipo de _id no es válido, debe ser un string',
        format : 'El formato de _id no es válido, debe ser un uuidv4',
    }
});

export const nameDTOSchema = Type.String({
    minLength : 2,
    maxLength : 20,
    errorMessage:{
        minLength : 'name debe tener al menos 2 caracteres',
        maxLength : 'name debe tener como mucho 20 caracteres'
    }
});

export const surnameDTOSchema = Type.String({
    minLength : 4,
    maxLength : 50,
    errorMessage:{
        minLength : 'surname debe tener al menos 4 caracteres',
        maxLength : 'surname debe tener como mucho 50 caracteres'
    }
});

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage:{
        type : 'El tipo de email no es válido, debe ser un string',
        format : 'El formato de email no es válido, debe cumplir el RFC5322',
    }
});

export const passwordDTOSchema = Type.String({
    format : 'password',
    minLength : 10,
    maxLength : 25,
    errorMessage:{
        type : 'El tipo de la contraseña no es válido, debe ser un string',
        format : 'El formato de la contraseña no es válido, debe contener una mayuscula, una minuscula y un numero',
        minLength : 'password debe tener al menos 10 caracteres',
        maxLength : 'password debe tener como mucho 25 caracteres'
    }
}); 