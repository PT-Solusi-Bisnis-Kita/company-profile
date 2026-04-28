<template>
  <header
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-100"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3">
          <img src="/logo/Logo-sbi.png" class="h-9 w-auto" alt="SBI Logo" />
          <span class="text-lg font-semibold text-gray-900">
            PT Solusi Bisnis Kita
          </span>
        </router-link>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <!-- HOME -->
          <router-link to="/" :class="linkClass('/')">
            Home
            <span :class="underlineClass('/')"></span>
          </router-link>

          <!-- SERVICES -->
          <router-link to="/services" :class="linkClass('/services')">
            Services
            <span :class="underlineClass('/services')"></span>
          </router-link>

          <!-- PRICING -->
          <router-link to="/pricing" :class="linkClass('/pricing')">
            Pricing
            <span :class="underlineClass('/pricing')"></span>
          </router-link>

          <!-- CONTACT -->
          <router-link to="/contact" :class="linkClass('/contact')">
            Contact
            <span :class="underlineClass('/contact')"></span>
          </router-link>

          <!-- CTA -->
          <router-link
            to="/about"
            class="ml-4 px-5 py-2 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 hover:shadow-lg transition"
          >
            Get Started
          </router-link>
        </nav>

        <!-- Mobile Button -->
        <button
          @click="toggleMenu"
          class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition"
        >
          <svg
            v-if="!isOpen"
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isOpen"
        class="md:hidden pb-6 pt-4 space-y-4 text-sm font-medium"
      >
        <router-link to="/" :class="mobileClass('/')" @click="closeMenu">
          Home
        </router-link>

        <router-link
          to="/services"
          :class="mobileClass('/services')"
          @click="closeMenu"
        >
          Services
        </router-link>

        <router-link
          to="/pricing"
          :class="mobileClass('/pricing')"
          @click="closeMenu"
        >
          Pricing
        </router-link>

        <router-link
          to="/contact"
          :class="mobileClass('/contact')"
          @click="closeMenu"
        >
          Contact
        </router-link>

        <router-link
          to="/about"
          class="block mt-2 px-4 py-2 bg-red-600 text-white rounded-lg text-center"
          @click="closeMenu"
        >
          Get Started
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const isActive = (path) => route.path === path;

const linkClass = (path) => [
  "relative transition group",
  isActive(path)
    ? "text-red-600 font-semibold"
    : "text-gray-700 hover:text-red-600",
];

const underlineClass = (path) => [
  "absolute left-0 -bottom-1 h-0.5 bg-red-600 transition-all duration-300",
  isActive(path) ? "w-full" : "w-0 group-hover:w-full",
];

const mobileClass = (path) =>
  isActive(path)
    ? "block text-red-600 font-semibold"
    : "block text-gray-700 hover:text-red-600";
</script>
