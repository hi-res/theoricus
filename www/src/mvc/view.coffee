#<< theoricus/mvc/model

class theoricus.mvc.View
  Factory = null

  # $ reference to dom element
  el: null

  # @property [String] class path
  classpath : null
  # @property [String] class name
  classname : null
  # @property [String] namespace
  namespace : null
  # @property [theoricus.core.Process] process
  process   : null

  ###
  @param [theoricus.Theoricus] @the   Shortcut for app's instance
  ###
  _boot:( @the )->
    Factory = @the.factory
    @

  ###
  @param [Object] @data   Data to be passed to the template
  @param [Object] @el     Element where the view will be "attached/appended"
  ###
  render:( @data = {}, el = @process.route.el, template = null )=>
    @before_render?(@data)

    if not @el
      api = @process.route.api

      @el = $ el

      if template == null

        #tmpl_folder = @namespace.singularize()

        # Replace points with slashes
        tmpl_folder = @namespace.replace(/\./g, '/')
        # Undescorize the class name
        tmpl_name   = @classname.underscore()

        template = Factory.template "#{tmpl_folder}/#{tmpl_name}"


      @_render_template template, @data

    @set_triggers?()

    @after_render?(@data)

    ###
    In case you define an "on_resize" handler it will be automatically 
    binded and triggered
    ###
    if @on_resize?
      $( window ).unbind 'resize', @on_resize
      $( window ).bind   'resize', @on_resize
      @on_resize()

  _render_template: ( template, @data ) =>
      dom = template(@data) if template?
      dom = @el.append dom  if dom?

  ###
  In case you defined @events in your view they will be automatically binded
  ###
  set_triggers: () =>
    return if not @events?

    for sel, funk of @events
      [all, sel, ev] = sel.match /(.*)[\s|\t]+([\S]+)$/m

      ( @el.find sel ).unbind ev, null, @[funk]
      ( @el.find sel ).bind   ev, null, @[funk]

  ###
  Destroy the view after the 'out' animation, the default behavior is to just
  empty it's container element.

  before_destroy will be called just before emptying it.
  ###
  destroy: () ->
    if @on_resize?
      $( window ).unbind 'resize', @on_resize

    @before_destroy?()
    @el.empty()

  ###
  Should execute view transition in.

  In case you transition isn't syncoronous ( i.e. has animation )
  you should execute the method "shout" given as argument.

  It will it will return a callback which will notify the current process
  your view just got rendered ( i.e. animation finished )

  @param [Function] shout Return a framework "continue signal"

  NOTE: If you execute shout, and then cancel your transition, the framework
  will never now your view finished the transition in
  ###
  in:( shout )->
    @before_in?()

    enabled_transitions  =  @the.config.enable_auto_transitions
    enabled_transitions &= !@the.config.disable_transitions

    return unless enabled_transitions

    @el.css "opacity", 0
    @el.animate {opacity: 1}, 600, shout?( 'view ')

  ###
  Should execute view transition out.

  In case you transition isn't syncoronous ( i.e. has animation )
  you should execute the method "shout" given as argument.

  It will it will return a callback which will notify the current process
  your view just got rendered ( i.e. animation finished )

  @param [Function] shout Return a framework "continue signal"

  NOTE: If you execute shout, and then cancel your transition, the framework
  will never now your view finished the transition in
  ###
  out:( shout )->
    @before_out?()

    enabled_transitions  =  @the.config.enable_auto_transitions
    enabled_transitions &= !@the.config.disable_transitions

    return unless enabled_transitions

    @el.animate {opacity: 0}, 300, shout?( 'view' )

  # ~> Shortcuts

  ###
  Shortcut for application navigate

  @param [String] url URL to navigate
  ###
  navigate:( url, trigger = true, replace = false )->
    @the.processes.router.navigate url, trigger, replace

  ###
  Shortcut for Factory.view method

  @param [String] path    Path to view file
  ###
  view:( path )->
    Factory.view path, @process

  ###
  Shortcut for Factory.template method

  @param [String] url Path to template file
  ###
  template:( path )->
    Factory.template path

  ###
  instantiates a view, render on container passing current data
  ###
  require: ( view, container, data = @data, template ) ->
    view = @view view

    if container

      # if user passes a selector instead of a object
      if container instanceof String
        container = @el.find container

      # if user passes an object ref, jQuerify it 
      unless container instanceof jQuery
        container = $ container

      view.render data, @el.find container, template

    view

  find: ( selector ) => @el.find selector

  ###
  Takes a selector or array of selectors
  Adds click event handler to each of them
  ###
  link: ( a_selector ) ->

    $( a_selector ).each ( index, selector ) =>
      @find( selector ).click ( event ) =>

        @navigate $( event.delegateTarget ).attr( 'href' )

        return off