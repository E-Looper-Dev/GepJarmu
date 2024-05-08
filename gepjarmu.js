class Gepjarmu{
    maxSebesseg = 200;
    constructor(Rendszam){
        this.Rendszam = Rendszam;
        this.Sebesseg = 0;
        this.maxSebesseg = 200;
    }
    Fekez(){
        this.Sebesseg -= 10;
        if(this.Sebesseg<0){
            this.Sebesseg = 0;
        }
    }
    Gyorsit(){
        this.Sebesseg +=10;
        if(this.Sebesseg > this.Sebesseg){
            this.Sebesseg = this.maxSebesseg;
        }
    }
}
let auto;
document.addEventListener('DOMContentLoaded',() => {
    const rendszam = document.getElementById('rendszam');
    const Sebesseg = document.getElementById('sebesseg');
    const letrehozButton = document.getElementById('letrehoz');
    const rendszamInput = document.getElementById('rendszamInput');
    const gyorsitButton = document.getElementById('Gyorsit');
    const fekezButton = document.getElementById('Lassit');
    
    letrehozButton.addEventListener('click', ()=>{
        auto = new Gepjarmu(rendszamInput.value);
        rendszam.innerHTML = auto.rendszam;
        Sebesseg.innerHTML = auto.Sebesseg;
    });
    gyorsitButton.addEventListener('click', () => {
        auto.Gyorsit();
        Sebesseg.innerHTML = auto.Sebesseg;
    });
    fekezButton.addEventListener('click', () => {
        auto.Fekez();
        Sebesseg.innerHTML = auto.Sebesseg;
    });
});