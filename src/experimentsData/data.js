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
    }
  ]
}));
