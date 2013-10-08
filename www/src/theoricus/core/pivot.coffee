###

Pivot is a simple key~>value storage system melted with a simple event system.

You can set and get value using "set" and "get" methods.

You can listen and unlisten to events using "on" and "off" methods.

When setting a value it will automatically trigger all the listeners
to that key unless the value is equal to the one already stored.

In case you want to force a propagation, you should use method "trigger"
instead of "set". It will have the same effect but will trigger all
the listeners regardless of the value being the same already stored.


#
# Propagating events, storing and retrieving data
#


Pivot = require 'app/components/events/pivot'

pivot = new Pivot

listener = pivot.on 'name', ( name ) -> console.log name

pivot.set 'name', 'hems'      # will set name to hems and propagate
pivot.set 'name', 'david'     # will set name to david and propagate
pivot.set 'name', 'david'     # won't propgate since the value is the same as the value stored
pivot.trigger 'name', 'david' # trigger will propgate regardless of being the same value as stored
pivot.get 'name'              # returns last stored stored/propagated value for this event

console.log listener.value    # return last propagated value from this listener
listener.set 'hems'           # set value for key "name", therefore propagating this value again
listener.off()                # will unregister the event
listener.set 'david'          # the event wont receive the call
listener.on()                 # will register the event again
listener.set 'stefano'        # event will receive the call


#
# using binds
#

pivot.set 'name', 'hems'

set_name = ( name ) -> console.log "got name #{name}"

pivot.bind 'name', set_name # will trigger intantly and when this value change

pivot.set 'name', 'hems' # won't trigger cause its a repeated value

pivot.set 'name', 'david' # triggers!


#
# mixin prototype into your object
# ATT: This isn't working very well with real objects
#

Pivot = require 'app/components/events/pivot'
_     = require '../../vendors/lodash'

obj = {}                        # any object
obj = _.extend new Pivot(), obj # copying Pivot prototype to object

obj.on 'name', ( name ) -> console.log "name is #{name}"
obj.set 'name', 'hems'

###
Item = require 'theoricus/core/pivot_item'

module.exports = class Pivot


	events: null

	constructor: ->
		@events = {}


	# assigns a function to the given event, returns a PivotItem ( listener )
	on: ( event, funk, bind = off ) ->
		@events[ event ] ?= { listeners: [], value: null }

		listener       = new Item @
		listener.event = event
		listener.funk  = funk

		@events[ event ].listeners.push listener

		if bind
			if @get( event ) != null
				listener.trigger @get( event )

		return listener


	# unregister a function to given event
	off: ( event, funk ) ->
		return if not @events[ event ]?

		for item, index in @events[ event ].listeners
			if item.funk == funk
				@events[ event ].listeners.splice( index, 1 )

				return on

		console.log "function wasnt bined to event #{event}"
		
		return off

	# same as "on" function, but will trigger the event instantly
	# in case the value is defined
	bind: ( event, funk, bind = on ) ->
		return @on event, funk, bind

	# if the value is different from previous set or triggered value 
	# trigger will be called in order to broadcast the new value
	set: ( event, value ) ->

		if @events[ event ]?
			return value if @events[ event ].value == value

		@trigger event, value

		return value
		

	# return last value propaget through this event name
	get: ( event, value ) ->
		return null if not @events[ event ]?

		return @events[ event ].value

	# trigger the event for all listeners
	trigger: ( event, value ) ->
		@events[ event ] ?= { listeners: [], value: null }

		@events[ event ].value = value

		for item, index in @events[ event ].listeners
			item.trigger value

		return value
