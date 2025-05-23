{
  "idPlano": "plano_001",
  "nome": "Premium Anual",
  "descricao": "Plano anual com acesso ilimitado à academia e aulas coletivas.",
  "periodicidade": "MENSAL",
  "duracaoEmMeses": 12,
  "valor": {
    "original": "99.90",
    "valorMinimo": "99.90",
    "valorMaximo": "99.90"
  },
  "tipoCobranca": "AUTOMATICA",  // ou MANUAL
  "politicaRetentativa": {
    "numeroTentativas": 3,
    "intervaloEmDias": 2
  },
  "politicaCancelamento": {
    "cancelamentoPeloCliente": true,
    "prazoMaximoAntesDoVencimento": "1d"
  },
  "termos": {
    "taxaAdesao": "0.00",
    "possuiPeriodoTeste": true,
    "diasTeste": 7,
    "renovacaoAutomatica": true
  },
  "exibeParaEC": true
}
