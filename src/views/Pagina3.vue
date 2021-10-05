<template>
  <section class="pagina">
    <div class="grow-mobile">
      <div class="card-size flex-fill mobile-arrow-top">
        <b-button
          pill
          class="back-button"
          variant="link"
          @click="$router.push('/pagina2')"
        >
          <b-icon-chevron-left></b-icon-chevron-left>
        </b-button>
      </div>

      <base-card titulo="Revisão do cadastro" imagem="desktop-pagina-3.png">
        <ul>
          <li>
            <p class="mb-1"><strong> Nome completo</strong></p>
            <p>{{ $store.state.cadastro.nomeCompleto }}</p>
          </li>

          <li>
            <p class="mb-1"><strong>CPF:</strong></p>
            <p>{{ $store.state.cadastro.cpf }}</p>
          </li>

          <li>
            <p class="mb-1"><strong>Número de celular ou telefone</strong></p>
            <p>{{ $store.state.cadastro.numeroCelular }}</p>
          </li>

          <li>
            <p class="mb-1"><strong>Estado/Cidade</strong></p>
            <p>
              {{ $store.state.cadastro.regiao.estado }} -
              {{ $store.state.cadastro.regiao.cidade }}
            </p>
          </li>

          <li>
            <p class="mb-1"><strong>Especialidade Principal</strong></p>
            <p>{{ $store.state.cadastro.especialiadePrincipal }}</p>
          </li>

          <li>
            <p class="mb-1"><strong>Preço da consulta</strong></p>
            <p>R$ {{ $store.state.cadastro.preco }}</p>
          </li>

          <li>
            <p class="mb-1"><strong>Formas de pagamento da consulta</strong></p>
            <p>
              {{ $store.state.cadastro.metodosDePagamento | formaDePagamento }}
            </p>
          </li>
        </ul>

        <AppBotaoCadastrarProfissional
          @click="$router.push('/pagina4')"
          class="mt-4"
        />

        <AppBotaoEditarCadastro @click="$router.push('/')" />
      </base-card>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import AppBotaoCadastrarProfissional from "@/components/pagina3/AppBotaoCadastrarProfissional";
import AppBotaoEditarCadastro from "@/components/pagina3/AppBotaoEditarCadastro";
import BaseCard from "@/components/shared/BaseCard";

export default {
  name: "Pagina3",
  filters: {
    formaDePagamento(formas) {
      let metodos = [];
      if (formas.dinheiro) metodos.push("Em dinheiro");
      if (formas.pix) metodos.push("Pix");
      if (formas.cartao) metodos.push("Cartão de crédito - " + formas.parcelas);
      return metodos.join(" / ");
    },
  },
  components: {
    AppBotaoCadastrarProfissional,
    AppBotaoEditarCadastro,
    BaseCard,
  },
};
</script>
<style scoped>
::v-deep strong {
  font-size: 0.875rem;
  font-weight: 600;
}

p {
  font-size: 0.875rem;
}

.card-title {
  margin-bottom: 0;
}
</style>
<style src="@/assets/css/pagina.css"></style>
