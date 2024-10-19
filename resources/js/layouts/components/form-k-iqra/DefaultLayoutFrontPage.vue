<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logo from '@images/logo.svg?raw'
// import image from "../assets/logo.png"
import { useForm } from 'laravel-precognition-vue';
import {useRouter} from 'vue-router';

import NavbarFrontPage from '../NavbarFrontPage.vue';

import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import { ref } from 'vue';
import { toRef } from 'vue';
import { VBtn } from 'vuetify/lib/components/index.mjs';

const router = useRouter()
// const form = ref({
//   username: '',
//   email: '',
//   password: '',
//   privacyPolicies: false,
// })

const iqra = useForm('post', '/api/k-iqra', {
    full_name: "",
    gender: "",
    phone_number: "",
    address: "",
    is_commit: false
})

let success = ref(false)

iqra.setValidationTimeout(3000)

const data = {
  is_commit: false,
  wa_link:"",
  message:""
}

const form = ref(null)
const info = ref(null)

const addPeserta = () => iqra.submit()
    .then(response => {
        iqra.reset()
        data.is_commit = ref(response.data.data.is_commit)
        data.wa_link = ref(response.data.data.wa_link)
        data.message = ref(response.data.data.message)
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
                <a :href="'#'" >
                  <span class="me-5 mt-3">YAMIIN</span>
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
          YAMIIN
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Form Kelas IQRA Ikhwan
        </h5>
        <p class="mt-0">
          Mari bergabung bersama ikhwah lainnya di kelas IQRA Ikhwan di YAMIIN yang insyaallah diampu oleh Al Ustadz Aris Sutrisno Hafidzhahullah.
        </p>

        <!-- <SuccessRedirect v-if="success.value" :url="data.url.value" :gender="data.gender.value"/> -->
        <p ref="info" class="mt-5" id="url_iqra" :style="{display:'none'}">
          <VCol
              cols="12"
              class="d-flex align-center"
            >
            <VDivider />
              <span class="mx-4">📖</span>
            <VDivider />
          </VCol>
          
          
          <br>
          <VRow class="mt-5">
            <VCol
              cols="3"
              v-if="iqra.is_commit==true"
            >
            Konfirmasi telah melakukan pembayaran biaya pendidikan ⤵️ : 
            </VCol>
            <VCol
              cols="3"
              v-if="iqra.is_commit==false"
            >
            Konfirmasi untuk pembayaran biaya pendidikan ⤵️ : 
            </VCol>
            <VCol
              cols="9"
            >
            <a :href="data.url.value" target="_blank">{{ data.wa_link.value }}</a>

            </VCol>
          </VRow>
          <br>
          {{ data.message.value }} 
          Barakallahu fiikum.
        </p>
      </VCardText>


      <div ref="form" id="form_iqra">
      
        <VCardText>
        <!-- <VForm @submit.prevent="$router.push('/account-settings')"> -->
          <VForm @submit.stop.prevent="addPeserta">
          <VRow>
            <!-- Nama Lengkap -->
            <VCol cols="12">
               <VTextField
                v-model="iqra.full_name"
                @change="iqra.validate('full_name')"
                autofocus
                label="Nama Lengkap"
                placeholder="Ibnu Abdullah"
               /> 
               <div v-if="iqra.invalid('full_name')" class="text-danger">
                  {{ iqra.errors.full_name }}
              </div>
            </VCol>
            <VCol cols="12">
              <v-radio-group v-model="iqra.gender">
                <v-radio label="Ikhwan (Laki-Laki)" value="1"></v-radio>
                <!-- <v-radio label="Akhawat (Perempuan)" value="2"></v-radio> -->
              </v-radio-group>
            </VCol>
            <!-- No. HP. -->
            <VCol cols="12">
              <VTextField
                v-model="iqra.phone_number"
                @change="iqra.validate('phone_number')"
                autofocus
                label="No. WA"
                placeholder="08123456790"
              />
              <div v-if="iqra.invalid('phone_number')" class="text-danger">
                  {{ iqra.errors.phone_number }}
              </div>
            </VCol>
            <!-- email -->
            
            <VCol cols="12">
              <v-textarea 
                clearable 
                label="Alamat" 
                v-model="iqra.address"
                @change="iqra.validate(address)" 
              ></v-textarea>
              <div v-if="iqra.invalid('address')" class="text-danger">
                  {{ iqra.errors.address }}
              </div>
            </VCol>
            <VCol cols="12">
              <VLabel
                  for="privacy-policy"
                  style="opacity: 1;"
                >
                  <small class="me-1">Berkomitmen membayar biaya pendidikan selama 
                    kelas berlangsung hingga selesai. 
                  </small>
                  <!-- <a
                    href="javascript:void(0)"
                    class="text-primary"
                  >privacy policy & terms</a> -->
              </VLabel>
              <v-radio-group v-model="iqra.is_commit">
                <v-radio label="Sudah Bayar Bulan ini" value="1"></v-radio>
                <v-radio label="Belum Bayar" value="2"></v-radio>
              </v-radio-group>
            </VCol>
            <!-- password -->
          
            <Vcol cols="12">
              <div v-if="iqra.validating">
                  Memvalidasi...
              </div>

              <!-- <VBtn
                block
                :disabled="thalib.processing"
              >
                Bergabung
              </VBtn> -->
              <VBtn 
              class="v-btn v-btn--block v-btn--elevated v-theme--light bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"
              block
              :disabled="iqra.processing">
                  Kirim
              </VBtn>
            </Vcol>

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
              Silakan menghubungi Admin kami.
              <RouterLink
                class="text-primary ms-2"
                to="https://wa.me/6281265557612"
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
