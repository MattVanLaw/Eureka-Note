class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    #TODO manually assign username based on email
    @user.username = user_params[:email].split("@").first
    #TODO check that username is unique, or iterate or something
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password) #remove username
  end
end
