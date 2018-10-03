class Api::NotebooksController < ApplicationController
  def index
    @notebooks = Notebook.order('updated_at DESC').where(author_id: current_user.id).includes(:notes)
  end

  def show
    @notebook = Notebook.find(params[:id])
    unless @notebook
      render json: 'Notebook not found', status: 404
    end
  end

  def create
    @notebook = Notebook.create(notebook_params)
    @notebook.author_id = current_user.id
    if @notebook.save!
      render :show
    end
    #render errors?
  end

  def edit
    @notebook = Notebook.find(params[:id])
  end

  def update
    @notebook = Notebook.find(params[:id])
    if @notebook.update(notebook_params)
      render :show
    end
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
