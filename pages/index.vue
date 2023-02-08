<template>
  <div class="">
    <!-- HERO MAIN CONTAINER START-->
    <div>
      <HeroSectionDefault
        :title="herotitle"
        :containttitle="herocontainttitle"
        :paragraph="heroparagraph"
        :btnone="herobtn[0].btn"
        :btntwo="herobtn[1].btn"
        :mainimage="heroimage"
      />
    </div>

    <!-- HERO MAIN CONTAINER END-->

    <!--OUR COMPANY CARDS START -->

    <div id="companies" class="w-full h-screen flex items-center ">
      <div>
        <div id="companies-heading">
        <div class="text-center">
          <h1 class="text-4xl pt-16 font-bold drop-shadow-2xl text-slate-900">
            {{ mains.toptitle }}
          </h1>
          <p class="text-center font-normal text-sm pt-3 pb-0 text-slate-600">{{ mains.para }}</p>
        </div>
        </div>
        <br /><br />
        <div class="flex w-full ">
          <div
          v-for="card in cards"
          class="w-1/2 block px-3 py-3 shadow-md hover:shadow-xl duration-300"
        >
          <div class="block">
            <div class="text-gray-300">
            <nuxt-link to="/"
              ><img
                class="rounded-lg shadow-lg hover:rounded-2xl hover:animate-pulse duration-1000 hover:drop-shadow"
                :src="card.image"
                alt=""
            /></nuxt-link>
          </div>
          <div
              class="text-slate-700 rounded-lg px-3 drop-shadow-lg hover: duration-1000"
            >
              <div class="flex justify-between pt-3">
                <h1 class="text-lg font-bold">{{ card.title }}</h1>
                <a
                  :href="card.link"
                  target="_blank"
                  class="px-2 py-1 rounded-full text-white bg-blue-500"
                  ><i class="fa-solid fa-link text-sm"></i
                ></a>
              </div>
              <a :href="card.link" target="_blank">{{ card.link }}</a>
              <p class="py-1 text-gray-500 text-sm">
                {{ card.moreinfomation }}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <!--OUR COMPANY CARDS END -->

    <!-- CONTACT SECTION START -->
    <div
      id="contact"
      class="flex w-full duration-1000 px-6 justify-between py-6"
    >
      <div class="bg-slate-200 drop-shadow-2xl w-1/2 px-12 rounded-lg ">
        <h1 class="font-bold text-4xl py-8 text-slate-800 ">
          Get In Touch <i class="fa-solid fa-fingerprint animate-pulse text-slate-600 text-3xl"></i>
        </h1>
        <h4 class="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere neque
          distinctio quaerat ad harum molestiae perspiciatis tempora, et vitae.
          Molestiae officia reprehenderit tempore, ab voluptate vitae temporibus
          eos quam a.
        </h4>
        <p class="py-4 pb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere neque
          distinctio quaerat ad harum molestiae perspiciatis tempora, et vitae.
          Molestiae officia reprehenderit tempore, ab voluptate vitae temporibus
          eos quam a.
        </p>
        <p class="py-2 pb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere neque
          distinctio quaerat ad harum molestiae perspiciatis tempora, et vitae.
          Molestiae officia reprehenderit tempore, ab voluptate vitae temporibus
          eos quam a.
        </p>

        <a href=""
          ><i class="fa-sharp fa-solid fa-phone-volume py-4 text-slate-800 "></i
          ><b class="text-slate-600"> 91+ 1234567890</b></a
        >
        <br />
        <a href=""
          ><i class="fa-solid fa-square-envelope py-4 text-slate-800"></i
          ><b class="text-slate-600"> info@gmail.com</b></a
        >
        <br />
        <a href=""
          ><i class="fa-solid fa-map-location-dot py-4 text-slate-700"></i
          ><b class="text-slate-600">
            Regal Square indore madhya pradesh india</b
          ></a
        >
      </div>

      <div class="w-1/2 duration-1000 px-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.14466745495!2d75.88234101488503!3d22.722863685105736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd391d708021%3A0x77a9376b5b03e8cb!2sApollo%20Tower%2C%20Mahatma%20Gandhi%20Rd%2C%20South%20Tukoganj%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1672484403761!5m2!1sen!2sin"
          class="rounded-lg duration-1000"
          width="700"
          height="650"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <!-- CONTACT SECTION END -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // HERO CONTAINER
      herotitle: "hero section",
      herocontainttitle: "Digital Solutions For Your Company",
      heroparagraph: "",
      herobtn: [
        {
          btn: "Get Started",
        },
        {
          btn: "How It Work",
        },
      ],
      heroimage:
        "https://images.unsplash.com/photo-1507919909716-c8262e491cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",

      // COMPAMIES CARD
      mains: {
        toptitle: "OUR COMPANIES",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempore corrupti id unde dolor assumenda vero sunt nostrum commodi, illo dolorem optio vitae",
      },

      cards: [
        {
          title: "Visko E-Serve Pvt Ltd",
          image:
            "https://images.unsplash.com/photo-1621570168205-c93ccd501004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          link: "https://viskoeserve.com",
          linktitle: "www.google.com",
          moreinfomation:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia at neque, animi minima impedit quaerat temporibus!",
          hover: "",
        },
        {
          title: "Visko HR Pvt Ltd",
          image:
            "https://images.unsplash.com/photo-1621570274061-6b0c42c7bd13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          link: "https://remarkhr.com",
          linktitle: "www.google.com",
          moreinfomation:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia at neque, animi minima impedit quaerat temporibus!",
          hover: "",
        },
        {
          title: "Visko Foods Pvt Ltd",
          image:
            "https://images.unsplash.com/photo-1621570168297-bdcdd4457664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          link: "https://viskofoods.com",
          linktitle: "www.google.com",
          moreinfomation:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia at neque, animi minima impedit quaerat temporibus!",
        },
        {
          title: "Visko Real Estate Pvt Ltd",
          image:
            "https://images.unsplash.com/photo-1621570168077-befe8b7eab56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          link: "https://viskorealestate.com",
          linktitle: "www.google.com",
          moreinfomation:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia at neque, animi minima impedit quaerat temporibus!",
        },
      ],
    };
  },
};
</script>
