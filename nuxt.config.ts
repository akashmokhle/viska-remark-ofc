// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app:{
        head:{
            link:[
                {
                    rel: "stylesheet" ,
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
               },
               {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
               },
               {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
               },
               {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;700&display=swap"
               }
            ],
            script:[
                
                {src:'https://cdn.tailwindcss.com'},
                {src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"},
                
            ]
        }
    }
})
