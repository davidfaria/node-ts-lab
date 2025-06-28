import { StackObject } from "./stack-object.js";

export type BaseConvertType = "binary" | "octal" | "hexadecimal";
export function baseConvert({
  decimalNumber,
  baseType,
}: {
  decimalNumber: number;
  baseType: BaseConvertType;
}) {
  const digits: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const bases = {
    binary: { base: 2, stack: new StackObject<string>() },
    octal: { base: 8, stack: new StackObject<string>() },
    hexadecimal: { base: 16, stack: new StackObject<string>() },
  };

  if (!bases[baseType]) {
    throw new Error(`Base ${baseType} is not supported.`);
  }

  const { base, stack } = bases[baseType];
  let number = decimalNumber;
  let baseString = [];

  while (number > 0) {
    const rem = Math.floor(number % base);
    stack.push(String(rem));
    number = Math.floor(number / base);
  }

  while (!stack.isEmpty()) {
    const item = stack.pop()!;
    baseString.push(digits[Number(item)]);
  }
  return baseString.join("");
}
