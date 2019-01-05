<template id="main-page">
  <v-ons-page>
    <header-bar home/>
  </v-ons-page>
</template>

<style>
  /* CSS goes here */
</style>

<script>
  import header from '../components/header.vue';
  // Javascript goes here
  // import gql from "graphql-tag";
  // const GET_HELLO = gql`
  //   query {
  //       hello
  //   }`;
  export default {
    components: {
      'header-bar': header
    },
    data() {
      // Simple query that will update the 'hello' vue property
      return {
        username: undefined,
        ABRecords: [],
        hasMore: false,
      }
    },
    created(){
      // this.getUser();
    },
    mounted(){
      console.log(this);
    },
  }
</script>