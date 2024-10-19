<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logo from '@images/logo.svg?raw'
import {useRouter} from 'vue-router';

import NavbarFrontPage from '@/layouts/components/NavbarFrontPage.vue'

import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import { toRefs } from 'vue';
// import UserProfile from '@/layouts/components/UserProfile.vue'

const router = useRouter()

const props = defineProps({
  url: String,
  gender: String
})

</script>

<template>
  <!-- 👉 navbar -->
  <NavbarFrontPage>

    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <!-- <div class=""> -->
        <div class="d-flex h-100 align-center">
            <!-- 👉 Vertical nav toggle in overlay mode -->
            <!-- <IconBtn
            class="ms-n3 d-lg-none"
            @click="toggleVerticalOverlayNavActive(true)"
            >
            <VIcon icon="bx-menu" />
            </IconBtn> -->

            <!-- 👉 Search -->
            <div
            class="d-flex align-center cursor-pointer"
            style="user-select: none;"
            >
            <!-- 👉 Search Trigger button -->
            <!-- <IconBtn>
                <VIcon icon="bx-search" />
            </IconBtn> -->

            <span class="d-none d-md-flex align-center text-disabled">
              <a :href="'https://sabilulkhayr.com'" style="text-decoration: none;">
                <span class="me-5 mt-3">Ma'had Sabilul Khayr Al Ibana</span>
                <!-- <span class="meta-key">&#8984;K</span> -->
              </a>
            </span>
            </div>

            <VSpacer />

            <!-- <IconBtn
            class="me-2"
            href="https://github.com/themeselection/sneat-vuetify-vuejs-laravel-admin-template-free"
            target="_blank"
            rel="noopener noreferrer"
            >
            <VIcon icon="bxl-github" />
            </IconBtn> -->

            <!-- <IconBtn class="me-2">
            <VIcon icon="bx-bell" />
            </IconBtn> -->

            <NavbarThemeSwitcher class="me-2" />

            <v-img 
              :src="'../assets/logo-skai.jpg'" 
              max-width="50"/>
            <!-- <UserProfile /> -->
        </div>
      <!-- </div> -->
    </template>

  </NavbarFrontPage>


  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="520"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <!-- <div
              class="d-flex text-primary"
              v-html="logo"
            /> -->
            <v-img 
              :src="'../assets/logo-skai.jpg'" 
              max-width="50"/>
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold">
          SKAI
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Grup General Sabilulkhayr Al Ibana 📖
        </h5>
        <p v-show="!success" class="mt-0">
          Dapatkan Faidah Rutin dan Sesi Tanya Jawab - Insyaallah - bersama Asatidz yang kompeten dibidangnya di Grup General SKAI 
        </p>
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
            >
            Ikhwan
            </VCol>
            <VCol
              cols="3"
            >
            Akhawat
            </VCol>
            <VCol
              cols="9"
            >
            <a v-bind:href="url" target="_blank">{{ url }}</a>

            </VCol>
          </VRow>
          <br>
          Semoga mengawali semangat antum wa antunna untuk mendapatkan ilmu yang bermanfaat. 
          Barakallahu fiikum.
        </p>
      </VCardText>


    </VCard>

  </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>

