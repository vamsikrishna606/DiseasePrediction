const jwt  =  require('jsonwebtoken')
const secret = 'SenecaGlobal';

function authAdmin(request, response, next) {

  let token = request.headers.authorization.split(' ')[1]
  //console.log(token);
  var decoded = jwt.verify(token, secret, function(err, decoded) {
    if(err)
      console.log(err);
    return decoded;
  });
  if (decoded && decoded.role === 'admin') {
    return next();
  }
  return response.status(401).json({ message: 'authentication Error' });
}

function authUser(request, response, next) {
 
   let token = request.headers.authorization.split(' ')[1]
   //console.log(token);
   var decoded = jwt.verify(token, secret, function(err, decoded) {
    if(err)
      console.log(err);
     return decoded;
   });
   console.log(decoded);
   if (decoded && (decoded.role === 'admin' || decoded.role === 'user')) {
     return next();
   }
   return response.status(401).json({ message: 'Only admin can access' });
 
}


module.exports = {authAdmin,authUser}