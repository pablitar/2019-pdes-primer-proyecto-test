import { pepita, GolondrinasInmutables as GI, Golondrina} from './index';

describe("pepita basica", () => {
  it("deberia volar y perder energia", () => {
    pepita.vola(2)
    expect(pepita.energia).toEqual(26)
  })
})

describe("pepita de clase Golondrina", () => {
  it("deberia volar y perder energia", () => {
    const pepita = new Golondrina();
    pepita.vola(2)
    expect(pepita.energia).toEqual(26)
  })
})

describe("pepita immutable", () => {
  it("deberia volar y perder energia", () => {
    const pepita = GI.vola(GI.create("pepita"), 2)
    expect(pepita).toMatchObject({energia: 26, nombre: "pepita", "edad": 1})
  })
})
