<template>
<div class="max-w-7xl mx-auto">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                            <label for="checkbox-all" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Id
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Description
                    </th>
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
                <tr v-for="event in eventList" :key="event.id" class="bg-white border-b hover:bg-gray-50">
                    <td class="p-4 w-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                        {{ event.id }}
                    </th>
                    <td class="py-4 px-6">
                        {{ event.name }}
                    </td>
                    <td class="py-4 px-6">
                        {{ event.description }}
                    </td>
                    <td class="py-4 px-6">
                        {{ event.type }}
                    </td>
                    <td class="py-4 px-6">
                        {{ event.priority }}
                    </td>
                    <td class="py-4 px-6">
                        <kbd v-for="relatedEvent in event.relatedEvents" :key="relatedEvent" class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                            {{ relatedEvent }}
                        </kbd>
                    </td>
                    <td class="py-4 px-6">
                        <div class="inline-flex space-x-2">
                            <button class="inline-flex items-center justify-center py-2.5 px-2.5 text-xs font-medium text-center text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                <span class="sr-only">Edit event</span>
                            </button>
                            <button class="inline-flex items-center justify-center py-2.5 px-2.5 text-xs font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                <span class="sr-only">Edit event</span>
                            </button>
                            <button class="inline-flex items-center justify-center py-2.5 px-2.5 text-xs font-medium text-center text-white bg-red-700 rounded-full hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                <span class="sr-only">Remove event</span>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script scoped>
import db from "../db"

export default {
    data() {
        return {
            eventList: [],
        }
    },

    created: async function() {
        db.collection("events")
        .orderBy("id")
        .get()
        .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                const data = {
                    id: doc.data().id,
                    name: doc.data().name,
                    description: doc.data().description,
                    type: doc.data().type,
                    priority: doc.data().priority,
                    relatedEvents: doc.data().relatedEvents
                };
                this.eventList.push(data);
            });
        });
    }
};
</script>