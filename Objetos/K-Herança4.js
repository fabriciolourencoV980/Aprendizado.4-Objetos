function MeuObjeto(){}
console.log(MeuObjeto.prototype);

const Obj1 = new MeuObjeto;
const Obj2 = new MeuObjeto;
console.log(Obj1.__proto__ === Obj2.__proto__);
console.log(MeuObjeto.prototype === Obj1.__proto__);

MeuObjeto.prototype.nome = 'Anônimo'; 
MeuObjeto.prototype.falar = function (){
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}; 

Obj1.falar();

Obj2.nome = 'Rafael';
Obj2.falar();

const Obj3 = {};
Obj3.__proto__ = MeuObjeto.prototype;
Obj3.nome = 'obj3';
Obj3.falar();

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype); 
console.log(Object.prototype.__proto__); 