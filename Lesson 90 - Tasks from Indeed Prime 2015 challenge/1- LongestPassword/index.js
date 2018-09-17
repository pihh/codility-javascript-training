function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let passwords = S.split(' ');
    let max = -1;

    const validPassword = function(password){
        password = password.toLowerCase();

        const regAlphaNumeric = /[^a-z0-9]/gi;
        const regNumeric = /[0-9]/gi;
        const regChars = /[a-z]/gi;

        const alphaNumeric = password.replace(regAlphaNumeric,'');
        const numeric = alphaNumeric.replace(regChars,'');
        const chars = alphaNumeric.replace(regNumeric,'');

        return alphaNumeric === password
            && numeric.length % 2 === 1
            && chars.length % 2 === 0 ;
    };

    passwords.sort((a,b) => b.length - a.length);

    for(let i = 0; i < passwords.length; i++){
        let password = passwords[i];
        if(validPassword(password)){
            max = password.length;
            break;
        }
    }

    return max;
}
