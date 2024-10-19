<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logo from '@images/logo.svg?raw'
// import image from "../assets/logo.png"
import { useForm } from 'laravel-precognition-vue';
import {useRouter} from 'vue-router';

import NavbarFrontPage from './NavbarFrontPage.vue'
import SuccessRedirect from './SuccessRedirect.vue'

import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import { ref } from 'vue';
import { toRef } from 'vue';

const router = useRouter()
// const form = ref({
//   username: '',
//   email: '',
//   password: '',
//   privacyPolicies: false,
// })

const thalib = useForm('post', '/api/thalibs', {
    full_name: "",
    gender: "",
    phone_number: "",
    email:"",
    age:"",
    address: ""
})

let success = ref(false)

thalib.setValidationTimeout(3000)

const data = {
  gender: "",
  url:""
}

const form = ref(null)
const info = ref(null)

const addThalib = () => thalib.submit()
    .then(response => {
        thalib.reset()
        data.gender = ref(response.data.data.gender)
        data.url = ref(response.data.data.grup_url)
        success = toRef(true)
        // console.log(response.data.data.gender)
        // console.log(data.url.value)
        // console.log(success.value)

        form.value.style.display = 'none'
        info.value.style.display = 'block'

        // router.push({
        //   path: '/join/success',
        //   params:{
        //     grup_url: response.data.grup_url,
        //     gender: response.data.gender
        //   }
        // })
        // alert('thalib created.');
    })

const isPasswordVisible = ref(false)

</script>

<style scoped>
.text-danger {
  color: rgb(214, 83, 83);
} 
</style>

<template>
  <!-- 👉 navbar -->
  <NavbarFrontPage>

    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="">
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
                <a :href="'https://sabilulkhayr.com'" >
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
      </div>
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
        <p class="mt-0">
          Dapatkan Faidah Rutin dan Sesi Tanya Jawab - Insyaallah - bersama Asatidz yang kompeten dibidangnya di Grup General SKAI 
        </p>

        <!-- <SuccessRedirect v-if="success.value" :url="data.url.value" :gender="data.gender.value"/> -->
        <p ref="info" class="mt-5" id="url_thalib" :style="{display:'none'}">
          <VCol
              cols="12"
              class="d-flex align-center"
            >
            <VDivider />
              <span class="mx-4">📖</span>
            <VDivider />
          </VCol>
          
          Jazaakumullaahu khayran telah mendaftar di form Kelas General SKAI. 
          Silakan bergabung melalui link berikut ⤵️ : 
          <br>
          <VRow class="mt-5">
            <VCol
              cols="3"
              v-if="thalib.gender=='1'"
            >
            Ikhwan
            </VCol>
            <VCol
              cols="3"
              v-if="thalib.gender=='2'"
            >
            Akhawat
            </VCol>
            <VCol
              cols="9"
            >
            <a :href="data.url.value" target="_blank">{{ data.url.value }}</a>

            </VCol>
          </VRow>
          <br>
          Semoga mengawali semangat antum wa antunna untuk mendapatkan ilmu yang bermanfaat. 
          Barakallahu fiikum.
        </p>
      </VCardText>


      <div ref="form" id="form_thalib">
      
        <VCardText>
        <!-- <VForm @submit.prevent="$router.push('/account-settings')"> -->
          <VForm @submit.stop.prevent="addThalib">
          <VRow>
            <!-- Nama Lengkap -->
            <VCol cols="12">
               <VTextField
                v-model="thalib.full_name"
                @change="thalib.validate('full_name')"
                autofocus
                label="Nama Lengkap"
                placeholder="Ibnu Abdullah"
               /> 
               <div v-if="thalib.invalid('full_name')" class="text-danger">
                  {{ thalib.errors.full_name }}
              </div>
            </VCol>
            <VCol cols="12">
              <v-radio-group v-model="thalib.gender">
                <v-radio label="Ikhwan (Laki-Laki)" value="1"></v-radio>
                <v-radio label="Akhawat (Perempuan)" value="2"></v-radio>
              </v-radio-group>
            </VCol>
            <!-- No. HP. -->
            <VCol cols="12">
              <VTextField
                v-model="thalib.phone_number"
                @change="thalib.validate('phone_number')"
                autofocus
                label="No. WA"
                placeholder="08123456790"
              />
              <div v-if="thalib.invalid('phone_number')" class="text-danger">
                  {{ thalib.errors.phone_number }}
              </div>
            </VCol>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="thalib.email"
                @change="thalib.validate('email')"
                label="Email"
                placeholder="johndoe@email.com"
                type="email"
              />
              <div v-if="thalib.invalid('email')" class="text-danger">
                  {{ thalib.errors.email }}
              </div>
            </VCol>
            <!-- Usia -->
            <VCol cols="12">
               <VTextField
                v-model="thalib.age"
                @change="thalib.validate('age')"
                autofocus
                label="Usia"
                placeholder="20"
               /> 
               <div v-if="thalib.invalid('age')" class="text-danger">
                  {{ thalib.errors.age }}
              </div>
            </VCol>
            <VCol cols="12">
              <v-textarea 
                clearable 
                label="Alamat" 
                v-model="thalib.address"
                @change="thalib.validate(address)" 
              ></v-textarea>
              <div v-if="thalib.invalid('address')" class="text-danger">
                  {{ thalib.errors.address }}
              </div>
            </VCol>
            <!-- password -->
            <VCol cols="12">
             
              <div class="d-flex align-center mt-1 mb-4">
                <VCheckbox
                  id="privacy-policy"
                  inline
                />
                <VLabel
                  for="privacy-policy"
                  style="opacity: 1;"
                >
                  <small class="me-1"> Saya menyatakan bahwa data yang saya isikan 
                    adalah benar.</small>
                  <!-- <a
                    href="javascript:void(0)"
                    class="text-primary"
                  >privacy policy & terms</a> -->
                </VLabel>
              </div>

              <div v-if="thalib.validating">
                  Validating...
              </div>

              <!-- <VBtn
                block
                :disabled="thalib.processing"
              >
                Bergabung
              </VBtn> -->
              <button 
              class="v-btn v-btn--block v-btn--elevated v-theme--light bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"
              block
              :disabled="thalib.processing">
                  Submit
              </button>
            </VCol>

            <!-- helpdesk -->
            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>
            
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>Ada Pertanyaan?</span>
              Silakan menghubungi Admin SKAI Center kami.
              <RouterLink
                class="text-primary ms-2"
                to="https://sabilulkhayr.com/skaicenter"
              >
              Hubungi
              </RouterLink>
            </VCol>

            

          </VRow>
        </VForm>
        </VCardText>
      
      </div>
    </VCard>

  </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>

<script>
  
  // import { useForm } from 'laravel-precognition-vue';

  // export default {
  //   data() {
  //     return {
  //       thalib: {
  //         full_name: "",
  //         gender: "",
  //         phone_number: "",
  //         email:"",
  //         age:"",
  //         address: ""
  //       }
  //     }
  //   },
  //   methods: {
  //     addThalib(){
  //       console.log(this.thalib)
        
  //       this.axios
  //           .post('http://localhost:8000/api/thalibs', this.thalib)
  //           .then(response => (
  //             this.$router.push({
  //               name: 'success',
  //               params:{
  //                 result: this.result
  //               }
  //             })
  //           ))
  //     }
  //   }
  // }
</script>
