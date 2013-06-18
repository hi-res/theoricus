#<< theoricus/mvc/model
#<< theoricus/mvc/view

class theoricus.mvc.Controller

  {Fetcher} = theoricus.mvc.lib
  {Model,View} = theoricus.mvc

  ###
  @param [theoricus.Theoricus] @the   Shortcut for app's instance
  ###
  _boot: ( @the ) -> @


  ###
  Renders view

  @param [String] path  path to view on the app tree
  @param [String] data  data to be rendered on the template
  @param [Object] element element where it will be rendered, defaults to @process.route.el
  ###
  render: ( path, data, el = @process.route.el, view ) ->

    # TODO: refactor this into "render" method @ process
    # 
    view = view || @the.factory.view path, @process

    if data instanceof Fetcher
      if data.loaded
        view.render data.records, el
      else
        data.onload = ( records ) =>
          @render path, records, el, view
    else
      view.render data, el

      # If user don't call the callback, callback will be executed automatically
      # http://jsfiddle.net/hems/bs4gz/1/
      
      view_didnt_shout = true

      shout = ( type ) ->
        if view_didnt_shout is false
          console.warn 'You can only request one shout.'
          return 

        view_didnt_shout = false

        return view.process.after_run

      view.in( shout )

      if view_didnt_shout then shout()( 'automaticaly' )

    view

  ###
  You should call this in order to ignore the render logic of the
  application, as in, manage the rendering / transitions yourself
  ###
  rendered: ->

    # mark as no render, so the process won't check for a view
    # after executing the controller method
    @process.no_render = true

    # executes the "after_run" so Processes will mark this process
    # as rendered. it could be called later, in case you want your
    # process to be pending during some time consuming operation
    @process.after_run()

  destroy: ( after_destroy ) ->

    # executes the "after_destroy" so Processes will mark this process
    # as done. it could be called later, in case you want your
    # process to be pending during some time consuming operation
    if @process.no_render
      after_destroy()
      return


    # call the OUT transition with the given callback
    unless (@view instanceof theoricus.mvc.View)
      controller_name = @route.api.controller_name.camelize()
      action_name = @route.api.action_name
      msg = "Can't destroy View because it isn't a proper View instance. "
      msg += "Check your `#{controller_name}` controller, the action "
      msg += "`#{action_name}` must return a View instance."
      console.error msg
      return

    # this is a "Shout pattern experiment", check the insight here
    # http://jsfiddle.net/hems/bs4gz/

    view_didnt_shout = true

    shout = ( type ) =>
      if view_didnt_shout is false
        console.warn 'You can only request one shout.'
        return 

      view_didnt_shout = false

      return =>
        @view.destroy()
        @after_destroy?()

    @view.out( shout )

    if view_didnt_shout then shout()( 'automaticaly' )