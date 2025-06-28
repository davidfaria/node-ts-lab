import {
  baseConvert,
  type BaseConvertType,
} from "@/algorithms/stack/base-convert.js";

describe("Base Converter", () => {
  test("should be throw an error for unsupported base", () => {
    expect(() =>
      baseConvert({
        decimalNumber: 100345,
        baseType: "unsupported" as BaseConvertType,
      })
    ).toThrowError("Base unsupported is not supported.");
  });
  test("should convert decimal to binary", () => {
    const binaryResult = baseConvert({
      decimalNumber: 100345,
      baseType: "binary",
    });
    expect(binaryResult).toBe("11000011111111001");
  });
  test("should convert decimal to octal", () => {
    const binaryResult = baseConvert({
      decimalNumber: 100345,
      baseType: "octal",
    });
    expect(binaryResult).toBe("303771");
  });

  test("should convert decimal to hexadecimal", () => {
    const binaryResult = baseConvert({
      decimalNumber: 100345,
      baseType: "hexadecimal",
    });
    expect(binaryResult).toBe("187F9");
  });
});
