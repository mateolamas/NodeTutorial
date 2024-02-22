import UserModel from "#Schemas/user.schema.js";
import {compare} from 'bcrypt';
import { hash } from "bcrypt";

const userUpdatePasswordController = async (req, res) => {
    const { id } = req;
    const { oldpassword, newpassword } = req.body;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById)
        return res.status(401).send('Usuario no autorizado');



    console.log(existingUserById.password)
    console.log(oldpassword)

    const checkPassword = await compare(oldpassword, existingUserById.password)
    if (!checkPassword) return res.status(401).send('Credenciales incorrectas');


    const hashedPassword = await hash(newpassword, 12);

    existingUserById.password = hashedPassword;


    await existingUserById.save();

    return res.send('Contraseña del usuario actualizada');
}


export default userUpdatePasswordController;