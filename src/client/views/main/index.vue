<template id="main-page">
  <v-ons-page>
    <header-bar home/>
    <all-records />
  </v-ons-page>
</template>

<style>
  /* CSS goes here */
</style>

<script>
  import header from '../components/header.vue';
  import records from './records/index.vue';
  // Javascript goes here
  // import gql from "graphql-tag";
  // const GET_HELLO = gql`
  //   query {
  //       hello
  //   }`;
  export default {
    components: {
      'header-bar': header,
      'all-records': records
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