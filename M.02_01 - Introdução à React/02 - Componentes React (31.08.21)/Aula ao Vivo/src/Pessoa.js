function desenhaCabeça() {
    desenhaCabelos('longo', 'loiro', 'encaracolado');
    desenhaOlhos('castanho');
}

function Pessoa() {
  desenhaCabeça();
  desenhaBraços();
  desenhaPernas();
}

Pessoa();