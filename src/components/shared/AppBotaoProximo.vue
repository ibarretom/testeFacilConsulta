<template>
  <!--Este é o componente de botão Próximo obrigatório. 
    Toda vez que o botão é acionado um evento de click é emitido.
    Tal evento pode ser recebido "na parte de fora do componente"
    escutando o evento @click  -->
  <b-button variant="primary" @click="$emit('click')" pill block>
    Próximo
  </b-button>
</template>

<script>
export default {
  name: "AppBotaoProximo",
};
</script>
