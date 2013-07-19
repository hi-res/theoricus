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

        @before_load_data?()

        data.onload = ( records ) =>

          @after_load_data?()

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