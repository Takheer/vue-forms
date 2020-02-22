<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label v-highlight.delayed="'red'" for="firstName">
                            First Name
                        </label>
                        <input id="firstName" class="form-control" v-model.lazy="firstName">
                    </div>
                    <div class="form-group">
                        <label for="lastName">
                            Last Name
                        </label>
                        <input id="lastName" class="form-control" v-model.lazy="lastName">
                    </div>
                    <div class="form-group">
                        <label for="email">
                            E-Mail
                        </label>
                        <input id="email" class="form-control" type="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">
                            Password
                        </label>
                        <input id="password" class="form-control" type="password" v-model="password">
                    </div>
                    <div class="form-group">
                        <label for="password">
                            Store Data?
                        </label>
                        <app-switch v-model="isStored"></app-switch>
                    </div>
                    <button class="btn btn-outline-primary" @click.prevent="isSubmitted = true">Submit</button>
                </div>
            </div>
        </form>
        <button class="btn btn-primary" v-my-on:click="clicked">Click me</button>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstName + ' ' + lastName | to-uppercase | reverse-text}}</p>
                        <p>Mail: {{ emailToUppercase }}</p>
                        <p>Password: {{ password | append-length }}</p>
                        <p>Store in Database?: {{ isStored }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from "./components/Switch";
    import {myMixin} from "./myMixin";

    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                password: '',
                isStored: false,
                isSubmitted: false
            }
        },
        components: {
            appSwitch: Switch
        },
        methods: {
            clicked() {
                alert('successful!')
            }
        },
        filters: {
            'to-uppercase'(value) {
                return value.toUpperCase();
            },
            'reverse-text'(value) {
                return value.split('').reverse().join('')
            }
        },
        mixins: [myMixin]
    }
</script>

<style>
</style>
