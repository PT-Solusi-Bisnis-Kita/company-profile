<script setup>
import { ref, onMounted } from "vue";
// import manufacturImg from "@/public/project/manufactur.jpg";

const counter1 = ref(null);
const counter2 = ref(null);
const counter3 = ref(null);
const counter4 = ref(null);

const animateCounter = (el, target, duration = 2000) => {
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / target));
  const timer = setInterval(() => {
    start += 1;
    el.textContent = start;
    if (start >= target) clearInterval(timer);
  }, stepTime);
};

onMounted(() => {
  const section = document.querySelector("#clients");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(counter1.value, 120);
          animateCounter(counter2.value, 350);
          animateCounter(counter3.value, 8);
          animateCounter(counter4.value, 98);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 },
  );

  if (section) observer.observe(section);
});
</script>

<template>
  <section
    id="home"
    class="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50 py-20"
  >
    <!-- Decorative Blur -->
    <div
      class="absolute -top-32 -left-32 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-30"
    ></div>
    <div
      class="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"
    ></div>

    <div
      class="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16"
    >
      <!-- LEFT CONTENT -->
      <div class="space-y-6" data-aos="fade-right" data-aos-duration="1500">
        <!-- Badge -->
        <span
          class="inline-block bg-red-100 text-red-600 text-xs font-semibold px-4 py-1 rounded-full tracking-wide"
        >
          🚀 Business Growth Partner
        </span>

        <!-- Heading -->
        <h1
          class="font-extrabold text-4xl md:text-6xl leading-tight text-gray-900"
        >
          Make Your Business
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500"
          >
            Stand Out
          </span>
        </h1>

        <!-- Paragraph -->
        <p class="text-lg text-gray-600 max-w-lg">
          Solusi Bisnis Indonesia is a strategic consulting firm helping
          companies scale smarter, build sustainable systems, and unlock
          long-term growth.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 pt-4">
          <router-link
            to="/about"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Get Started
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </router-link>

          <router-link
            to="/services"
            class="px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            Explore Services
          </router-link>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div
        class="flex justify-center relative"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
          alt="Business Illustration"
          class="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
        />

        <!-- Floating Card -->
        <div
          class="absolute bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 hidden md:block"
        >
          <p class="text-sm font-semibold text-gray-800">
            📊 120+ Companies Transformed
          </p>
          <p class="text-xs text-gray-500">Trusted by growing businesses</p>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
  >
    <!-- Background Accent -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-100 blur-3xl opacity-30 rounded-full"
    ></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full mb-4"
        >
          🚀 Why Choose Us
        </span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900">
          Empower Your Business With
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500"
          >
            Smart Solutions
          </span>
        </h2>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          We help businesses build strong foundations, improve performance, and
          unlock sustainable growth with strategic consulting.
        </p>
      </div>

      <!-- Features -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Card -->
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="group relative p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
        >
          <div
            class="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-500 transition"
          >
            <svg
              class="w-6 h-6 text-blue-600 group-hover:text-white transition"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h18v4H3V3zm2 6h14v12H5V9z"
              />
            </svg>
          </div>
          <h3 class="mt-6 font-semibold text-lg text-gray-900">Management</h3>
          <p class="mt-2 text-sm text-gray-600">
            Build structured systems and leadership frameworks for long-term
            success.
          </p>
        </div>

        <!-- Card -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="group relative p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
        >
          <div
            class="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-500 transition"
          >
            <svg
              class="w-6 h-6 text-green-600 group-hover:text-white transition"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 3v18m8-8H3"
              />
            </svg>
          </div>
          <h3 class="mt-6 font-semibold text-lg text-gray-900">Analytics</h3>
          <p class="mt-2 text-sm text-gray-600">
            Turn data into insight and actionable business intelligence.
          </p>
        </div>

        <!-- Card -->
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          class="group relative p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
        >
          <div
            class="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-100 group-hover:bg-yellow-500 transition"
          >
            <svg
              class="w-6 h-6 text-yellow-600 group-hover:text-white transition"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="mt-6 font-semibold text-lg text-gray-900">Performance</h3>
          <p class="mt-2 text-sm text-gray-600">
            Optimize operations and increase productivity effectively.
          </p>
        </div>

        <!-- Card -->
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="group relative p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
        >
          <div
            class="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-500 transition"
          >
            <svg
              class="w-6 h-6 text-red-600 group-hover:text-white transition"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"
              />
            </svg>
          </div>
          <h3 class="mt-6 font-semibold text-lg text-gray-900">Innovation</h3>
          <p class="mt-2 text-sm text-gray-600">
            Drive creative strategies to stay ahead of the competition.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-gray-50">
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      <!-- LEFT SIDE - IMAGE -->
      <div class="relative group">
        <div class="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="/public/bg/bg-section-4.JPG"
            alt="Team Collaboration"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <!-- subtle floating card -->
        <div
          class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-6 py-4 hidden md:block"
          data-aos="fade-left"
        >
          <p class="text-sm font-semibold text-gray-900">8+ Years Experience</p>
          <p class="text-xs text-gray-500">Trusted Business Consultant</p>
        </div>
      </div>

      <!-- RIGHT SIDE - CONTENT -->
      <div class="space-y-8">
        <div>
          <span
            class="text-sm font-semibold text-red-500 uppercase tracking-widest"
          >
            About Us
          </span>

          <h2
            class="mt-4 text-3xl md:text-4xl font-bold leading-tight text-gray-900"
          >
            Strategic Partner for
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500"
            >
              Sustainable Business Growth
            </span>
          </h2>

          <p class="mt-6 text-gray-600 text-lg leading-relaxed">
            Solusi Bisnis Indonesia is a consulting firm under PT. Solusi Bisnis
            Kita. We empower organizations with structured systems, strategic
            planning, and innovative solutions tailored to their unique
            challenges.
          </p>
        </div>

        <!-- Modern Feature List -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100"
            >
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <span class="text-gray-700 font-medium">Accounting & Taxation</span>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100"
            >
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <span class="text-gray-700 font-medium">Human Resources</span>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100"
            >
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <span class="text-gray-700 font-medium">Digital Marketing</span>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100"
            >
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <span class="text-gray-700 font-medium">Financial Services</span>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100"
            >
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <span class="text-gray-700 font-medium"
              >Information Technology</span
            >
          </div>

          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100"
            >
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <span class="text-gray-700 font-medium">Operations & Legal</span>
          </div>
        </div>

        <!-- CTA -->
        <div class="pt-6">
          <router-link
            to="/strategic"
            class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Learn More
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section id="clients" class="py-24 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <!-- Heading -->
      <div class="mb-16">
        <span
          class="text-sm font-semibold text-red-500 uppercase tracking-widest"
        >
          Our Impact
        </span>
        <h2 class="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          Trusted by Growing Businesses
        </h2>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          We continuously deliver measurable results and long-term partnerships.
        </p>
      </div>

      <!-- Counter Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div class="space-y-3">
          <h3 class="text-4xl md:text-5xl font-extrabold text-red-600">
            <span ref="counter1">0</span>+
          </h3>
          <p class="text-gray-600 font-medium">Active Clients</p>
        </div>

        <div class="space-y-3">
          <h3 class="text-4xl md:text-5xl font-extrabold text-red-600">
            <span ref="counter2">0</span>+
          </h3>
          <p class="text-gray-600 font-medium">Projects Completed</p>
        </div>

        <div class="space-y-3">
          <h3 class="text-4xl md:text-5xl font-extrabold text-red-600">
            <span ref="counter3">0</span>+
          </h3>
          <p class="text-gray-600 font-medium">Years Experience</p>
        </div>

        <div class="space-y-3">
          <h3 class="text-4xl md:text-5xl font-extrabold text-red-600">
            <span ref="counter4">0</span>%
          </h3>
          <p class="text-gray-600 font-medium">Client Satisfaction</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-16">
        <span
          class="text-sm font-semibold text-red-500 uppercase tracking-widest"
        >
          Portfolio
        </span>
        <h2 class="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          Project & Client
        </h2>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          We serve diverse industries with strategic and sustainable solutions.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- CARD -->
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/public/project/manufactur.jpg"
            class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          ></div>

          <!-- Content -->
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-xl font-semibold">Manufacturing Sector</h3>
            <p class="text-sm opacity-80">Industrial & Production Consulting</p>
          </div>
        </div>

        <!-- CARD -->
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop"
            class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          ></div>
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-xl font-semibold">Trading</h3>
            <p class="text-sm opacity-80">Distribution & Supply Chain</p>
          </div>
        </div>

        <!-- CARD -->
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/public/project/koperasi.jpg"
            class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          ></div>
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-xl font-semibold">Koperasi</h3>
            <p class="text-sm opacity-80">Financial & Community Services</p>
          </div>
        </div>

        <!-- CARD -->
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          ></div>
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-xl font-semibold">Yayasan</h3>
            <p class="text-sm opacity-80">Non-Profit & Organization</p>
          </div>
        </div>

        <!-- CARD -->
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/public/project/klinik.jpg"
            class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          ></div>
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-xl font-semibold">Klinik</h3>
            <p class="text-sm opacity-80">Healthcare Management</p>
          </div>
        </div>

        <!-- CARD -->
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop"
            class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          ></div>
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-xl font-semibold">Individual Clients</h3>
            <p class="text-sm opacity-80">Personal Financial Advisory</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="Prestasi&Pencapaian"></section>
</template>
