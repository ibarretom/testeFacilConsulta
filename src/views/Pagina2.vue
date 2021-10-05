<template>
  <section class="pagina">
    <div class="grow-mobile">
      <div class="card-size mobile-arrow-top">
        <b-button
          pill
          class="back-button"
          variant="link"
          @click="$router.push('/')"
        >
          <b-icon-chevron-left></b-icon-chevron-left>
        </b-button>
      </div>

      <base-card titulo="Sobre o atendimento" imagem="desktop-pagina-2.png">
        <p><strong>Detalhes do atendimento</strong></p>

        <b-form>
          <b-form-group
            label-for="group-especialidade-principal"
            id="group-especialidade-principal"
            label="Especialidade Principal*"
            class="mt-2"
          >
            <b-form-select
              id="input-especialidade-principal"
              v-model="$store.state.cadastro.especialidadePrincipal"
              :options="options.especialidade"
              required
            ></b-form-select>
            <b-form-invalid-feedback :state="validateEspecialidadePrincipal">
              Este campo precisa ser preenchido
            </b-form-invalid-feedback>
          </b-form-group>

          <b-input-group
            label="Informe o preço da consulta*"
            label-for="group-preco-consulta"
            id="group-preco-consulta"
            class="mt-2 width-70"
            prepend="R$"
          >
            <b-form-input
              placeholder="valor"
              v-model="$store.state.cadastro.preco"
              v-money="'money'"
              id="input-valor"
              type="text"
              required
            ></b-form-input>
            <b-form-invalid-feedback :state="validatePreco">
              Preencha este campo com um valor entre R$30,00 e R$350,00
            </b-form-invalid-feedback>
          </b-input-group>

          <section class="radio-group mt-3 mb-3">
            <div class="checkbtn">
              <input
                v-model="$store.state.cadastro.metodosDePagamento.pix"
                name="pagamento"
                type="checkbox"
                value="true"
                id="Pix"
              />
              <label for="Pix">Pix</label>
            </div>

            <div class="checkbtn">
              <input
                v-model="$store.state.cadastro.metodosDePagamento.dinheiro"
                value="true"
                name="pagamento"
                id="Em-dinheiro"
                type="checkbox"
              />
              <label for="Em-dinheiro">Em dinheiro</label>
            </div>

            <div class="checkbtn">
              <input
                v-model="$store.state.cadastro.metodosDePagamento.cartao"
                name="pagamento"
                value="true"
                type="checkbox"
                id="cartao"
              />
              <label for="cartao">
                <p class="pa-0 mb-0">Cartão</p>
                <div
                  v-if="$store.state.cadastro.metodosDePagamento.cartao"
                  class="parcelas"
                >
                  <b-form-group label="Parcelamento em">
                    <b-form-radio-group
                      name="radios-stacked"
                      v-model="
                        $store.state.cadastro.metodosDePagamento.parcelas
                      "
                      :options="options.parcelamento"
                      stacked
                    ></b-form-radio-group>
                    <b-form-invalid-feedback :state="validateParcelas">
                      Este campo precisa ser preenchido.
                    </b-form-invalid-feedback>
                  </b-form-group>
                </div>
              </label>
            </div>
            <b-form-invalid-feedback :state="validateFormaDePagamento">
              Este campo precisa ser preenchido
            </b-form-invalid-feedback>
          </section>
        </b-form>

        <div class="d-flex my-2">
          <b-progress
            class="flex-fill mr-3"
            height="24px"
            :value="2"
            :max="2"
          ></b-progress>
          <strong class="step-progress"> 2 de 2 </strong>
        </div>

        <AppBotaoProximo @click="proximaPagina" />
      </base-card>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import AppBotaoProximo from "@/components/shared/AppBotaoProximo";
import BaseCard from "@/components/shared/BaseCard";

