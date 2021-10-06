<template>
  <!--A ideia deste componente e fornecer um card base no qual possui
 a mesma identidade visual para todas as paginas e nao necessite de 
 tanta repeticao de codigo. E necessario 2 propriedades para que ele 
 funcione corretamente. Sao elas: titulo e imagem.
 O titulo e uma string na qual ira receber o titulo do card. 
 E a imagem e o nome da imagem que deve se encontrar na pasta assets > imagens.
 Tambem e utilizado um slot no qual ira receber os diferentes inputs
 para as diferentes paginas -->
  <b-card
    :title="titulo"
    class="pb-3 flex-fill rounded-card card-size"
    tag="section"
  >
    <b-card-text>
      <b-container class="no-padding">
        <b-row>
          <b-col cols="12" lg="6">
            <slot />
          </b-col>
          <b-col
            lg="6"
            class="
              d-flex
              hide-mobile
              justify-content-center
              align-items-center
              pr-0
            "
          >
            <b-img
              :src="require(`@/assets/imagens/${imagem}`)"
              fluid
              alt="background-image"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    imagem: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  padding: 0.8rem 0 0.65rem 2.75rem;
}

h4 {
  color: var(--primary);
  font-size: 2rem;
  font-weight: 900;
}

@media (max-width: 960px) {
  .hide-mobile {
    display: none !important;
  }
  .card {
    padding: 1.9rem 0 0 0;
  }

  h4 {
    color: var(--primary);
    font-size: 1.8rem;
  }
}
</style>
