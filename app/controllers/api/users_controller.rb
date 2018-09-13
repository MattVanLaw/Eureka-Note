class Api::UsersController < ApplicationController
  def create
    user_hash = {
      email: user_params[:username_or_email],
      password: user_params[:password]
    }
    @user = User.new(user_hash)
    @user.username = user_params[:username_or_email].split("@").first
    #TODO check that username is unique, or iterate or something
    default_notebook = Notebook.new({
      title: '<Inbox>',
      author_id: @user.id
    })
    if @user.save
      login(@user)
      @user.notebooks << default_notebook #BUG maybe
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
