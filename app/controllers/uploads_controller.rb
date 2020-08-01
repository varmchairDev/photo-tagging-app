class UploadsController < ApplicationController

    def new
    end

    def create
        @photo = Photo.new(title: params[:photo_form][:title], 
                           picture: params[:photo_form][:picture])

        tags = params[:tags_in_photo]
        photo_tags = params[:photo_form][:tag_names]
        if photo_tags
            photo_tags = photo_tags.split(", ")
            photo_tags.each do |tag|
                @photo.photo_tags.build(tag_name: tag)
            end
        end

        if @photo.save
            redirect_to @photo 
        else
            flash[:error] = @photo.errors.full_messages
        end
    end

end
