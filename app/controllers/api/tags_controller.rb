class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all.includes(:notes)
    # .order('name ASC').group_by{ |d| d.name[0] }
  end

  def show
    @tag = Tag.find(params[:id])
    render json: "Tag not found", status: 404 unless @tag
  end

  def create
    @tag = Tag.where(name: tag_params[:name])[0]
    unless @tag
      @tag = Tag.new(tag_params)
      if @tag.save
        render :show
      else
        render json: @tag.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render :show
  end

  # def add_tagging
  #   @tagging = Tagging.new(tagging_params)
  #   if @tagging.save
  #     render json: {
  #       note_id: tagging_params[:note_id],
  #       tag_id: tagging_params[:tag_id]
  #     }
  #   end
  # end

  def remove_tagging
    @tagging = Tagging.find_by(note_id: tagging_params[:note_id], tag_id: tagging_params[:tag_id])
    if @tagging.destroy
      render json: {
        note_id: tagging_params[:note_id],
        tag_id: tagging_params[:tag_id]
      }
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  private
  def tag_params
    params.require(:tag)
          .permit(:name, taggings_attributes: [ :note_id ])
  end

  def tagging_params
    params.require(:tagging).permit(:tag_id, :note_id)
  end
end
