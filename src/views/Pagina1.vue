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
            v-model="cadastro.nomeCompleto"
            placeholder="Digite o nome completo"
            id="input-nome-completo"
            autocomplete="off"
            type="text"
            required
          ></b-form-input>

          <template v-if="$v.nomeCompleto.$error">
            <b-form-invalid-feedback :state="$v.nomeCompleto.required">
              Este campo é obrigatório.
            </b-form-invalid-feedback>
            <b-form-invalid-feedback
              :state="$v.nomeCompleto.minLength && $v.nomeCompleto.maxLength"
            >
              O nome completo deve ter de 3 a 48 caracteres
            </b-form-invalid-feedback>
          </template>
        </b-form-group>

        <b-form-group
          class="mt-2 width-70"
          label-for="group-cpf"
          id="group-cpf"
          label="CPF*"
        >
          <b-form-input
            v-mask="'###.###.###-##'"
            v-model="cadastro.cpf"
            placeholder="Digite um CPF"
            id="input-cpf"
            autocomplete="off"
            type="text"
            required
          ></b-form-input>

          <template v-if="$v.cpf.$error">
            <b-form-invalid-feedback
              v-if="!$v.cpf.required"
              :state="$v.cpf.required"
            >
              Este campo é obrigatório.
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-else :state="$v.cpf.cpfValido">
              Insira um CPF válido
            </b-form-invalid-feedback>
          </template>
        </b-form-group>

        <b-form-group
          label-for="group-numero-celular"
          id="group-numero-celular"
          label="Número Celular*"
          class="mt-2 width-70"
        >
          <b-form-input
            v-model="cadastro.numeroCelular"
            placeholder="(00) 0 0000-0000"
            v-mask="'(##) # ####-####'"
            id="input-numero-celular"
            autocomplete="off"
            type="text"
            required
          ></b-form-input>

          <template v-if="$v.numeroCelular.$error">
            <b-form-invalid-feedback
              v-if="!$v.numeroCelular.required"
              :state="$v.numeroCelular.required"
            >
              Este campo é obrigatório.
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-else :state="$v.numeroCelular.valido">
              Insira um número celular válido
            </b-form-invalid-feedback>
          </template>
        </b-form-group>

        <section class="d-flex justify-content-between mt-2">
          <b-form-group
            label-for="select-group-estado"
            id="select-group-estado"
            label="Estado*"
          >
            <b-form-select
              v-model="cadastro.regiao.estado"
              @change="setOptionsCidade($event)"
              :options="options.estados"
              placeholder="Selecione"
              autocomplete="off"
              id="select-estado"
              required
            ></b-form-select>

            <template v-if="$v.estado.$error">
              <b-form-invalid-feedback :state="$v.estado.required">
                Este campo é obrigatório.
              </b-form-invalid-feedback>
            </template>
          </b-form-group>

          <b-form-group
            label-for="select-group-cidade"
            id="select-group-cidade"
            label="Cidade*"
          >
            <b-form-select
              v-model="cadastro.regiao.cidade"
              :options="options.cidades"
              autocomplete="off"
              id="select-cidade"
              required
            ></b-form-select>

            <template v-if="$v.cidade.$error">
              <b-form-invalid-feedback :state="$v.cidade.required">
                Este campo é obrigatório.
              </b-form-invalid-feedback>
            </template>
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
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import AppBotaoProximo from "@/components/shared/AppBotaoProximo";
import BaseCard from "@/components/shared/BaseCard";
import { validationMixin } from "vuelidate";
import { mapState } from "vuex";

export default {
  name: "Pagina1",
  components: {
    AppBotaoProximo,
    BaseCard,
  },
  mixins: [validationMixin],
  computed: {
    ...mapState({
      cadastro: (state) => state.cadastro,
    }),
    nomeCompleto() {
      return this.cadastro.nomeCompleto;
    },
    cpf() {
      return this.cadastro.cpf;
    },
    numeroCelular() {
      return this.cadastro.numeroCelular;
    },
    estado() {
      return this.cadastro.regiao.estado;
    },
    cidade() {
      return this.cadastro.regiao.cidade;
    },
  },
  data: () => ({
    options: {
      estados: [
        { value: "", text: "Selecione" },
        { value: "Paraná", text: "Paraná" },
        { value: "Rio Grande do Sul", text: "Rio Grande do Sul" },
        { value: "Santa Catarina", text: "Santa Catarina" },
      ],
      cidades: [{ value: "", text: "Selecione" }],
    },

    cidadesValidas: [
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

  validations: {
    nomeCompleto: {
      required,
      maxLength: maxLength(48),
      minLength: minLength(3),
    },
    cpf: {
      required,
      cpfValido: (cpf) => cpf.length == 14,
    },
    numeroCelular: {
      required,
      valido: (numeroCelular) => numeroCelular.length == 16,
    },
    estado: { required },
    cidade: { required },
  },

  watch: {
    estado() {
      this.cadastro.regiao.cidade = "";
    },
  },

  methods: {
    proximaPagina() {
      this.$v.$touch();
      const camposValidos = !this.$v.$anyError || !this.$v.$error;
      if (camposValidos) this.$router.push("/Pagina2");
    },

    getOptionsCidades(estadoSelecionado) {
      const vazio = "";
      return this.cidadesValidas.filter((cidade) => {
        return cidade.estado == vazio || cidade.estado == estadoSelecionado;
      });
    },

    setOptionsCidade(event) {
      this.options.cidades = this.getOptionsCidades(event);
    },
  },

  created() {
    const estado = this.cadastro.regiao.estado;
    const possuiEstado = estado != "";
    if (possuiEstado) this.setOptionsCidade(estado);
    console.log(this);
  },
};
</script>

<style src="@/assets/css/pagina.css"></style>
