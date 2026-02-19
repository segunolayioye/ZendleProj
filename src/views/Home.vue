<template>
    <div class=" bg-white w-full h-full">
   <img src="/assets/orangerose.svg" class="w-full absolute top-0 left-0 z-0 pointer-events-none" alt="orange flare">
   <div class="flex justify-center gap-[980px] py-6">
     <h1 class="text-black font-bold text-[30px]">Zendle</h1>
     <button class="bg-black text-white rounded-full px-7 py-1 gap-3 flex items-center">
       <img src="/assets/pro.svg" class="w-3" alt="profile">sign in</button>
   </div>
   <div class="align-center text-center">
     <h2 class="text-4xl font-semibold">Zendle</h2>
     <p class="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do <br>
      eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim </p>
   </div>

   <div class="flex justify-center gap-3 mt-6">
     <button class="px-6 py-1 rounded-full bg-black text-white">select school</button>
     <router-link to="/Foods">
       <button class="px-6 py-1 border rounded-full">continue</button>
     </router-link>
   </div>

      <div class="flex z-10">
      <div class="flex mt-[230px] gap-3 z-10 ml-5">
          <div class="w-[190.22px] h-[200px] bg-white rounded-[7.87px] shadow-lg p-5 flex flex-col items-center text-center">
            <img src="/assets/food-package(1).svg" alt="1st icon" class="w-12 h-12 mb-4"> 
            <h3 class="font-semibold text-lg mb-2">Real Time Price Comparisons</h3>
            <p class="text-gray-600 text-sm">Our prices are fair and extremely affordable</p>
          </div>
  
          <div class="w-[190.22px] h-[200px] bg-white rounded-[7.87px] shadow-lg p-5 flex flex-col items-center text-center">
            <img src="/assets/fast-delivery(1).svg" alt="2nd icon" class="w-12 h-12 mb-4">
            <h3 class="font-semibold text-lg mb-2">Easy and Speedy Deliveries</h3>
            <p class="text-gray-600 text-sm">Our prices are fair and extremely affordable</p>
          </div>
</div>
      <img 
        src="/assets/rectangle.svg"
        alt="Phone Mockup"
        class="w-[500px] h-[550px] z-50 mx-auto"
      >

      <div class="flex z-10 gap-3 mt-[230px] mr-5">
          <div class="w-[190.22px] h-[200px] bg-white rounded-[7.87px] shadow-lg p-5 flex flex-col items-center text-center">
            <img src="/assets/fast-food-payment.svg" alt="icon 3" class="w-12 h-12 mb-4">
            <h3 class="font-semibold text-lg mb-2">Swift Payment</h3>
            <p class="text-gray-600 text-sm">Experience a high quality payment system</p>
          </div>
  
          <div class="w-[190.22px] h-[200px] bg-white rounded-[7.87px] shadow-lg p-5 flex flex-col items-center text-center">
            <img src="/assets/contactus.svg" alt="4th icon" class="w-12 h-12 mb-4">
            <h3 class="font-semibold text-lg mb-2">Quality Customer Service</h3>
            <p class="text-gray-600 text-sm">Our customer support is always ready to assist</p>
          </div>
        </div>
      </div>

 </div>
</template>