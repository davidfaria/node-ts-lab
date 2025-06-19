import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["esm"],
  dts: false,
  clean: true,
  exclude: ["tests/*"], // opcional
});
