import { renderHook, act } from "@testing-library/react";
import useArray from "./useArray";

describe("useArray", () => {
  it("returns the array elements as expected", () => {
    const { result } = renderHook(() => useArray([1, 2, 3]));
    const { array } = result.current;
    expect(array).toEqual([1, 2, 3]);
  });

  it("provides a push function for adding to the array", () => {
    const { result } = renderHook(() => useArray([1, 2, 3]));
    const { array, push } = result.current;
    act(() => {
      push(4);
    });
    console.log("L17 array === ", array);
    expect(array).toEqual([1, 2, 3, 4]);
  });
});
