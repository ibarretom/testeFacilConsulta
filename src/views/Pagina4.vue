<template>
  <section class="pagina-4">
    <b-card class="rounded-card flex-fill card-size" tag="section">
      <b-card-text>
        <b-container class="no-padding">
          <b-row>
            <b-col
              class="
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <b-img
                :src="require(`@/assets/imagens/pagina-4.gif`)"
                alt="Check gif"
              >
              </b-img>
              <h4 class="pb-5">Profissional cadastrado com sucesso!</h4>
              <b-button variant="info" pill @click="$router.push('/')">
                Cadastrar novo profissional
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-card-text>
    </b-card>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from "vuex";
export default {
  name: "Pagina3",
  filters: {
    formaDePagamento(formas) {
      let metodos = "";
      if (formas.dinheiro) metodos += "Em dinheiro ";
      if (formas.pix) metodos += "Pix";
      if (formas.cartao) metodos += "Cartão de crédito -" + formas.parcelamento;
      return metodos;
    },
  },
  methods: {
    ...mapMutations({
      reset: "reset",
    }),
  },
  created() {
    this.reset();
  },
};
</script>
<style scoped>
img {
  max-width: 20rem;
}
.pagina-4 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
}
h4 {
  text-align: center;
  font-weight: 900;
  color: var(--primary);
}

@media (max-width: 960px) {
  .pagina-4 {
    align-items: flex-end;
  }
  img {
    max-width: 90%;
    margin: auto;
  }
}
</style>
<style src="@/assets/css/pagina.css"></style>
