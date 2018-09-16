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
    notebook = Notebook.new(notebook_params)
    notebook.author_id = current_user.id
    if notebook.save!
      render :index
    end
    #render errors?
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
