const jwt = require('jsonwebtoken');
const multer = require('multer');

const middlewareJwt = function (request, response, next) {

    const token = request.header('Authorization');

    if (!token) return response.status(401).send("Acesso negado");

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        request.user = verified;
        next();
    } catch (error) {
        response.status(500).send("Token inválido");
    }

}

const middlewareAvatarMulter = (multer({
    storage: multer.diskStorage({
        destination: (request, file, cb) => {
            cb(null, './public/avatar');
        },
        filename: (request, file, cb) => {                     
            cb(null,`avatar-${request.user.id}.${file.originalname.split('.')[1]}`);
        },
        fileFilter: (req, file, cb) => {
            const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);
            return isAccepted ? cb(null, true) : cb(null, false);
        }
    })
}));

module.exports = {middlewareAvatarMulter,middlewareJwt}