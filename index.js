export const pepita = {
  energia: 30,
  vola: function(km) {
    this.energia -= km * 2
  },
  come: function(gramos) {
    this.energia += gramos * 3
  }
}