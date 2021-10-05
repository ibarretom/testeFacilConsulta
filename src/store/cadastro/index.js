export default {
  namespaced: true,
  state: {
    cadastro: {
      nomeCompleto: "",
      cpf: "",
      numeroCelular: "",
      regiao: {
        estado: "",
        cidade: "",
      },
      especialidadePrincipal: "",
      preco: "",
      metodosDePagamento: {
        dinheiro: false,
        pix: false,
        cartao: false,
        parcelas: "",
      },
    },
  },
  mutations: {
    reset(state) {
      state.cadastro = new Object({
        nomeCompleto: "",
        cpf: "",
        numeroCelular: "",
        regiao: {
          estado: "",
          cidade: "",
        },
        especialidadePrincipal: "",
        preco: "",
        metodosDePagamento: {
          dinheiro: false,
          pix: false,
          cartao: false,
          parcelas: "",
        },
      });
    },
  },
};
