module.exports = class PivotItem

	event: null

	funk: null

	value: null

	constructor: ( parent ) ->
		@parent = parent

	# trigger listener function passing value as parameter
	trigger: ( value ) ->
		@set value

		@funk?( value )

		return @

	# set value 
	set: ( value ) ->
		@parent.set @event, value

		return @value = value

	# return last propagated value for this event
	get: ->
		return @value


	# unregister the listener from parent
	off: ->
		@parent.off( @event, @funk )

	# register the listener into parent
	on: ->
		@parent.on @event, @funk