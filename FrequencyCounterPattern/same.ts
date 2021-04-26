const same = (arr1: Array<number>, arr2: Array<number>) => {
    if (arr1.length !== arr2.length) {  // predefined boundary condition
        return false;
    }

    let frequencyMap = {};
    arr1.forEach(n => {
        let i = n * n;
        frequencyMap[i] = (frequencyMap[i] !== undefined && frequencyMap[i].count) ? frequencyMap[i].count++ : { count: 1 };
    });
    let sqMap = {};
    arr2.forEach(i => {
        sqMap[i] = (sqMap[i] !== undefined && sqMap[i].count) ? sqMap[i].count++ : { count: 1 };
    });

    for (let i = 0; i < arr2.length; i++) {
        let v = arr2[i];
        if (sqMap[v] && frequencyMap[v] && sqMap[v].count !== frequencyMap[v].count) {
            return false;
        }
    }
    return true;
}
export const Same = same;