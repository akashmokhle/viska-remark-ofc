<template>
    <div>
        <!-- HERO SECTION -->
        
        <div class="h-1/2 hero flex text-white ">
            <!-- <div class="w-1/2 pr-32 px-12 ">
                <h2 class="pt-28" ><i class="fa fa-home text-3xl text-sky-400" ></i> {{ title }}</h2>
                <h1 class=" py-10 text-6xl font-bold  hover:text-sky-300">{{ containttitle }}</h1>
                <p class="text-1xl pb-8">{{ paragraph }}</p>
                <div class="">
                    <button class=" hover:bg-gray-300 m-3 px-4 py-3 bg-sky-400 rounded-lg text-gray-900 ">{{ btnone }}</button>
                    <button class=" hover:bg-gray-300 m-3 px-4 py-3 bg-sky-400 rounded-lg text-gray-900 ">{{ btntwo }}</button>
                </div>
                <button></button>
            </div>
            <div class="w-1/2 p-10"> -->
                <img class="w-full drop-shadow-2xl duration-1000 " :src="mainimage" alt="">
            <!-- </div> -->
            
        </div>
    </div>
</template>

<script>
    export default{
           props:{

            mainimage: {
                default: []
            },
            title:{
                default:''
            },
            containttitle:{
                default:''
            },
            paragraph:{
                default:''
            },
            btnone:{
                default:''
            },
            btntwo:{
                default:''
            }
           }
    }
</script>

<style>
.hero img{
    background-size: cover;
}
</style>