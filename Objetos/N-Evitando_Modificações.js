// Objeto.preventExtensions
const produt = Object.preventExtensions({
     nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
});
console.log('Extensível:', Object.isExtensible(produt));

produt.nome = 'Borracha';
produt.descricao = 'Borracha escolar Branca'; 
delete produt.tag;
console.log(produt);
 
//Object.seal
const pessoa = { nome: 'Ana', Idade: 35};
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.Idade = 29; 
console.log(pessoa); 

//Object.freeze = selado + valores constantes
