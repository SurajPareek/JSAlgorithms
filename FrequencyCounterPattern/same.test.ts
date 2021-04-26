import { Same } from "./same";


beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => { });
});
test("same() -> Test case 1", () => {
    const result = Same([1, 4, 8], [1, 16, 64]);
    expect(result).toEqual(true);
});

test("same() -> Test case 1", () => {
    const result = Same([1, 4, 2], [4, 16, 1]);
    expect(result).toEqual(true);
});

test("same() -> Test case 3", () => {
    const result = Same([0, 0, 0], [0, 0, 0]);
    expect(result).toEqual(true);
});

test("same() -> Test case 4", () => {
    const result = Same([0, 0, 0], [1, 0, 0]);
    expect(result).toEqual(false);
});

test("same() -> Test case 5", () => {
    const result = Same([2, 2, 0], [1, 4, 0]);
    expect(result).toEqual(false);
});

test("same() -> Test case 6", () => {
    const result = Same([1, 2, 4], [1, 4]);
    expect(result).toEqual(false);
});