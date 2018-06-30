import { Injectable } from '@angular/core';
import { Record } from './record.model';

@Injectable({
  providedIn: 'root'
})

/* tslint:disable:max-line-length */
export class TimelineService {
  records: Record[] = [
    new Record(1970, '15/01', 'Criação do IME', 1),
    new Record(1970, null, 'Instituto opera de forma provisória no prédio da reitoria', -1),
    new Record(1970, '26/05', 'Congregação decide "fazer de tudo" para ter a posse dos computadores do antigo CCE. Menciona criar uma comissão para planejar cursos de graduação e pós em Ciência da Computação'),
    new Record(1970, '26/11', 'Aprovada a criação do bacharelado em Estatística para 1971. Discute-se o anteprojeto do curso do BCC.'),
    new Record(1971, '01/09', 'Apontada a necessidade de reconhecimento do BCC junto aos órgãos estaduais, e definidas 30 vagas para o curso.'),
    new Record(1971, '22/12', 'Aprovado o início das aulas do BCC no ano seguinte'),
    new Record(1971, null, 'Governo do Estado corta verbas, prédio do IME corre risco de não sair', -1),
    new Record(1972, null, 'Começam as aulas no BCC', 1),
    new Record(1972, '14/05', 'Prof. Setzer propõe a mudança do nome do departamento para Matemática Aplicada e Ciência da Computação; proposta não é bem aceita pelos colegas.'),
    new Record(1972, '16/08', 'Congregação cobra a construção do bloco B do IME; aprovada a criação do Bacharelado em Matemática Aplicada.'),
    new Record(1972, '27/09', 'Primeiro registro da estrutura curricular do BCC. Matérias como SO e Estruturas de Dados já têm a mesma sigla de hoje.'),
    new Record(1973, '12/10', 'Prof. Setzer informa ao diretor que não há necessidade de reconhecer o curso junto aos órgãos reguladores pois não há profissão liberal relacionada a ele.'),
    new Record(1974, '10/12', 'Proposta a criação do avô do PIPA, o prêmio "J. O. Camargo", para alunos que se destacaram no BCC. Seria composto de um diploma, uma medalha e 10 salários mínimos, mas não há registro de ele ter sido concedido alguma vez.'),
    new Record(1975, null, 'Bloco A é inaugurado', 1),
    new Record(1975, null, 'Aulas continuam sendo dadas na reitoria até a conclusão do bloco B', -1),
    new Record(1976, '18/05', 'Congregação vota contra um projeto que obriga todos os alunos do IME a praticarem esportes', -1),
    new Record(1976, '08/06', 'Obras do bloco B paralisadas por falta de recursos; professores protestam contra o gasto de dinheiro na construção do velódromo', -1),
    new Record(1976, '08/11', 'Prof. Tomasz escreve ao Vice-Diretor preocupado com o fato de que o BCC já havia formado duas turmas de alunos, mas não podia expedir diplomas devido à falta de reconhecimento do curso junto ao CFE e falta de currículo mínimo no MEC.'),
    new Record(1981, '24/03', 'Curso continua sem poder expedir diplomas; já são mais de 170 alunos formados.'),
    new Record(1981, '09/04', 'Prof. Setzer decide dar início ao processo de reconhecimento do curso.'),
    new Record(1984, null, 'Fim do ciclo básico; BCC passa a ser acessível diretamente pela Fuvest.'),
    new Record(1984, '27/02', 'BCC é oficialmente reconhecido pelo MEC', 1),

    new Record(1987, '25/03', 'Abaixo-assinado reivindica a criação de um departamento de Ciência da Computação'),
    new Record(1987, '25/09', 'Criação do DCC', 1),
    new Record(1987, null, 'Prof. Carlinhos é excluído do novo departamento por erro de digitação, e posteriormente reintegrado', -1),
    new Record(1988, null, 'Ampliação do número de vagas do BCC para 50.'),
    new Record(1997, '01/03', 'Abertura da Rede Linux'),
    new Record(1999, '12/04', 'BCC é campeão latino-americano da Maratona de Programação pela primeira vez.'),
    new Record(2009, null, 'Criação da Consulta Discente', 1),
    new Record(2009, null, 'Primeira edição do Encontro do BCC.'),
    new Record(2009, null, 'Fundação do USPGameDev, o primeiro grupo de extensão.'),
    new Record(2013, '06/08', 'Inauguração do CCSL', 1),
    new Record(2013, null, 'Criação do Hardware Livre USP.'),
    new Record(2014, null, 'Criação do MaratonIME, apesar de já existir treinamento para a maratona desde vários anos antes.'),
    new Record(2015, '23/02', 'Reforma Curricular do BCC', 1),
    new Record(2015, null, 'Fundação do IME Workshop, futuramente renomeado para USPCodeLab.'),
    new Record(2016, '30/06', 'Ampliação do número de vagas do BCC para 60.'),
    new Record(2017, '06/03', 'Novas regras que proíbem estágios nos dois primeiros anos de curso entram em vigor.'),
    new Record(2017, null, 'Criação do IMEsec, o grupo de estudos de segurança.'),
    new Record(2017, '01/06', 'Abertura de vagas no SISU', 1),
    new Record(2017, '20/06', 'Criação do PIPA (Prêmio de Incentivo à Participação em Atividades).'),
    new Record(2017, null, 'Criação do Tecs, voltado à computação social.'),
    new Record(2017, '26/08', 'Fundação do REGEX, para aumentar a integração entre os grupos de extensão.')
  ];

  constructor() { }

  /* group records by year */
  getRecordsByYear(): {year: number, records: Record[]}[] {
    const years: {year: number, records: Record[]}[] = [];
    let curYear = {
      year: this.records[0].year,
      records: []
    };
    for (const record of this.records) {
      if (record.year === curYear.year) {
        curYear.records.push(record);
      } else {
        years.push(curYear);
        curYear = {
          year: record.year,
          records: [record]
        };
      }
    }
    years.push(curYear);
    return years;
  }
}
