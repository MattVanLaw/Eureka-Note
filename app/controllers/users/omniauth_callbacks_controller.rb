class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google_oauth2
      # You need to implement the method below in your model (e.g. app/models/user.rb)
      @user = User.from_omniauth(request.env['omniauth.auth']);
      
      if @user && @user.persisted?
        # flash[:notice] = I18n.t 'devise.omniauth_callbacks.success', kind: 'Google'
        login(@user)
        sign_in_and_redirect @user, event: :authentication
        # render 'api/users/show'
      else
        email = request.env['omniauth.auth']['extra']['id_info']['email']
        session['devise.google_data'] = request.env['omniauth.auth'].except(:extra) # Removing extra as it can overflow some session stores
        # redirect_to new_user_registration_url, alert: @user.errors.full_messages.join("\n")
        redirect_to(root_path, notice: 'Incorrect login!')
      end
  end
end