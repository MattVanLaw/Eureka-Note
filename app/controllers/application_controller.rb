class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user
  
  def new_session_path(scope)
    user_google_oauth2_omniauth_authorize_path
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end
end
