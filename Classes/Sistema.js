class Sistema {
  constructor() {
    this.pos = createVector(widht / 2, height / 2);
    this.particulas = [];
    this.t = random(100);
  }
  update() {
    // 0. Aumentar el tiempo
    this.t += 0.1;

    // 1. Actualización de posición
    this.pos.x = map(noise(this.t), 0, 1, 0, widht);
    this.pos.y = map(noise(this.t + 10), 0, 1, 0, height);

    // 2. Agregamos posición
    this.p = new Particula(this.pos.x, this.pos.y);
    this.ps.push(this.p);

    // 3. Verificar cuáles están muertas y llamar a los macrófagos
    for (let i = 0; i < this.ps.length; i++) {
      if (!this.ps[i].isAlive) {
        this.ps.slpice(i, 1);
      }
    }
  }
}
display(){
    for (let i = 0; i < this.ps.length; i++) {
        this.ps[i].update
        this.ps[i].display}}