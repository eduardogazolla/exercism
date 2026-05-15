//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let suffix = 'th';

  if (number % 100 === 11 || number % 100 === 12 || number % 100 === 13) suffix = 'th';
  else if (number % 10 === 1) suffix = 'st';
  else if (number % 10 === 2) suffix = 'nd';
  else if (number % 10 === 3) suffix = 'rd';

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`
  // let suffix cria uma variável para o sufixo padrão ser th quando nenhuma das condições bater;

  // if (number % 100 === 11 || ... verifica os casos especiais
  // onde se o número tiver os dois últimos números sendo 11, 12 ou 13 o sufixo dever ser th
  // numero % 100 = pega o resto da divisão 162/100 pegando o resto, da 62, pega os dois últimos números;

  // os else if ... pegam o último número com number % 10 e se for 1 coloca st, 2 coloca nd e 3 coloca rd;

  //exemplos: 101 = 101st, 162 = 162nd, 62 = 62nd, 14 = 14th, 112 = 112th
};
