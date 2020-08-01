class PhotoTag < ApplicationRecord

    has_many :photos, through: :photo_tagging
    
end
