<template>
<b-container>
    <b-row>
        <b-col>
            <h1 class="mt-5 mb-2 page_title text-center">TECHNICAL SUPPORT</h1>
             <b-col cols="8" offset="2">
                <hr>
            </b-col>
            <h5 class="text-center">If you have questions or are having problems contact our support staff at: 866.921.2135</h5>
            <b-row>
                <b-col class="mt-5" cols="12" lg="6">
                    <h4 >Test your system: <span class="orange">Run Test</span></h4>
                    <b-table class="mt-5" borderless :items="items" :fields="fields">
                        <template slot="status">
                            <i class="green_check far fa-check-circle fa-2x"></i>
                        </template>
                    </b-table>
                </b-col>
                <b-col class="my-5" cols="12" lg="6">
                    <b-card class="shadow" bg-variant="light">

                        <b-form-group label-cols-lg="3" label="Support" label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
                            
                            <b-form-group label-cols-sm="3" label="First Name:" label-align-sm="right" label-for="nested-street">
                                <b-form-input id="nested-street"></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols-sm="3" label="Last Name:" label-align-sm="right" label-for="nested-city">
                                <b-form-input id="nested-city"></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols-sm="3" label="Email:" label-align-sm="right" label-for="nested-state">
                                <b-form-input id="nested-state"></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols-sm="3" label="Confirm Email:" label-align-sm="right" label-for="nested-country">
                                <b-form-input id="nested-country"></b-form-input>
                            </b-form-group>
                            <b-form-select class="mb-4" v-model="selected" :options="options"></b-form-select>
                            <b-form-textarea id="textarea" v-model="text" placeholder="What can we help you with?" rows="3" max-rows="6"></b-form-textarea>
                        </b-form-group>
                         <h1 class="text-right learn_more mt-4">Submit <i class="orange fas fa-arrow-circle-right"></i></h1>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "tech_support",
    data() {
        return {
            fields: ['system_test', 'status'],
            items: [{
                    system_test: 'Is Your Browser Supported?',
                    status: true,
                },
                {
                    system_test: 'Is JavaScript Enabled?',
                    status: true,
                },
                {
                    system_test: 'Is a Flash Player Installed?',
                    status: true,
                },
            ],
            selected: null,
            options: [{
                    value: null,
                    text: 'Technical Support'
                },
                {
                    value: 'a',
                    text: 'Customer Service'
                },
                {
                    value: 'b',
                    text: 'Programming'
                },
                {
                    value: 'c',
                    text: 'Advertising'
                },
                {
                    value: 'd',
                    text: 'General Information'
                }
            ],
            text: ''
        }
    }

}
</script>

<style>
.page_title {
    color: rgb(85, 84, 84);
    font-family: 'Playfair Display', serif;
}

.green_check {
    color: #2acf15;
    display: inline;
}

.orange {
    color: rgb(255, 138, 28);
}
.learn_more {
    
    color: rgb(85, 84, 84);
}

</style>
