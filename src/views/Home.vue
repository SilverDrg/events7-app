<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
import TableList from '@/components/TableList.vue'
import EventForm from '@/components/EventForm.vue'
</script>

<template>
  <div class="bg-gray-50">
    <div class="flex flex-wrap flex-row-reverse max-w-7xl mx-auto mb-3">
      <EventForm />
    </div>
    <TableList />
  </div>
</template>

<style>
  @import '../../node_modules/@vueform/multiselect/themes/tailwind.css';
</style>