<script setup>
import { defineAsyncComponent } from 'vue'
import { selectedEvents } from '../states/selectedEvents.js'
const TableList = defineAsyncComponent(() => import('@/components/TableList.vue'))
const EventForm = defineAsyncComponent(() => import('@/components/EventForm.vue'))
const ConfirmDelete = defineAsyncComponent(() => import('@/components/ConfirmDelete.vue'))
</script>

<template>
  <div class="bg-gray-50">
    <div class="flex flex-wrap flex-row-reverse max-w-7xl mx-auto mb-3 space-x-2">
      <EventForm>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        <span class="sr-only">Add event</span>
      </EventForm>
      <ConfirmDelete v-if="!selectedEvents.isEmpty()">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        <span class="sr-only">Remove event</span>
      </ConfirmDelete>
    </div>
    <TableList />
  </div>
</template>

<style>
  @import '../../node_modules/@vueform/multiselect/themes/tailwind.css';
</style>