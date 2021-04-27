import { SumZero } from "./sumzero";


beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => { });
});
test("SumZero() -> Test case 1", () => {
    const result = SumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
    expect(result).toEqual([-3, 3]);
});

test("SumZero() -> Test case 1", () => {
    const result = SumZero([1, 4, 2, 4, 16, 1]);
    expect(result).toEqual(undefined);
});

test("SumZero() -> Test case 3", () => {
    const result = SumZero([0, 0, 0, 0, 0, 0]);
    expect(result).toEqual([0, 0]);
});

test("SumZero() -> Test case 4", () => {
    const result = SumZero([0, 0, 0, 1, 0, 0]);
    expect(result).toEqual([0, 0]);
});

test("SumZero() -> Test case 5", () => {
    const result = SumZero([-2, -1, 0, 1, 2]);
    expect(result).toEqual([-2, 2]);
});

test("SumZero() -> Test case 6", () => {
    const result = SumZero([-3, -2, -1, 0, 1, 2, 2]);
    expect(result).toEqual([-2, 2]);
});