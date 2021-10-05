<template>
  <!-- Toda vez que o botão é acionado um evento de click é emitido.
    Tal evento pode ser recebido "na parte de fora do componente"
    escutando o evento @click -->
  <b-button class="primary-button" @click="$emit('click')" pill block>
    Editar Cadastro
  </b-button>
</template>

<script>
export default {
  name: "AppBotaoProximo",
};
</script>

<style scoped>
.primary-button,
.btn-secondary:hover,
.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
  color: var(--primary);
  background-color: var(--transparent);
  border: none;
}

.btn-secondary.focus,
.btn-secondary:focus {
  box-shadow: none;
}
</style>
