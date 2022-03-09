const pessoa = {

}

// Propriedades do objeto pessoa
// Preenchendo um objeto de forma dinâmica

pessoa.reino = "animalia";
pessoa.filo = "chordata";
pessoa.subfilo = "vertebrata";
pessoa.classe = "mammalia";
pessoa.ordem = "primata";
pessoa.subordem = "antropoidea";
pessoa.gênero = "homo";
pessoa.espécie = "homo sapiens";
pessoa.subespécie = "homo sapiens sapiens";

// Dot notation and bracket notation
console.log(pessoa.reino, pessoa['subespécie']);
console.log(pessoa);

// Métodos do objeto pessoa

pessoa.comer = () => "Nhami nhumi!";
pessoa.dormir = () => "Zzz";
pessoa.rir = () => "Haha";
pessoa.dialogar = () => "Blablabla";
pessoa.correr = () => "Run, Suellen, run";

// Dot notation and bracket notation

console.log(pessoa.comer(), pessoa['dormir']());
