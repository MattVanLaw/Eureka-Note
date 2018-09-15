class Api::NotebooksController < ApplicationController
  def index
    @notebooks = Notebook.where(author_id: current_user.id)
  end

  def show
    @notebook = Notebook.find(params[:id])
    unless @notebook
      render json: 'Notebook not found', status: 404
    end
  end

  def create
    notebook = current_user.notebooks.new(notebook_params) #BUG not sure
    unless notebook.save
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def edit
    @notebook = Notebook.find(params[:id])
  end

  def update
    Notebook.find(params[:id]).update(notebook_params)
  end

  def destroy
    notebook = Notebook.find(params[:id])
    notebook.destroy
  end

  private
  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
