import { hotPotato } from "@/algorithms/queue/hot-potato.js";

describe("Hot Potato", () => {
  test("", () => {
    const names = ["Maria", "Jose", "Rute", "Pedro", "Joao"];
    const output = hotPotato(names, 7);
    expect(output.eliminated).toEqual(["Rute", "Jose", "Joao", "Pedro"]);
    expect(output.winner).toBe("Maria");
  });
});
