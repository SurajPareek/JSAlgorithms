const same = (arr1: Array<number>, arr2: Array<number>) => {
    if (arr1.length !== arr2.length) {  // predefined boundary condition
        return false;
    }

    let frequencyMap = {};
    let sqMap = {};

    arr1.forEach(n => {
        let i = n * n;
        frequencyMap[i] = (frequencyMap[i] || 0) + 1;
    });
    
    arr2.forEach(i => {
        sqMap[i] = (sqMap[i] || 0) + 1;
    });

    for (let i = 0; i < arr2.length; i++) {
        let v = arr2[i];
        if (sqMap[v] !== frequencyMap[v]) {
            return false;
        }
    }
    return true;
}
export const Same = same;