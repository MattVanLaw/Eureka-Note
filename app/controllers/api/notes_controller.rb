class Api::NotesController < ApplicationController
  def index
    @notes = Note.where(author_id: current_user.id)
    @notebooks = current_user.notebooks
    @user = current_user
  end

  def show
    @note = Note.find(params[:id])
    render json: 'Note not found', status: 404 unless @note
  end

  def create
    @note = Note.new
    @note[:author_id] = current_user.id
    @note[:notebook_id] = params[:note][:id].to_i
    @note[:title] = 'Untitled'
    @note[:body] = ""
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def edit
    @note = Note.find(params[:id])
  end

  def update
    id = params[:note][:id].to_i
    @note = Note.find(id)
    @note.update(note_params)
    render :show
  end

  def destroy
    note = Note.find(params[:id])
    note.destroy
  end

  private
  def note_params
    params.require(:note).permit(:title, :body)
  end
end
