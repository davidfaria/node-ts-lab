import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { hotPotato } from "./hot-potato.js";

async function main() {
  let names: string[] = [];
  const r1 = readline.createInterface({ input, output });

  while (true) {
    console.log(`\n===== MENU =====`);
    console.log(`1. Adicionar participantes`);
    console.log(`2. Jogar Batata Quente`);
    console.log(`3. Sair`);
    const option = await r1.question("Escolha uma opção: ");

    switch (option) {
      case "1":
        const input = await r1.question(
          "Digite o nome(s) do participante(s): ",
        );

        const _names = input
          .split(",")
          .map((name) => name.trim())
          .filter((name) => name.length > 0);

        names.push(..._names);
        break;
      case "2":
        if (names.length < 2) {
          console.log("Você precisa ter pelo menos 2 participantes");
          break;
        }
        const position = Math.floor(Math.random() * 10);
        console.log(`Participantes: [ ${names.join(", ")} ]`);
        console.log(`Posição: ${position}`);
        const output = hotPotato(names, position);
        console.log(`Eliminados: [${output.eliminated.join(", ")}]`);
        console.log(`Ganhador: ${output.winner}`);
        names = [];
        break;
      case "3":
        console.log("Saindo...");
        process.exit(0);
        return;

      default:
        console.log("Opção inválida");
    }
  }

  r1.close();
}

main();
