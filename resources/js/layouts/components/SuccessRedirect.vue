<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logo from '@images/logo.svg?raw'
import {useRouter} from 'vue-router';

import NavbarFrontPage from '@/layouts/components/NavbarFrontPage.vue'

import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
// import UserProfile from '@/layouts/components/UserProfile.vue'

const router = useRouter()

const props = defineProps({
  url: String,
  gender: String
})

// const {url, gender} = toRefs(props)

</script>

<template>
  <!-- 👉 success -->

        <p class="mt-5" id="url_thalib">
          <VCol
              cols="12"
              class="d-flex align-center"
            >
            <VDivider />
              <span class="mx-4">📖</span>
            <VDivider />
          </VCol>
          
          Jazaakumullaahu khayran telah mendaftar di form Kelas General SKAI. 
          Silakan bergabung melalui link berikut
          <br>
          <VRow class="mt-5">
            <VCol
              cols="3"
              v-if="props.gender==1"
            >
            Ikhwan
            </VCol>
            <VCol
              cols="3"
              v-if="props.gender==2"
            >
            Akhawat
            </VCol>
            <VCol
              cols="9"
            >
            <a :href="props.url" target="_blank">{{ props.url }}</a>

            </VCol>
          </VRow>
          <br>
          Semoga mengawali semangat antum wa antunna untuk mendapatkan ilmu yang bermanfaat. 
          Barakallahu fiikum.
        </p>
     
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>

