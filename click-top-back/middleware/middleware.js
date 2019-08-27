


export function verifyJWT_MW(request, response, next){
    let token = request.method === 'POST' ? request.body.token : request.query.token;
    
    
    verifyJWTToken(token).then(res=>{
        request.user = res.data;
        next();
    }).catch(erro=>{
        response.status(400).json({message:'Token invalid'});

    });
}