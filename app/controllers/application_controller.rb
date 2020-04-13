class ApplicationController < ActionController::Base
    before_action :authenticate_user!, unless: -> { request.env['PATH_INFO'] == '/' }
    protect_from_forgery unless: -> { request.format.json? }

    def after_sign_in_path_for(resource)
        '/discovery'
    end
end
