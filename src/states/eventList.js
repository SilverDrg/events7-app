import { reactive } from 'vue';

export const eventList = reactive({
    events: [],
    previousStart: [],
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
    },
    clearEventList() {
        this.events = []
    },
    getLastEvent() {
        return this.events[this.events.length - 1]
    },
    getFirstEvent() {
        return this.events[0]
    },
    getListLength() {
        return this.events.length
    },
    addPreviousStart(event) {
        this.previousStart.push(event)
    },
    getPreviousStart() {
        return this.previousStart[this.previousStart.length - 1]
    },
    removeLastStart() {
        this.previousStart.splice(this.previousStart.length - 1, 1);
    }
});