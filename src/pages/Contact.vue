<template>
  <section class="bg-white min-h-screen flex items-center justify-center">
    <div class="max-w-3xl mx-auto px-6 text-center py-24">
      <!-- Icon -->
      <div
        class="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-full bg-green-100"
      >
        <svg
          class="w-10 h-10 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.52 3.48A11.94 11.94 0 0012.02 0C5.39 0 .02 5.36.02 11.98c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.62a11.94 11.94 0 005.82 1.49h.01c6.63 0 12-5.36 12-11.98 0-3.19-1.24-6.19-3.51-8.41zM12.03 21.5h-.01a9.49 9.49 0 01-4.84-1.33l-.35-.21-3.68.96.98-3.59-.23-.37a9.46 9.46 0 01-1.46-5.06c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.92.98 6.71 2.77a9.42 9.42 0 012.79 6.72c0 5.24-4.27 9.51-9.52 9.51z"
          />
        </svg>
      </div>

      <!-- Heading -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Contact Us via WhatsApp
      </h1>

      <!-- Description -->
      <p class="text-gray-600 text-lg mb-12">
        Our team is ready to assist you with professional consulting services.
        Click the button below to start a direct conversation with us.
      </p>

      <!-- WA Button -->
      <a
        :href="waLink"
        target="_blank"
        class="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 transition duration-300"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M20.52 3.48A11.94 11.94 0 0012.02 0C5.39 0 .02 5.36.02 11.98c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.62a11.94 11.94 0 005.82 1.49h.01c6.63 0 12-5.36 12-11.98 0-3.19-1.24-6.19-3.51-8.41z"
          />
        </svg>
        Chat on WhatsApp
      </a>

      <!-- Phone Info -->
      <!-- <p class="mt-6 text-gray-500 text-sm">
        Or contact directly: <span class="font-medium">+62 811 3032 040</span>
      </p> -->
    </div>
  </section>
</template>

<script setup>
const phoneNumber = "6285649383247"; // TANPA + atau spasi

const message = encodeURIComponent(
  "Halo PT. Solusi Bisnis Kita, saya ingin berkonsultasi mengenai layanan Anda.",
);

const waLink = `https://wa.me/${phoneNumber}?text=${message}`;
</script>
