var crypto = require("crypto");

export const userContainer = {
    getUserByLogin:getUserByLogin,
    getHash:getHash
};

function getUserByLogin(login){

      return fetch("http://localhost:3001/users/get-all-users")
        .then(res => res.json())
        .then(
            (result) => {
                let user = {};
                for(let i = 0; i < result.length; i++){
                    if(result[i].login == login) {
                        user = result[i];
                        break;
                    }

                }
                return user;
            },

            (error) => {

            }
        )

}
function getHash(input){
    let sha256 = crypto.createHash("sha256");
    sha256.update(input, "utf8");
    let result = sha256.digest("base64");
    return result;
}


