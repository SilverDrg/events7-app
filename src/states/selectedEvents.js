import { reactive, defineAsyncComponent } from 'vue';
import { eventList } from './eventList.js'
import db from '../db'

export const selectedEvents = reactive({
    events: [],
    deleteEvents() {
        let batch = db.batch()
        this.events.forEach(event => {
            let docRef = db.collection("events").doc(event.id)
            batch.delete(docRef)
            eventList.deleteEvent(event)
        })
        batch.commit()
        this.events = []
    },
    isEmpty() {
        return this.events.length === 0
    },
    logEvents() {
        this.events.forEach(event => {
            console.log(event)
        })
    }
});
