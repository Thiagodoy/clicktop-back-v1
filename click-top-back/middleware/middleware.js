
const jwt = require('jsonwebtoken');

module.exports  = function (request, response, next){

    const token = request.header('Authorization');

    if(!token)return response.status(401).send("Acesso negado");

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        request.user = verified;
        next(); 
    } catch (error) {
        response.status(500).send("Token inválido");
    }
    
    
}