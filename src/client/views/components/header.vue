<template>
    <v-ons-toolbar>
        <div class="left">
            <v-ons-toolbar-button v-if="home">
                <i class="zmdi zmdi-menu"></i>
            </v-ons-toolbar-button>
            <v-ons-back-button v-else></v-ons-back-button>
        </div>
        <div class="center">
            {{ title || username }}
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
export default {
    props: {
        title: String,
        home: Boolean
    },
    data() {
      // Simple query that will update the 'hello' vue property
      return {
        username: undefined,
      }
    },
    created(){
        if(!this.title)
            this.getUser();
    },
    methods: {
        getUser(){
            const gpl = `{ me { username } }`;
            fetch('/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: gpl
                })
            })
            .then(r => r.json())
            .then(({ data }) => {
            console.log('data returned:', data)
            this.username = data.me.username;

            // Cookies.set('user', data.login, '24d');
            });
        },
        addnewRecord(){
            this.$router.push({ name: 'step1'});
      }
    }
}
</script>
