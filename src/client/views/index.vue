<template id="main-page">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="toolbar__left toolbar--material__left">
        <span class="toolbar-button toolbar-button--material">
          <i class="zmdi zmdi-menu"></i>
        </span>
      </div>
      <div class="toolbar__center toolbar--material__center">
        {{ hello }}
      </div>
      <div class="toolbar__right toolbar--material__right">
        <span class="toolbar-button toolbar-button--material">
          <i class="zmdi zmdi-search"></i>
        </span>
        <span class="toolbar-button toolbar-button--material">
          <i class="zmdi zmdi-more-vert"></i>
        </span>
      </div>
    </v-ons-toolbar>
    <router-view></router-view>
  </v-ons-page>
</template>

<style>
  /* CSS goes here */
</style>

<script>
  // Javascript goes here
  // import gql from "graphql-tag";
  // const GET_HELLO = gql`
  //   query {
  //       hello
  //   }`;
  export default {
    data() {
      // Simple query that will update the 'hello' vue property
      return {
        hello: undefined,
      }
    },
    created(){
      const gpl = `{
        ABRecords(pageSize:10 page:1) {
          hasMore
          records {
            category
            content
            cost
            moodgrade
          }
        }
      }`
      fetch('/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({query: gpl})
        })
        .then(r => r.json())
        .then(data => {

            console.log('data returned:', data)
        });
    },
    mounted(){
      console.log(this);
    },
    methods: {

    }
  }
</script>