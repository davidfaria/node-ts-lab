import { helloWorld } from "@/utils/hello-world.js";

test("should be print hello world", () => {
  expect(helloWorld("David")).toBe("Hello world, David");
});
