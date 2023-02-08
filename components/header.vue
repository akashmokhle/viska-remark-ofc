<template>
        <!-- HEADER MAIN CONTAINER -->
        <title>Visko E-serve Pvt Ltd</title>
    <section>
        
        <!-- HERO SECTION -->
        <div class="flex justify-between py-6 px-12 items-center bg-slate-900 text-gray-300 drop-shadow-2xl ">

            <!-- LOGO SECTION -->
            <div class="flex">
                <nuxt-link :to="logo.link">
                    <LogoDefault :image="logo.image" :alt="logo.alttext" :size="'80'" :title="logo.title" />
                </nuxt-link>
            </div>
            <!-- MENUS SECTIN -->
            <div>
                <div class="">
                    <ul class="flex gap-16 menus">
                        <li v-for="menu in menus" class="flex justify-between hover:text-slate-400 duration-200">
                            <nuxt-link :to="menu.link" class="">{{ menu.title }}</nuxt-link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
    export default {
        data:()=> {
            return {
                // LOGO COMPONENT
                logo: {
                    image:'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                    alttext:'logo',
                    title:'logo',
                    link:'/'
                    
                },

                // MENUS COMPONENT
                menus:[
                    {
                        title:'COMPANIES',
                        icon:'',
                        link:'#companies'
                    },
                    {
                        title:'CONTACTS',
                        icon:'',
                        link:'#contact'
                    },
                    {
                        title:'',
                        icon:'',
                        link:'/'
                    },
                ],
            }
        }
    }
</script>