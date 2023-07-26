<template>
     
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center min-[800px]:w-3/4 min-[1024px]:w-2/4 mx-auto ">
        <NuxtLink to="/">
          <img src="/assets/images/marcuzweb.png" alt="">
        </NuxtLink>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5 p-3">
          <NuxtLink to="/contacto" class="text-neutral-300 text-md font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 ease-out duration-300">Contacto</NuxtLink>
          <NuxtLink to="/proyectos" class="text-neutral-300 text-md font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 ease-out duration-300">Proyectos</NuxtLink>
          <NuxtLink to="/equipo" class="text-neutral-300 text-md font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 ease-out duration-300">Equipo</NuxtLink>
        </nav>
      </div>
    </header>
     


</template>



<style scoped>
  header{
    background-color: #000000;
  }


</style>