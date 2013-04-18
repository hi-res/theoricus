#<< theoricus/utils/string_util

###
Responsible for "running" a [theoricus.core.Route] Route

 @author {https://github.com/arboleya arboleya}
###
class theoricus.core.Process

  # utils
  {StringUtil} = theoricus.utils

  # @property [theoricus.mvc.Controller] controller
  controller: null

  # @property [theoricus.core.Route] route
  route: null

  ###
  Instantiate controller responsible for the route
  
  @param [theoricus.Theoricus] @the   Shortcut for current app's instace
  @route [theoricus.core.Route] @route Route responsible for the process
  ###
  constructor:( @the, @route )->
    # instantiates controller
    @controller = @the.factory.controller @route.api.controller_name

  ###
  Executes controller's action, in case it isn't declared executes an 
  standard one.
  
  @return [theoricus.mvc.View] view
  ###
  run:( after_run )->

    # if action is not defined, defines the default action behaviour for it
    unless @controller[ action = @route.api.action_name ]

      ###
      Build a default action ( renders the view passing all model records as data)
      in case the controller doesn't have an action for current process call
      ###
      @controller[ action ] = =>
        api = @route.api

        model_name = api.controller_name.singularize().camelize()
        model      = app.models[model_name]

        view_folder = api.controller_name.singularize()
        view_name   = api.action_name

        if model.all?
          @controller.render "#{view_folder}/#{view_name}", model.all()
        else
          @controller.render "#{view_folder}/#{view_name}", null

    # inject the current process into controller
    @controller.process = @

    # creates callback to reset things
    @after_run = =>
      @controller.process = null
      after_run()

    # executes the action and catches the resulting view
    @view = @controller[ action ].apply @controller, @route.api.params

    # validate if controller method returned a view instance
    # this is specially for "rendering processes"
    unless @view instanceof theoricus.mvc.View
      controller_name = @route.api.controller_name.camelize()
      msg = "Check your `#{controller_name}` controller, the action "
      msg += "`#{action}` must return a View instance."
      console.error msg

  ###
  Executes view's transition "out" method, wait for its end
  empty the dom element and then call a callback
  
  @return [theoricus.mvc.View] view
  ###
  destroy:( @after_destroy )->
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

    shout()( 'automaticaly' ) if view_didnt_shout