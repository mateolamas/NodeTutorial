import httpServer from '#Config/http.js'
import connectDB from '#Config/db.js';
import '#Config/env.js';


const bootstrap = async () => {

    await connectDB(process.env.MONGODB_URL);

    httpServer.listen(process.env.PORT, () => {
        console.log(`Escuchando en el puerto ${process.env.PORT}`);
    })
};

bootstrap();








