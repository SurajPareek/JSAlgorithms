import { Anagram } from "./anagram";


beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => { });
});
test("Anagram() -> Test case 1", () => {
    const result = Anagram('', '');
    expect(result).toEqual(true);
});

test("Anagram() -> Test case 1", () => {
    const result = Anagram('aaz', 'zza');
    expect(result).toEqual(false);
});

test("Anagram() -> Test case 3", () => {
    const result = Anagram('anagram', 'nagaram');
    expect(result).toEqual(true);
});

test("Anagram() -> Test case 4", () => {
    const result = Anagram('rat', 'car');
    expect(result).toEqual(false);
});

test("Anagram() -> Test case 5", () => {
    const result = Anagram('awesome', 'awesom');
    expect(result).toEqual(false);
});

test("Anagram() -> Test case 6", () => {
    const result = Anagram('amanaplanacanalpanama', 'acanalmanplanpamana');
    expect(result).toEqual(false);
});

test("Anagram() -> Test case 7", () => {
    const result = Anagram('qwerty', 'qeywrt');
    expect(result).toEqual(true);
});

test("Anagram() -> Test case 8", () => {
    const result = Anagram('texttwisttime', 'timetwisttext');
    expect(result).toEqual(true);
});