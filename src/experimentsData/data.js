import { create } from "zustand";
import qubit from "@/components/experiments/qubit";

export const useDataStore = create(() => ({
  experiments: [
    {
      experimento: qubit,
      name: "qubit",
      title: "Superposição e Medição com Cartões",
      text: "O cartão está virado para baixo. Pode ser zero. Pode ser um. Pode ser os dois, e nenhum também, porque o mundo quântico não tem pressa de decidir. Ele espera que a gente pergunte. Só então responde. Foi aí que inventaram o tal do qubit. Uma coisinha teimosa que se recusa a ser um ou zero até que alguém o olhe nos olhos. Antes disso, vive numa espécie de poesia binária, flutuando entre estados como quem sonha possibilidades."
    }
  ]
}));
