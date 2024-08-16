import { sumar, multiplicar } from "./sumador.js";

describe("Operaciones matemáticas", () => {
  it("debería sumar dos números", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("debería multiplicar dos números", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});
