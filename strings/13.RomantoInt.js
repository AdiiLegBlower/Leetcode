/* 
Valid Roman numeral notation only allows one smaller-value symbol immediately before one specific larger one 
never two smaller ones stacked to subtract from a bigger number. 
So IX (9) is valid, but IIX (attempting to mean 8) is not standard notation — you'd write VIII instead.
*/


var romanToInt = function(s) {
    let Value = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    let Sum = 0;
    let subtract = 0
    for (let i = 0; i < s.length; ++i){
        if (Value[`${s[i + 1]}`] > Value[`${s[i]}`] ){
            Sum -= Value[`${s[i]}`]
        }
        else {
            Sum += Value[`${s[i]}`]
        }
    }
    return Sum 
};