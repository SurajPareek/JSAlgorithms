export const Anagram = (str1: string, str2: string) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let firstMap = {};
    let secondMap = {};
    for (let i = 0; i < str1.length; i++) {
        let ch = str1.charAt(i);
        firstMap[ch] = (firstMap[ch] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let ch = str2.charAt(i);
        secondMap[ch] = (secondMap[ch] || 0) + 1;
    }

    for (let key in firstMap) {
        if (firstMap[key] !== secondMap[key]) {
            return false;
        }
    }
    return true;
}