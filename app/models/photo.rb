class Photo < ApplicationRecord
   
    has_many :tags
    has_many :photo_tags, through: :photo_tagging
    mount_uploader :picture, PhotoUploader
    
    validate :size_limit

    private

    def size_limit
        if picture.size > 10.megabytes
            errors.add(:picture, "Picture size exceed the limit: 10 megabytes.")
        end
    end

end
