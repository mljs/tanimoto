'use strict';

exports.similarity = function(A, B) {
    const union = new Set(A.concat(B));
    A = new Set(A);
    B = new Set(B);
    let M11 = 0;
    let M01 = 0;
    let M10 = 0;
    for(let key of union) {
        if(A.has(key)) {
            if(B.has(key)) {
                M11++;
            } else {
                M10++;
            }
        } else if(B.has(key)) {
            M01++;
        }
    }

    return M11 / (M01 + M10 + M11);

};

exports.distance = function(A, B) {
    return 1 - exports.similarity(A, B);
};