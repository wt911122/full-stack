<template>
    <v-ons-toolbar>
        <div class="left">
            <v-ons-toolbar-button v-if="home">
                <i class="zmdi zmdi-menu"></i>
            </v-ons-toolbar-button>
            <v-ons-back-button v-else></v-ons-back-button>
        </div>
        <div class="center">
            {{ title || me.username }}
        </div>
        <div class="right">
            <v-ons-toolbar-button v-if="home">
                <i class="zmdi zmdi-search"></i>
            </v-ons-toolbar-button>
            <v-ons-toolbar-button @click="addnewRecord" v-if="home">
                <i class="zmdi zmdi-plus"></i>
            </v-ons-toolbar-button>
        </div>
    </v-ons-toolbar>
</template>
<script>
import gql from 'graphql-tag'

export default {
    apollo: {
        me: gql`{ me { username } }`
    },
    props: {
        title: String,
        home: Boolean
    },
    data() {
      // Simple query that will update the 'hello' vue property
      return {
        me: {},
      }
    },

    methods: {
        addnewRecord(){
            this.$router.push({ name: 'step1'});
      }
    }
}
</script>
