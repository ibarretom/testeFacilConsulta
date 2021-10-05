<template>
  <div class="pagina">
    <base-card titulo="Sobre o profissional" imagem="desktop-pagina-1.png">
      <p><strong>Dados do profissional</strong></p>

      <b-form>
        <b-form-group
          label-for="group-nome-completo"
          id="group-nome-completo"
          label="Nome completo*"
          class="mt-2"
        >
          <b-form-input
            v-model="$store.state.cadastro.nomeCompleto"
            placeholder="Digite o nome completo"
            id="input-nome-completo"
            autocomplete="off"
            type="text"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="validateNomeCompleto">
            Campo inválido.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          class="mt-2 width-70"
          label-for="group-cpf"
          id="group-cpf"
          label="CPF*"
        >
          <b-form-input
            v-mask="'###.###.###-##'"
            v-model="$store.state.cadastro.cpf"
            placeholder="Digite um CPF"
            id="input-cpf"
            autocomplete="off"
            type="text"
            required
          ></b-form-input>

          <b-form-invalid-feedback :state="validateCpf">
            Campo inválido.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          label-for="group-numero-celular"
          id="group-numero-celular"
          label="Número Celular*"
          class="mt-2 width-70"
        >
          <b-form-input
            v-model="$store.state.cadastro.numeroCelular"
            placeholder="(00) 0 0000-0000"
            v-mask="'(##) # ####-####'"
            id="input-numero-celular"
            autocomplete="off"
            type="text"
            required
          ></b-form-input>

          <b-form-invalid-feedback :state="validateNumeroCelular">
            Campo inválido.
          </b-form-invalid-feedback>
        </b-form-group>

        <section class="d-flex justify-content-between mt-2">
          <b-form-group
            label-for="select-group-estado"
            id="select-group-estado"
            label="Estado*"
          >
            <b-form-select
              v-model="$store.state.cadastro.regiao.estado"
              @change="setOptionsCidade($event)"
              :options="options.estados"
              placeholder="Selecione"
              autocomplete="off"
              id="select-estado"
              required
            ></b-form-select>

            <b-form-invalid-feedback :state="validateEstado">
              Campo inválido.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label-for="select-group-cidade"
            id="select-group-cidade"
            label="Cidade*"
          >
            <b-form-select
              v-model="$store.state.cadastro.regiao.cidade"
              :options="options.cidades"
              autocomplete="off"
              id="select-cidade"
              required
            ></b-form-select>

            <b-form-invalid-feedback :state="validateCidade">
              Campo inválido.
            </b-form-invalid-feedback>
          </b-form-group>
        </section>
      </b-form>

      <div class="d-flex my-2">
        <b-progress
          class="flex-fill mr-3"
          height="24px"
          :value="1"
          :max="2"
        ></b-progress>
        <strong class="step-progress"> 1 de 2 </strong>
      </div>
      <AppBotaoProximo class="mt-4" @click="proximaPagina" />
    </base-card>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBotaoProximo from "@/components/shared/AppBotaoProximo";
import BaseCard from "@/components/shared/BaseCard";
export default {
  name: "Pagina1",
  components: {
    AppBotaoProximo,
    BaseCard,
  },
  computed: {
    validateNomeCompleto() {
      const nomeCompleto = this.$store.state.cadastro.nomeCompleto;
      return (
        this.noValidate ||
        (nomeCompleto.length >= 3 && nomeCompleto.length <= 48)
      );
    },

    validateCpf() {
      const cpf = this.$store.state.cadastro.cpf;
      return this.noValidate || (cpf.length > 0 && cpf.length == 14);
    },

    validateNumeroCelular() {
      const numeroCelular = this.$store.state.cadastro.numeroCelular;
      return (
        this.noValidate ||
        (numeroCelular.length > 0 && numeroCelular.length == 16)
      );
    },

    validateEstado() {
      return this.noValidate || this.estado.length > 0;
    },

    validateCidade() {
      const cidade = this.$store.state.cadastro.regiao.cidade;
      return this.noValidate || cidade.length > 0;
    },

    estado() {
      return this.$store.state.cadastro.regiao.estado;
    },
  },
  data: () => ({
    noValidate: true,

    options: {
      estados: [
        { value: "", text: "Selecione" },
        { value: "Paraná", text: "Paraná" },
        { value: "Rio Grande do Sul", text: "Rio Grande do Sul" },
        { value: "Santa Catarina", text: "Santa Catarina" },
      ],
      cidades: [{ value: "", text: "Selecione" }],
    },

    cidades: [
      { value: "", text: "Selecione", estado: "" },
      { value: "Londrina", text: "Londrina", estado: "Paraná" },
      { value: "Maringá", text: "Maringá", estado: "Paraná" },
      {
        value: "Pelotas",
        text: "Pelotas",
        estado: "Rio Grande do Sul",
      },
      {
        value: "Porto Alegre",
        text: "Porto Alegre",
        estado: "Rio Grande do Sul",
      },
      {
        value: "Florianópolis",
        text: "Florianópolis",
        estado: "Santa Catarina",
      },
      {
        value: "Joinville",
        text: "Joinville",
        estado: "Santa Catarina",
      },
    ],
  }),

  watch: {
    estado() {
      this.$store.state.cadastro.regiao.cidade = "";
    },
  },

  methods: {
    validarCampos() {
      return (
        this.validateNomeCompleto &&
        this.validateCpf &&
        this.validateNumeroCelular &&
        this.validateEstado &&
        this.validateCidade
      );
    },

    proximaPagina() {
      this.noValidate = false;
      const camposValidos = this.validarCampos();
      if (camposValidos) this.$router.push("/Pagina2");
    },

    getOptionsCidades(estadoSelecionado) {
      const vazio = "";
      return this.cidades.filter((cidade) => {
        return cidade.estado == vazio || cidade.estado == estadoSelecionado;
      });
    },

    setOptionsCidade(event) {
      this.options.cidades = this.getOptionsCidades(event);
    },
  },

  created() {
    const estado = this.$store.state.cadastro.regiao.estado;
    const possuiEstado = estado != "";
    if (possuiEstado) this.setOptionsCidade(estado);
  },
};
</script>

<style src="@/assets/css/pagina.css"></style>
