<template>
<div class="max-w-7xl mx-auto">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                    <th scope="col" class="p-4">
                        <!-- <div class="flex items-center">
                            <input @change="selectedEvents.logEvents" id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                            <label for="checkbox-all" class="sr-only">checkbox</label>
                        </div> -->
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Id
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Name
                    </th>
                    <!-- <th scope="col" class="py-3 px-6">
                        Description
                    </th> -->
                    <th scope="col" class="py-3 px-6">
                        Type
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Priority
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Related events
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="event in eventList.events" :key="event.id" class="bg-white border-b hover:bg-gray-50">
                    <td class="p-4 w-4">
                        <div class="flex items-center">
                            <input :id="event.id" :value="event" v-model="selectedEvents.events" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" class="py-3.5 px-6 font-medium text-gray-900 whitespace-nowrap">
                        {{ event.id }}
                    </th>
                    <td class="py-3.5 px-6">
                        {{ event.name }}
                    </td>
                    <!-- <td class="py-4 px-6">
                        {{ event.description }}
                    </td> -->
                    <td class="py-3.5 px-6">
                        {{ event.type }}
                    </td>
                    <td class="py-3.5 px-6">
                        {{ event.priority }}
                    </td>
                    <td class="py-3.5 px-6">
                        <kbd v-for="relatedEvent in event.relatedEvents" :key="relatedEvent" class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                            {{ relatedEvent }}
                        </kbd>
                    </td>
                    <td class="py-3.5 px-6">
                        <div class="inline-flex space-x-2">
                            <ViewEvent :event="event">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                <span class="sr-only">View event</span>
                            </ViewEvent>
                            <EventForm :event="event">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                <span class="sr-only">Edit event</span>
                            </EventForm>
                            <ConfirmDelete :event="event">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                <span class="sr-only">Remove event</span>
                            </ConfirmDelete>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="flex flex-wrap justify-center max-w-7xl mx-auto mb-3 space-x-2">
            <button @click="previousPage" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center" type="button">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous page</span>
            </button>
            <button v-if="eventList.getListLength() == 10" @click="nextPage" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center" type="button">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="sr-only">Next page</span>
            </button>
        </div>
    </div>
</div>
</template>

<script setup>
import { onBeforeMount, defineAsyncComponent } from 'vue'
import { selectedEvents } from '../states/selectedEvents.js'
import { eventList } from '../states/eventList.js'
import db from "../db"
const EventForm = defineAsyncComponent(() => import('./EventForm.vue'))
const ViewEvent = defineAsyncComponent(() => import('./ViewEvent.vue'))
const ConfirmDelete = defineAsyncComponent(() => import('./ConfirmDelete.vue'))

onBeforeMount(() => {
    db.collection("events")
        .orderBy("name")
        .limit(10)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = {
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    type: doc.data().type,
                    priority: doc.data().priority,
                    relatedEvents: doc.data().relatedEvents
                };
                eventList.addEvent(data)
            });
        });
})

const nextPage = function() {
    db.collection("events")
        .orderBy("name")
        .startAt(eventList.getLastEvent().name)
        .limit(10)
        .get()
        .then((querySnapshot) => {
            eventList.addPreviousStart(eventList.getFirstEvent())
            eventList.clearEventList()
            querySnapshot.forEach((doc) => {
                const data = {
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    type: doc.data().type,
                    priority: doc.data().priority,
                    relatedEvents: doc.data().relatedEvents
                };
                eventList.addEvent(data)
            });
        });
}

const previousPage = function() {
    db.collection("events")
        .orderBy("name")
        .startAt(eventList.getPreviousStart().name)
        .limit(10)
        .get()
        .then((querySnapshot) => {
            eventList.removeLastStart()
            eventList.clearEventList()
            querySnapshot.forEach((doc) => {
                const data = {
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    type: doc.data().type,
                    priority: doc.data().priority,
                    relatedEvents: doc.data().relatedEvents
                };
                eventList.addEvent(data)
            });
        });
}

</script>