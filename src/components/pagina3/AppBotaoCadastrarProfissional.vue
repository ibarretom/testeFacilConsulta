<template>
  <!--Este é o componente de botão Cadastrar pofissional obrigatório. 
    Toda vez que o botão é acionado um evento de click é emitido.
    Tal evento pode ser recebido "na parte de fora do componente"
    escutando o evento @click -->
  <b-button variant="info" @click="$emit('click')" pill block>
    Cadastrar profissional
  </b-button>
</template>

<script>
export default {
  name: "AppBotaoCadastrarProfissional",
};
</script>
