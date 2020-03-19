<template>
<b-container>
    <b-row>
        <b-col cols="4" offset-md="2" xs="12">
            <div class="login-card-center ">
                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div >
                                <b-card no-body class="overflow-hidden login-card">
                                    <b-row no-gutters>
                                        <b-col cols="12">
                                            <b-card-body class="text-center">
                                                <b-card-title>
                                                    <b-img class="my-5" src="/img/AN-Logo.png"></b-img>
                                                </b-card-title>
                                                <b-card-text class="flexCenter">
                                                    <b-form >
                                                        <label for="feedback-user"></label>
                                                        <b-input class="input-box" v-model="userId" placeholder="User ID" :state="validation" id="feedback-user"></b-input>
                                                        <label for="text-password"></label>
                                                        <b-input class="input-box" type="password" v-model="password" placeholder="Password" id="text-password" aria-describedby="password-help-block"></b-input>
                                                    </b-form>
                                                </b-card-text>
                                                <b-button class="loginBtn px-5  mt-5" pill variant="none">Login</b-button>
                                                <p class="mt-2">or</p>
                                                <b-button variant="none" class="pull-left signUpbtn">Sign-up</b-button>
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
    }
}
</script>

<style scoped>

.modal-content{
    border:none;
}

.login-card {
    min-width: 350px;
    border: none;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 36px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 36px -12px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 36px -12px rgba(0, 0, 0, 0.75);

}

input.input-box.form-control {
    border: none;
    border-radius: 0;
    border: 1px solid rgb(209, 206, 206);
    border-radius: 5px;
    background:white;
    width:70%;
    margin:0 auto;
    -webkit-box-shadow: 0px 0px 8px -4px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 0px 8px -4px rgba(0,0,0,0.2);
box-shadow: 0px 0px 8px -4px rgba(0,0,0,0.2);
}

.form-control:focus {
    border-color: #22cc39;
    box-shadow: 0 0 0 0.2rem #22cc3938;
    border-radius: 15px;
}

.loginBtn {
    background-image: linear-gradient(100deg, #c3f74c 0%, #86CB01 100%);
    border: none;
    color:white;
}
.loginBtn:Hover {
    -webkit-box-shadow: 0px 0px 14px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 14px -6px rgba(0, 0, 0, 0.75);
    color:white;
}
.signUpbtn {
    border: none;
}
.signUpbtn:hover {
    color: #86CB01;
}

p {
    margin: 0;
}
</style>
