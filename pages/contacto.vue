<script>
  export default {
    data(){
      return {
        datosFormulario: {
          "Nombre": '',
          "Email": '',
          "Mensaje": ''
        },
        campoVacio: false,
        sendAvailable: false,
        enviadoCorrectamente: false,
        cargando: false
      }
    },
    methods:{
      comprobarCampo(){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const objeto = Object.values(this.datosFormulario);
        
        if(objeto.includes('') || !emailPattern.test(objeto[1])){
          this.campoVacio = true;
          this.sendAvailable = false;
        } else {
          this.campoVacio = false;
          this.sendAvailable = true;
        }
      },

      async enviarCorreo() {
        var data = {
            service_id: 'service_ct4t2dv',
            template_id: 'template_efcv84o',
            user_id: 'TLyEySAXCrr-qFpSa',
            template_params: {
                'from_name': `${this.datosFormulario.Nombre}`,
                'to_name': 'Marcuz Sales Team',
                'email': `${this.datosFormulario.Email}`,
                'message': `${this.datosFormulario.Mensaje}`
            }
        };

        this.cargando = true;
        this.sendAvailable = false;

        const { status } = await useFetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          body: JSON.stringify(data)
        })
       
        if(status.value == "success"){
            this.cargando = false;
            this.enviadoCorrectamente = true;
            setTimeout(() => {
              this.enviadoCorrectamente = false;
            }, 2000);
        }
    }
   }
  }
</script>


<template>
    
     
     
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-4xl font-extrabold title-font mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Contactanos</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Ponte en contacto para comenzar tu proyecto.</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="Nombre" class="leading-7 text-sm text-gray-600">Nombre</label>
                <input type="text" id="name" name="Nombre" v-model="datosFormulario.Nombre" @input="comprobarCampo" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="Email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="Email" v-model="datosFormulario.Email" @input="comprobarCampo" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="Mensaje" class="leading-7 text-sm text-gray-600">Mensaje</label>
                <textarea id="message" name="Mensaje" v-model="datosFormulario.Mensaje" @input="comprobarCampo" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>

            <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 w-full" v-show="campoVacio" >
              <p class="font-bold">Hay un error en los campos</p>
              <p>Revisa que los valores que ingresaste o cumplan que sean un correo correcto o no ingreses valores erroneos.</p>
            </div>

            <div style="border-top-color:transparent" class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin mx-auto"  v-show="cargando"></div>

            <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 w-full" v-show="enviadoCorrectamente">
              <p class="font-bold">Enviado correctamente</p>
              <p>Se envio el formulario correctamente, te responderemos pronto.</p>
            </div>

            <div class="p-2 w-full" v-show="sendAvailable">
              <button v-on:click="enviarCorreo" class="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-rose-400 ease-in duration-300 rounded text-lg">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
     


</template>