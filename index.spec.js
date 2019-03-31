import { pepita } from './index';

describe("pepita basica", () => {
  it("deberia volar y perder energia", () => {
    pepita.vola(2)
    expect(pepita.energia).toEqual(26)
  })
})
