<template>
    <div>
        <div class="text-center pb-1 pt-12 bg-slate-900 text-slate-300" v-for="footer in footers">
            <div class=" w-full text-center">
                <h1 class="text-5xl py-4">{{ footer.title }}</h1>
                <h2 class="">{{ footer.discription }}</h2>
            </div>
            <div class="py-8">
                <input type="text" placeholder="type your email here..." class=" px-12 py-2 placeholder-gray-400 border border-red-300 rounded-full drop-shadow-lg focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">
                <nuxt-link :to="footer.link"><button class="bg-red-600 py-2 px-4 rounded-2xl mx-2 hover:bg-red-900 drop-shadow-lg">{{ footer.textbtn }}</button></nuxt-link>
            </div>
            <div class="text-sm pt-8 pb-2 copyright item-center"><span>&copy; {{ currentYear }}</span>
                <span class="pl-1"><a href="/" class="text-amber-500"> Visko E-Serve Pvt Ltd.</a></span>
                <span class="pl-1"> Developed with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://sitentweb.com/" class="text-amber-500" target="_blank">Sitent Web & Graphics Design</a></span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                footers:[
                    {
                        title:"Let's Connect!",
                        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam voluptate quo quaerat similique,",
                        textbtn:"Subscribe",
                        link:"/",

                    }
                ],
                currentYear: "2020"
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                var date = new Date();
                this.currentYear = date.getFullYear();
            }
        }
    }
</script>