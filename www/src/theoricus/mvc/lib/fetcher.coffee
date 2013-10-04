#
#	Testing asset loading on feetcher, using create.js
#

module.exports = class Fetcher
  loaded: null

  onload: null
  onerror: null

  data: null


  constructor: ->
  	@queue = new createjs.LoadQueue false

  	@queue.addEventListener "complete", @_on_queue_complete

  load: ( @records ) ->

    for model in @records
      model.load?( @ )

    @queue.load()

  img: ( path ) ->
  	@queue.loadFile path, false


  _on_queue_complete: =>

  	@onload?( @records )