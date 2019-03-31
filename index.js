export const pepita = {
  nombre: "pepita",
  energia: 30,
  vola: function (km) {
    this.energia -= km * 2
  },
  come: function (gramos) {
    this.energia += gramos * 3
  }
}


export const GolondrinasInmutables = {
  create(nombre, edad = 1, energia = 30) {
    return {
      nombre,
      edad,
      energia
    }
  },

  vola(golondrina, km) {
    return {...golondrina, energia: golondrina.energia - km * 2}
  },

  come(golondrina, gramos) {
    return {...golondrina, energia: golondrina.energia + gramos * 2}
  }

}