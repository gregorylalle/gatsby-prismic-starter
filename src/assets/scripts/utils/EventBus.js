/**
 * Very simple event bus.
 */
class EventBus {

    static events = {};

    /**
     * Subscribe to provided event and execute callback each time event is triggered.
     * 
     * @param { String } event - event you want to subscribe to.  
     * @param { Function } callback - callback executed when event is called.
     */
    static subscribe(event, callback) {
        if (typeof event !== 'string')
            throw new Error(`Provided event is not a valid string.`);
        if (typeof callback !== 'function')
            throw new Error(`Provided callback is not a valid function.`);
        
        // Unique id
        const id = Symbol();

        if(!this.events[event])
            this.events[event] = {};

        this.events[event][id] = callback;

        return {
            /**
             * Unsubscribe from event. 
             * Accessible only if you subscribed to this event.
             */
            unsubscribe: () => {
                if (this.events[event].length <= 1)
                    delete this.events[event]
                else
                    delete this.events[event][id];
            }
        }
    }
    
    /**
     * Dispatch event to all subscribers and create event if it is not already created.
     * 
     * @param { String } event - event you want to dispatch. 
     * @param { JSON } data - data passed as callback to all subsribers.
     */
    static dispatch(event, data) {
        if (typeof event !== 'string')
            throw new Error(`Provided event is not a valid event.`);
        if (!this.events[event])
            this.events[event] = {};

        for (let id of Object.getOwnPropertySymbols(this.events[event])) {
            this.events[event][id](data);
        }
	}
	
	/**
	 * Return list of all registered events
	 */
	static getEvents() {
		return this.events;
	}
}

export default EventBus