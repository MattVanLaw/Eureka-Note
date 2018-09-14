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
    note = current_user.notes.new(note_params)
    note[:title] = 'Untitled' unless note[:title]

    unless note.save
      render json: @note.errors.full_messages, status: 422
    end
  end

  def edit
    @note = Note.find(params[:id])
  end

  def update
    Note.find(params[:id]).update(note_params)
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
