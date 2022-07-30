<template>
    <button @click="open = true" class="inline-flex items-center justify-center py-2.5 px-2.5 text-xs font-medium text-center text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300">
        <slot></slot>
    </button>

    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-end md:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95" enter-to="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 md:scale-100" leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
                <DialogPanel class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:my-8 md:max-w-xl sm:w-full">
                <div class="bg-white px-4 pt-5 pb-5 sm:p-6 sm:pb-8">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <button type="button" @click="open = false" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="small-modal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900"> Viewing event </DialogTitle>
                            <form @submit.prevent="AddEvent" class="space-y-6" action="#">
                                <div>
                                    <label for="id" class="block mb-2 text-sm font-medium text-gray-900 ">Event id</label>
                                    <input v-model="form.id" type="text" name="id" id="id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
                                </div>
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Event name</label>
                                    <input v-model="form.name" type="name" name="name" id="name" placeholder="eg. button-click" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                                </div>
                                <div>
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Event description</label>
                                    <textarea v-model="form.description" type="description" name="description" id="description" rows="3" placeholder="Describe when the event should be triggered" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled></textarea>
                                </div>
                                <div>
                                    <label for="type" class="block mb-2 text-sm font-medium text-gray-900 ">Event type</label>
                                    <input v-model="form.type" type="text" name="type" id="type" placeholder="eg. app" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                                </div>
                                <div>
                                    <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 ">Event priority</label>
                                    <input v-model="form.priority" type="number" name="priority" id="priority" placeholder="0-20" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                                </div>
                                <div>
                                    <label for="relatedEvents" class="block mb-2 text-sm font-medium text-gray-900 ">Related events</label>
                                    <kbd v-for="relatedEvent in form.relatedEvents" :key="relatedEvent" class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                                        {{ relatedEvent }}
                                    </kbd>
                                </div>
                            </form>
                    </div>
                </div>
                </DialogPanel>
            </TransitionChild>
            </div>
        </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(false)

const props = defineProps({
    event: {}
})

const form = {
    id: null,
    name: '',
    description: '',
    type: '',
    priority: null,
    relatedEvents: []
}

onMounted(() => {
    form.id = props.event.id
    form.name = props.event.name
    form.description = props.event.description
    form.type = props.event.type
    form.priority = props.event.priority
    form.relatedEvents = props.event.relatedEvents
})

</script>