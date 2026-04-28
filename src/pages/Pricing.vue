<template>
  <section class="bg-white">
    <!-- HERO -->
    <div class="relative py-28 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <span
          class="text-sm font-semibold text-red-500 uppercase tracking-widest"
        >
          Pricing Plans
        </span>

        <h1
          class="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Transparent & Flexible
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500"
          >
            Consulting Packages
          </span>
        </h1>

        <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Choose the consulting package that best suits your business needs. We
          provide scalable solutions for growing companies.
        </p>
      </div>
    </div>

    <!-- PRICING TABLE -->
    <div class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-10">
          <!-- BASIC -->
          <div
            class="group p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl transition duration-500"
          >
            <h3 class="text-xl font-semibold mb-4">Basic</h3>

            <div class="mb-6">
              <span class="text-4xl font-bold text-gray-900">Rp 2.500.000</span>
              <span class="text-gray-500 text-sm"> / month</span>
            </div>

            <ul class="space-y-3 text-gray-600 text-sm mb-8">
              <li>✔ Financial Reporting</li>
              <li>✔ Tax Consultation</li>
              <li>✔ Monthly Accounting</li>
              <li>✔ Email Support</li>
            </ul>

            <router-link
              to="/contact"
              class="block text-center py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              Choose Plan
            </router-link>
          </div>

          <!-- PROFESSIONAL (Highlighted) -->
          <div
            class="relative group p-10 rounded-3xl border-2 border-red-600 shadow-xl scale-105 bg-white"
          >
            <div
              class="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-4 py-1 rounded-full"
            >
              Most Popular
            </div>

            <h3 class="text-xl font-semibold mb-4">Professional</h3>

            <div class="mb-6">
              <span class="text-4xl font-bold text-gray-900">Rp 5.000.000</span>
              <span class="text-gray-500 text-sm"> / month</span>
            </div>

            <ul class="space-y-3 text-gray-600 text-sm mb-8">
              <li>✔ Full Accounting & Tax</li>
              <li>✔ HR Advisory</li>
              <li>✔ Financial Planning</li>
              <li>✔ Priority Support</li>
              <li>✔ Monthly Strategy Review</li>
            </ul>

            <router-link
              to="/contact"
              class="block text-center py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
            >
              Choose Plan
            </router-link>
          </div>

          <!-- ENTERPRISE -->
          <div
            class="group p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl transition duration-500"
          >
            <h3 class="text-xl font-semibold mb-4">Enterprise</h3>

            <div class="mb-6">
              <span class="text-4xl font-bold text-gray-900">Custom</span>
            </div>

            <ul class="space-y-3 text-gray-600 text-sm mb-8">
              <li>✔ Dedicated Consultant</li>
              <li>✔ Business Transformation Plan</li>
              <li>✔ Operational Optimization</li>
              <li>✔ Legal & Compliance Support</li>
              <li>✔ On-site Advisory</li>
              <li>✔ 24/7 Priority Access</li>
            </ul>

            <router-link
              to="/contact"
              class="block text-center py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ SECTION -->
    <div class="py-24 bg-gray-50">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div class="space-y-6 text-left">
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h4 class="font-semibold mb-2">Can I customize my package?</h4>
            <p class="text-gray-600 text-sm">
              Yes, we offer flexible and customizable consulting packages
              tailored to your business needs.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h4 class="font-semibold mb-2">Is there a contract period?</h4>
            <p class="text-gray-600 text-sm">
              Contract terms vary depending on the service type. We offer both
              short-term and long-term engagements.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h4 class="font-semibold mb-2">
              Do you offer on-site consultation?
            </h4>
            <p class="text-gray-600 text-sm">
              Yes, on-site consulting is available under our Professional and
              Enterprise packages.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">
        Let’s Discuss the Right Plan for Your Business
      </h2>

      <router-link
        to="/contact"
        class="px-8 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
      >
        Get Consultation
      </router-link>
    </div>
  </section>
</template>
