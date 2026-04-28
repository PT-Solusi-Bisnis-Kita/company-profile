<template>
  <section class="bg-white">
    <!-- HERO -->
    <div class="relative py-28 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <span
          class="text-sm font-semibold text-red-500 uppercase tracking-widest"
        >
          Strategic Partner
        </span>

        <h1
          class="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Sustainable Business
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500"
          >
            Growth Solutions
          </span>
        </h1>

        <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Solusi Bisnis Indonesia is a consulting firm under PT. Solusi Bisnis
          Kita. We empower organizations with structured systems, strategic
          planning, and innovative solutions tailored to their unique
          challenges.
        </p>
      </div>
    </div>

    <!-- OUR EXPERTISE -->
    <div class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
            Our Expertise
          </h2>
          <div class="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-10">
          <div
            class="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-500"
          >
            <h3 class="text-xl font-semibold mb-4 text-red-600">
              Accounting & Taxation
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Structured financial reporting, tax compliance, fiscal planning,
              and strategic accounting advisory to ensure regulatory excellence.
            </p>
          </div>

          <div
            class="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-500"
          >
            <h3 class="text-xl font-semibold mb-4 text-red-600">
              Human Resources
            </h3>
            <p class="text-gray-600 text-sm">
              Organizational structuring, HR policy development, performance
              management systems, and workforce strategy optimization.
            </p>
          </div>

          <div
            class="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-500"
          >
            <h3 class="text-xl font-semibold mb-4 text-red-600">
              Digital Marketing
            </h3>
            <p class="text-gray-600 text-sm">
              Data-driven branding, digital growth strategy, and performance
              marketing solutions to enhance competitive positioning.
            </p>
          </div>

          <div
            class="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-500"
          >
            <h3 class="text-xl font-semibold mb-4 text-red-600">
              Financial Services
            </h3>
            <p class="text-gray-600 text-sm">
              Financial modeling, budgeting systems, investment feasibility
              analysis, and strategic capital structuring.
            </p>
          </div>

          <div
            class="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-500"
          >
            <h3 class="text-xl font-semibold mb-4 text-red-600">
              Information Technology
            </h3>
            <p class="text-gray-600 text-sm">
              Business system implementation, digital transformation, ERP
              advisory, and IT infrastructure consulting.
            </p>
          </div>

          <div
            class="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-500"
          >
            <h3 class="text-xl font-semibold mb-4 text-red-600">
              Operations & Legal
            </h3>
            <p class="text-gray-600 text-sm">
              Operational efficiency systems, compliance structuring, licensing
              support, and corporate governance advisory.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- OUR APPROACH -->
    <div class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Our Approach
        </h2>

        <div class="grid md:grid-cols-3 gap-10">
          <div>
            <div class="text-4xl font-bold text-red-500 mb-4">01</div>
            <h3 class="text-lg font-semibold mb-3">Analyze</h3>
            <p class="text-gray-600 text-sm">
              In-depth assessment of your current business structure and
              challenges.
            </p>
          </div>

          <div>
            <div class="text-4xl font-bold text-red-500 mb-4">02</div>
            <h3 class="text-lg font-semibold mb-3">Strategize</h3>
            <p class="text-gray-600 text-sm">
              Develop structured and measurable strategies aligned with your
              objectives.
            </p>
          </div>

          <div>
            <div class="text-4xl font-bold text-red-500 mb-4">03</div>
            <h3 class="text-lg font-semibold mb-3">Implement</h3>
            <p class="text-gray-600 text-sm">
              Execute solutions with performance monitoring and sustainable
              evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">
        Let’s Elevate Your Business Together
      </h2>

      <router-link
        to="/contact"
        class="px-8 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
      >
        Contact Our Team
      </router-link>
    </div>
  </section>
</template>
