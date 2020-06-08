<template>
  <main>
    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div
          class="p-4 text-center text-gray-600 border-4 border-gray-200 border-dashed rounded-lg h-96"
        >
          Here you should see my fancy button component.
          <br />
          <component :is="button" text="I AM A DYNAMIC BUTTON. ALL IS OK" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    button: {
      props: ["text"],
      template: `<span class="inline-flex rounded-md shadow-sm">
  <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
    <svg class="w-5 h-5 mr-3 -ml-1" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
    </svg>
    {{text}}
  </button>
</span>`
    }
  })
};
</script>