<template>
<b-container>
    <b-row>
        <b-col cols="4" offset-md="2" xs="12">
            <div class="login-card-center ">
                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div >
                                <b-card  no-body class="overflow-hidden login-card">
                                    <b-row no-gutters>
                                        <b-col cols="12">
                                            <b-card-body class="text-center">
                                                <b-card-title>
                                                    <b-img class="my-5" src="/img/AN-Logo.png"></b-img>
                                                </b-card-title>
                                                <b-card-text>
                                                    <b-form>
                                                        <label for="feedback-user"></label>
                                                        <b-input class="input-box" v-model="userId" placeholder="User ID" :state="validation" id="feedback-user"></b-input>
                                                        <label for="text-password"></label>
                                                        <b-input class="input-box" type="password" v-model="password" placeholder="Password" id="text-password" aria-describedby="password-help-block"></b-input>
                                                    </b-form>
                                                </b-card-text>
                                                <b-button class="loginBtn px-3 mx-3 mt-5" pill variant="primary">Login</b-button>

                                                <b-button  class="pull-left signUpbtn mt-5 mx-3" pill>Sign-up</b-button>
                                            </b-card-body>
                                        </b-col>
                                    </b-row>
                                </b-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            userId: '',
            password: ''

        }
    },
    computed: {
        validation() {
            if (this.userId.length != 0) {
                return this.userId.length > 4 && this.userId.length < 13
            }

        }
    },
 
}
</script>

<style scoped>

.modal-content {
    background: transparent;
    border: none;
}

.login-card {
    min-width: 350px;
    border: none;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 36px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 36px -12px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 36px -12px rgba(0, 0, 0, 0.75);

}

input.input-box.form-control {
    border: none;
    border-radius: 5px;
    background-color:rgb(248, 248, 248);
    border: 1px solid rgb(209, 206, 206);
    width: 80%;
    margin: auto;
}

.logo-img {
    width: 75%;
}

.form-control:focus {
    border-color: #77C101;
    box-shadow: 0 0 0 0.2rem #b4ff3b38;
}

.loginBtn:hover {
    background-color: #77C101;
    -webkit-box-shadow: 0px 0px 14px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 14px -6px rgba(0, 0, 0, 0.75);
    border: none;
}

.loginBtn {
    background-color: white;
    border: none;
    color: black;
}

.pull-left.signUpbtn.btn-secondary {
    background-color: transparent;
    border: none;
    color: black
}

button.btn.pull-left.signUpbtn.btn-secondary:focus {
    background-color: transparent;
    border: none;
    box-shadow: none;
}

.pull-left.signUpbtn.btn-secondary:active {
    background-color: transparent;
    border: none;
}

.pull-left.signUpbtn.btn-secondary:hover {
    background-color: #77C101;
    -webkit-box-shadow: 0px 0px 14px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 14px -6px rgba(0, 0, 0, 0.75);
    border: none;
    color:white;
}

p {
    margin: 0;
}
</style>