export default {
  name: "Pagina2",
  components: {
    AppBotaoProximo,
    BaseCard,
  },
  computed: {
    validateEspecialidadePrincipal() {
      const especialidade = this.$store.state.cadastro.especialidadePrincipal;
      return this.noValidate || especialidade.length > 0;
    },
    validatePreco() {
      const preco = this.$store.state.cadastro.preco;
      return (
        this.noValidate ||
        (parseFloat(preco.split(".").join().replace(",", ".")) >= 30 &&
          parseFloat(preco.split(".").join().replace(",", ".")) <= 350)
      );
    },
    validateFormaDePagamento() {
      const pix = this.$store.state.cadastro.metodosDePagamento.pix;
      const dinheiro = this.$store.state.cadastro.metodosDePagamento.dinheiro;
      return this.noValidate || this.cartao || dinheiro || pix;
    },
    validateParcelas() {
      const numeroDeParcelas =
        !!this.$store.state.cadastro.metodosDePagamento.parcelas;

      if (this.cartao) {
        if (numeroDeParcelas) return true;
        return false;
      }
      return true;
    },
    cartao() {
      return this.$store.state.cadastro.metodosDePagamento.cartao;
    },
  },
  data: () => ({
    noValidate: true,
    options: {
      especialidade: [
        { value: "", text: "Selecione a especialidade" },
        { value: "Cardiologia", text: "Cardiologia" },
        { value: "Dermatologia", text: "Dermatologia" },
        { value: "Neurologia", text: "Neurologia" },
        { value: "Oftalmologia", text: "Oftalmologia" },
        { value: "Psiquiatria", text: "Psiquiatria" },
        { value: "Urologia", text: "Urologia" },
      ],
      parcelamento: [
        { text: "1x, sem juros", value: "1x, sem juros" },
        { text: "2x, sem juros", value: "2x, sem juros" },
        { text: "3x, sem juros", value: "3x, sem juros" },
      ],
    },
  }),
  watch: {
    cartao(forVerdadeiro) {
      if (!forVerdadeiro)
        this.$store.state.cadastro.metodosDePagamento.parcelas = "";
    },
  },
  methods: {
    validarCampos() {
      return (
        this.validateEspecialidadePrincipal &&
        this.validatePreco &&
        this.validateFormaDePagamento &&
        this.validateParcelas
      );
    },
    proximaPagina() {
      this.noValidate = false;
      const camposValidos = this.validarCampos();
      if (camposValidos) this.$router.push("/pagina3");
    },
  },
};
</script>
<style scoped>
.parcelas {
  display: flex;
  justify-content: center;
}

::v-deep input[type="radio"]:checked + label:before {
  background-color: var(--primary);
  border-color: var(--primary);
}
</style>
<style lang="scss" scoped>
.checkbtn {
  position: relative;
  display: block;
  label {
    display: block;
    background: var(--secundary_1);
    color: #444;
    border-radius: 5px;
    text-indent: 20px;
    padding: 10px 20px;
    border: 2px solid var(--secundary_1);
    margin-bottom: 5px;
    cursor: pointer;
    &:after,
    &:before {
      content: "";
      position: absolute;
      left: 11px;
      top: 11px;
      width: 20px;
      height: 20px;
      border-radius: 3px;
      background: var(--secundary_0);
    }
    &:before {
      background: var(--transparent);
      transition: 0.1s width cubic-bezier(0.075, 0.82, 0.165, 1) 0s,
        0.3s height cubic-bezier(0.075, 0.82, 0.165, 2) 0.1s;
      z-index: 2;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: 13px;
      background-position: center;
      width: 0;
      height: 0;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS4zIDEzLjIiPiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjcuOGwtLjQtLjRhMS43IDEuNyAwIDAgMC0yLjMuMUw1LjIgOC4yIDMgNi40YTEuNyAxLjcgMCAwIDAtMi4zLjFMLjQgN2ExLjcgMS43IDAgMCAwIC4xIDIuM2wzLjggMy41YTEuNyAxLjcgMCAwIDAgMi40LS4xTDE1IDMuMWExLjcgMS43IDAgMCAwLS4yLTIuM3oiIGRhdGEtbmFtZT0iUGZhZCA0Ii8+PC9zdmc+);
    }
  }
  input[type="checkbox"] {
    display: none;
    position: absolute;
    width: 100%;
    appearance: none;
    &:checked + label {
      background: var(--secundary_1);
      border-color: var(--secundary_1);
      &:after {
        background: var(--primary);
      }
      &:before {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
<style src="@/assets/css/pagina.css"></style>
