import { create } from "zustand";

export const useDataStore = create(() => ({
  experiments: [
    {
      name: "qubit",
      title: "Superposição e Medição com Cartões",
      sub: '“Enquanto ninguém olha, tudo pode ser.”',
      text1: "O cartão está virado para baixo. Pode ser zero. Pode ser um. Pode ser os dois, e nenhum também, porque o mundo quântico não tem pressa de decidir. Ele espera que a gente pergunte. Só então responde. Foi aí que inventaram o tal do qubit. Uma coisinha teimosa que se recusa a ser um ou zero até que alguém o olhe nos olhos. Antes disso, vive numa espécie de poesia binária, flutuando entre estados como quem sonha possibilidades.",
      text2: "E é nesse sonho que nasce a superposição. Não como metáfora, mas como verdade: algo pode estar aqui e ali, ao mesmo tempo. Um sim travestido de talvez. Com cartões simples — de papel mesmo — é possível encenar esse mistério. Alunos seguram os cartões de lado, escondendo o valor. Só revelam quando o professor manda. E o que era tudo, vira uma coisa só. O mais incrível? Isso não é truque. E como o mundo funciona, quando ninguém está olhando.",
      image1:"/qubit1.webp",
      image2:"/qubit2.webp",
      objective:"Objetivo: Introduzir o conceito de qubit e superposição na computação quântica, utilizando cartões de forma lúdica para representar estados quânticos e a ação da medição.",
      materials: ['Cartões ou folhas com os números “0” de um lado e “1” do outro', 'Fita ou suporte para os alunos segurarem os cartões “de lado” ', "Cartazes com os símbolos |0> e |1> (opcional)"],
      montage: ['Entregue a cada aluno um cartão representando um qubit.', 'Oriente-os a segurarem o cartão “de lado”, sem mostrar o número representando o estado de superposição.', 'Peça que revelem o valor ao comando do professor representando a medição.'],
      procedure: ['Explique que, enquanto o cartão não é observado, ele está em superposição.', 'Ao virar o cartão, o estado colapsa para “0” ou “1”.', 'Repita o experimento com vários alunos, mostrando que o resultado é imprevisível até a medição.']
    },
    {
      name:'cartas',
      title: 'Emaranhamento com Cartas Iguais',
      sub: '“O que acontece aqui, afeta ali.”',
      text1: 'Duas cartas, dois alunos, dois lugares distintos. Cada um com um envelope fechado. Podem estar em salas diferentes, em cidades diferentes, quem sabe até em planetas diferentes. E ainda assim, quando um abre sua carta e vê um “0”, o outro — sem precisar abrir — já sabe que tem um “1”.A ciência chamou isso de emaranhamento. Einstein, com seu ceticismo poético, resmungou que era “ação fantasmagórica à distância”. Mas o fato é que o universo, de tempos em tempos, escreve bilhetes gêmeos e os entrega a duas mãos diferentes. Não importa quão longe estejam uma da outra: o conteúdo é entrelaçado, feito promessa de infância.',
      text2:'Nesse experimento, o mistério se apresenta com a simplicidade de um jogo: pares de cartas são distribuídos, cada envelope com uma resposta complementar. Nada parece extraordinário até que percebemos que não há como saber o conteúdo antes de abrir,e ainda assim ele sempre combina.O emaranhamento é isso: um laço invisível entre o que parecia separado. Um lembrete de que, mesmo no silêncio do vácuo, tudo ainda conversa.',
      image1: "/",
      image2: "/",
      objective: 'Apresentar o conceito de emaranhamento quântico por meio de uma simulação com pares de cartas, ilustrando a correlação instantânea entre qubits mesmo quando separados espacialmente.',
      materials: ['Pares de cartas com 0 e 1 (idênticas em cada par)', 'Envelopes ou saquinhos opacos', 'Alunos em duplas', 'Quadro para anotações'],
      montage: ['Coloque uma carta “0” e uma “1” em cada envelope (um envelope por par).', 'Entregue um envelope lacrado para cada aluno da dupla, que deve estar afastada do outro aluno (representando separação espacial).', 'Os alunos não devem abrir o envelope até o comando do professor.'],
      procedure: ['Ao comando, cada aluno abre o envelope e revela sua carta.', 'Peça que comparem os resultados: sempre um tem “0” e o outro “1”.', 'Repita com outras duplas.', 'Mostre que, embora o estado individual fosse indefinido, o par está correlacionado representando o emaranhamento']
    },
    {
      name: 'portas',
      title: 'Portas Lógicas Quânticas com Alunos',
      sub: '“Era uma vez um qubit chamado João.”',
      text1: 'João vestia um cartaz no peito com a inscrição 0 . Caminhava no pátio da escola até que, de repente, passou por uma porta invisível e saiu de lá transformado em 1 .Ninguém entendeu muito bem, mas ele seguia sorrindo. Atrás dele vinha Maria, que entrou diferente: em vez de 0 ou 1, virou +, como quem guarda um segredo entre dois extremos. E quando João e Maria se deram as mãos, viraram uma dupla emaranhada, conectados por algo maior do que a matemática poderia dizer.',
      text2: 'As portas quânticas são assim. Têm nomes esquisitos — Hadamard, CNOT, X — mas agem como mágica. Trocam os estados, criam superposições, entrelaçam qubits. E o mais incrível? Tudo isso pode ser representado com alunos, fita adesiva e um pouco de imaginação. O que parece teatro é, na verdade, ciência. O que parece brincadeira é cálculo em movimento. Porque às vezes, para entender o invisível, é preciso caminhar com ele.',
      image1: "/",
      image2: "/",
      objective: 'Demonstrar, por meio de representação corporal e simbólica, o funcionamento das portas lógicas quânticas fundamentais (X, Hadamard e CNOT), facilitando a visualização de como qubits são manipulados em algoritmos quânticos.',
      materials: ['Cartazes com os estados (0), (1) e (+) (superposição)', 'Fitas adesivas ou suportes para prender os cartazes no peito dos alunos', 'Espaço para movimentação em grupos', 'Quadro para anotar os estados iniciais e finais'],
      montage: ['Escolha alguns alunos para representarem qubits', 'Entregue a cada um um cartaz com o estado atual.', 'Crie “estações” no ambiente com as etiquetas: PORTA X, PORTA H, PORTA CNOT.'],
      procedure: ['Aluno com (0) passa pela PORTA X vira => (1).', 'Aluno com (1) passa pela PORTA X vira => (0).', 'Aluno com qualquer estado passa pela PORTA H vira => (+) (superposição).', 'Dois alunos, um como qubit de controle e outro como qubit alvo, passam pela PORTA CNOT. Se o controle estiver em (1), o alvo inverte seu estado. Se o controle estiver em (0), o alvo não muda.']

    },
    {
      name: 'caminhos',
      title: 'Interferência com Caminhos de Papel',
      sub: '“O qubit ficou em dúvida e decidiu seguir pelos dois caminhos.”',
      text1: 'Era só uma moeda numa tira de papel. Mas bastou uma bifurcação para que a moeda hesitasse. Ir pela esquerda ou pela direita? No mundo clássico, escolhemos um e deixamos o outro. No mundo quântico, o qubit, vaidoso, se multiplica e percorre os dois — como quem não quer perder nada. Essa duplicação de intenções cria uma dança curiosa: quando os caminhos se reencontram, não somam suas probabilidades — interferem entre si. Às vezes se reforçam, outras vezes se anulam. O que era possível se torna provável, o que era provável pode desaparecer.',
      text2: 'É esse fenômeno — a interferência — que permite à computação quântica encontrar agulhas em palheiros de possibilidades. E tudo pode ser ensaiado com tiras de papel, moedas e sinais de mais e menos. Porque, no fim das contas, o que define a resposta certa pode ser um passo a mais... ou um passo a menos. No papel, os caminhos são finos. Na mente, são infinitos.',
      image1: "/",
      image2: "/",
      objective: 'Demonstrar o fenômeno de interferência quântica por meio de uma atividade concreta,usando caminhos alternativos em papel para ilustrar como amplitudes de probabilidade podem se anular ou reforçar — um conceito fundamental em algoritmos quânticos.',
      materials: ['Tiras de papel (caminhos paralelos)', 'Moedas ou tampinhas representando qubits', 'Etiquetas com ”+”e -”(para representar sinais de amplitude)', 'Espaço para montar caminhos e sobreposições'],
      montage: ['Monte dois ou mais caminhos paralelos de papel com bifurcações.', 'Em cada bifurcação, permita que a moeda siga por múltiplos caminhos (simbolicamente).', 'Associe um sinal ”+” ou "-” em cada ramo, representando a fase quântica.'],
      procedure: ['Lance uma moeda por vez em cada caminho (de forma simbólica, como se o qubit estivesse nos dois).', 'Após os ramos, analise as combinações de caminhos. Caminhos com sinais iguais se reforçam (interferência construtiva). Caminhos com sinais opostos se cancelam (interferência destrutiva)', 'Mostre que, ao final, apenas alguns resultados permanecem com alta probabilidade.']
    },
    {
      name: 'busca',
      title: 'Busca com Oráculo (Grover Simplificado)',
      sub: '“A resposta estava lá o tempo todo, quieta, esperando ser escolhida.”',
      text1: 'Era como procurar uma carta embaralhada entre outras. Um número escondido no fundo de um saco. O aluno sabia que uma das opções era a certa — mas qual? Em um mundo clássico, testamos uma por uma. No mundo quântico... pedimos ajuda ao oráculo. E o oráculo não revela. Ele apenas inverte, embaralha, distorce as probabilidades. Depois, a interferência faz sua mágica, realça a resposta certa, apaga as erradas. E, como num passe de cálculo, a solução brilha sozinha no meio das outras.',
      text2: 'Grover descobriu isso sem precisar ver nenhuma luz colorida, nem abrir um átomo. Apenas olhando para dentro da matemática da mecânica quântica. Mas aqui, na sala de aula, basta um punhado de cartões numerados e a encenação de uma busca encantada para sentir a diferença entre tentar tudo e tentar certo. Porque o mundo não é feito só de respostas. É feito da maneira como a gente as procura.',
      image1: "/",
      image2: "/",
      objective: 'Simular de forma didática o algoritmo de Grover para mostrar como a computação quântica pode acelerar a busca por uma resposta correta entre muitas possibilidades usando superposição e interferência.',
      materials: ['Cartões com números (ex: de 1 a 8)', 'Caixa ou saco opaco', 'Cartões com ”+”e -”para representar fases', 'Etiqueta para marcar o ”alvo”(resposta correta)', 'Alunos representando os estados'],
      montage: ['Escreva os números em cartões e coloque-os numa caixa.', 'Escolha secretamente um dos cartões como a “resposta correta” (oráculo).', 'Entregue um cartão a cada aluno representando um estado possível da busca.'],
      procedure: ['Todos os alunos começam com a mesma chance (estado de superposição).', 'O “oráculo” marca o aluno com a resposta correta com uma inversão de fase (cartão).', 'Após isso, todos os alunos passam por uma “interferência”. Os que estavam em ”+”mantêm a fase. O que estava em -”tem a fase reforçada (simulando interferência construtiva). ', 'Ao final, a resposta correta aparece com maior destaque.']
    },
    {
      name: 'radiacao',
      title: 'Radiação de Corpo Negro',
      sub: '“O mistério estava dentro da lata.”',
      text1:  'Não era uma lata qualquer, dessas de goiabada ou tinta velha que se guarda por mania de guardar. Era uma lata pintada de preto por dentro, escura como o fundo do universo. Ao lado dela, outra — brilhando por dentro, feita para refletir o que entrasse. O curioso é que as duas recebiam o mesmo calor. A mesma fonte, a mesma energia. Mas, quando a luz se apagava e só restava o breu do laboratório improvisado na sala de aula, algo mágico acontecia: a lata preta brilhava como se guardasse um segredo antigo, enquanto a outra parecia tímida, escondida atrás do seu espelho interior.',
      text2: 'Foi assim, por acaso — como quase tudo de grande na ciência — que Max Planck tropeçou numa contradição. A física clássica dizia uma coisa, mas o mundo real parecia contar outra história. Para salvar a teoria, ele precisou inventar uma ideia absurda: e se a energia não fosse contínua, mas viesse em pequenos pacotes? Como se o universo usasse moedas e não notas para pagar suas contas. Nascia ali a física quântica. E o resto... bom, o resto é luz.',
      image1: "/",
      image2: "/",
      objective: 'Demonstrar o conceito de radiação de corpo negro e a importância da quantização da energia proposta por Max Planck. Estimular nos estudantes a observação da relação entre temperatura e emissão de radiação.',
      materials: ['Duas latas metálicas com tampa (iguais)', 'Tinta preta fosca resistente ao calor', 'Lâmpadas incandescentes de baixa potência (ou resistores de aquecimento)', 'Fonte de energia', 'Termômetro infravermelho ou sensor de temperatura (termopar)', 'Câmera térmica (opcional)', 'Sensor de luz (opcional)', 'Ambiente escurecido'],
      montage: ['Pinte o interior de uma das latas com tinta preta fosca e deixe a outra com o interior metálico refletivo.', 'Instale em cada lata uma lâmpada incandescente ou resistor de aquecimento conectado à fonte de energia.', 'Feche as tampas, deixando pequenas aberturas frontais para observação.', 'Aguarde até que ambas atinjam temperaturas similares (verifique com o sensor de temperatura).'],
      procedure: ['Apague as luzes do ambiente.', 'Observe visualmente a luz emitida pelas aberturas das latas.', 'Utilize a câmera térmica (se disponível) ou o sensor de luz para medir a radiação emitida por cada lata.', 'Registre a diferença de emissão entre o corpo pintado de preto (corpo negro) e o metálico (superfície refletiva).']
    },
    {
      name:'dualidade',
      title: 'Dualidade Onda-Partícula',
      sub: '“A luz estava confusa.”',
      text1: 'Às vezes se comportava como uma onda — espalhava-se, dobrava as esquinas, desenhava franjas de sombra e brilho como se fosse seda flutuando no ar. Outras vezes, parecia feita de pequenos grãos, pontinhos de energia saltando como pulgas elétricas, tocando a matéria e sumindo como se nunca tivessem estado ali. Foi esse comportamento inquieto que deixou os cientistas desconfiados. Um dia, Thomas Young armou um teatro de sombras com duas fendas em uma placa opaca e um feixe de luz por trás. Esperava duas manchas, como seria de se esperar de boas e obedientes partículas. Mas a luz, vaidosa, fez um espetáculo: desenhou franjas de interferência, como se tivesse vindo de todos os lugares ao mesmo tempo.',
      text2: 'E então veio a pergunta que ainda nos ronda: o que é, afinal, a luz? Uma onda? Uma partícula? Um truque de mágica? A resposta — ou ao menos o encantamento — pode começar com um pedaço de papel alumínio, um furo feito com alfinete e uma lanterna comum. Simples assim. Porque, como tudo na física quântica, é no ordinário que o extraordinário se revela.',
      image1: "/",
      image2: "/",  
      objective: 'Demonstrar, de forma acessível, o conceito de dualidade onda-partícula da luz por meio de uma experiência prática com lanterna, orifícios e filtros, ajudando os alunos a compreenderem que a luz pode se comportar como partícula e como onda, dependendo da situação.',
      materials: ['Lanterna de LED ou laser pointer de baixa potência', 'Papel alumínio', 'Agulha ou alfinete', 'Celofane colorido (filtros vermelho, azul, verde)', 'Papel branco ou parede clara', 'Fita adesiva', 'Ambiente escuro'],
      montage: ['Faça um pequeno furo com uma agulha no centro de um pedaço de papel alumínio.', 'Fixe esse papel na frente da lanterna, usando fita adesiva.', 'Prepare os filtros coloridos de celofane para encaixar entre a lanterna e o furo (um de cada vez).', 'Posicione uma parede ou papel branco a cerca de 1 metro de distância para projeção da luz.'],
      procedure: ['Em um ambiente escuro, acenda a lanterna com o papel alumínio perfurado e observe o padrão de luz projetado.', 'Troque os filtros de celofane e observe como a luz muda (cor, intensidade, foco).', 'Discuta como a luz parece se comportar como uma onda ao passar por orifícios (difração e espalhamento).']
    },
    {
      name:'fotoeletrico',
    },
    {
      name: 'saltos'
    },
    {
      name:'interferencia'
    },
    {
      name:'incerteza'
    },
    {
      name: 'radioativo',
      
    }
  ]
}));
