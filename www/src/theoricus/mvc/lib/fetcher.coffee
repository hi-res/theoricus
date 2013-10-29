#
# Testing asset loading on feetcher, using create.js
#

module.exports = class Fetcher
  loaded: null

  onload: null
  onerror: null

  data: null


  constructor: ->
    @queue = new createjs.LoadQueue false

    @queue.addEventListener "complete", @_on_queue_complete

    @queue.addEventListener "fileload", @_on_file_loaded
    
    @queue.addEventListener "fileload", ( event ) =>
      # console.log 'fetcher preloaded:', event.item.src

      switch event.item.ext
        when 'jpg', 'png'
          item = $( event.item.tag )
          item.hide()
          $( 'body' ).append item

  _on_file_loaded: ( e ) =>

    
  load: ( @records = [] ) ->

    for model in @records
      model.load?( @ )

    @queue.load()

  img: ( path ) ->

    # console.log "adding #{path} to queue"

    @queue.loadFile path, false


  _on_queue_complete: =>

    if @process?
      controller = @process.route.controller_name
      action     = @process.route.action_name

      # console.warn "On Queue Complete #{controller}/#{action}"

    @onload?( @records )