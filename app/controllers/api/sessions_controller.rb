class Api::SessionsController < ApplicationController
  def create
    #TODO validate on username or email. do two finds and use the one that works
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["invalid credentials"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["Not logged in"]
    end
  end
end
