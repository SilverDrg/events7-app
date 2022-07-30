import { reactive } from 'vue';

export const eventList = reactive({
    events: [],
    addEvent(event) {
        this.events.push(event);
    },
    updateEvent(updatedEvent) {
        this.events.find(event => {
            if(event.id == updatedEvent.id) {
                event.name = updatedEvent.name
                event.description = updatedEvent.description
                event.type = updatedEvent.type
                event.priority = updatedEvent.priority
                event.relatedEvents = updatedEvent.relatedEvents
                }
        })
    },
    deleteEvent(event) {
        this.events.splice(this.events.indexOf(event), 1)
    }
});