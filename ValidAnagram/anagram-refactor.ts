export const AnagramRefactor = (str1: string, str2: string) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    for (let i = 0; i < str1.length; i++) {
        lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (!lookup[str2[i]]) {
            return false;
        }

        lookup[str2[i]] -= 1;
    }

    return true;
}