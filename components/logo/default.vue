<template>
    <div>
        <img :src="image" :alt="alt" :width="size" :title="title">
    </div>
</template>

<script>
    export default { 
        props:{
            image:{
                default:''
            },
            alt:{
                default:''
            },
            size:{
                default:'50'
            },
            title:{
                default:''
            }
        }
    }
</script>