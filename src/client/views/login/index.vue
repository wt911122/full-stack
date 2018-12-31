<template>
<v-ons-page>
    <v-ons-row class="all-in-one-page" vertical-align="center">
        <v-ons-col>
            <v-ons-list>
                <v-ons-list-item>
                    <div class="left">
                    <h1>Hello!</h1>
                    </div>
                </v-ons-list-item>
                <v-ons-list-item>
                    <div class="center">
                        <v-ons-input
                            v-model="username"
                            placeholder="Username"
                            type="text"
                            modifier="large"
                            float
                            required
                        >
                        </v-ons-input>
                    </div>
                </v-ons-list-item>
                <v-ons-list-item>
                    <div class="center">
                        <v-ons-input
                            v-model="password"
                            placeholder="Password"
                            type="password"
                            modifier="large"
                            float
                            required
                        >
                        </v-ons-input>
                    </div>
                </v-ons-list-item>
                <v-ons-list-item>
                    <div class="center">
                        <v-ons-button modifier="large" @click="login">登录</v-ons-button>
                    </div>
                </v-ons-list-item>
                <v-ons-list-item>
                    <div class="center">
                        <v-ons-button modifier="large" @click="regist">注册</v-ons-button>
                    </div>
                </v-ons-list-item>


            </v-ons-list>
        </v-ons-col>
    </v-ons-row>

</v-ons-page>
</template>
<script>
import Cookies from 'js-cookie';
export default {
    data(){
        return {
            username: '',
            password: ''
        }
    },
    created(){
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
           // Cookies.set('user', data.login, '24d');
        });
    },
    mounted(){

    },
    methods: {
        login(){
            const { username, password } = this;
            console.log(username, password)
            const gpl = `mutation { login(username: "${username}", password: "${password}")}`;
            console.log(gpl)
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
                Cookies.set('user', data.login, '24d');
            });
        },
        regist(){
            const { username, password } = this;
            console.log(username, password)
            const gpl = `mutation { signup(username: "${username}", password: "${password}")}`;
            console.log(gpl)
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
            });
        }

    }
}
</script>
<style module>



</style>
