class Api::UsersController < ApplicationController
  def create
    user_hash = {
      email: user_params[:username_or_email],
      password: user_params[:password]
    }
    @user = User.new(user_hash)
    @user.username = user_params[:username_or_email].split("@").first
    #TODO check that username is unique, or iterate or something
    if @user.save
      #FYI notebook titles can be duplicated willy nilly
      Notebook.create(title: '<Inbox>', author_id: @user.id)
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username_or_email, :password)
  end
end
