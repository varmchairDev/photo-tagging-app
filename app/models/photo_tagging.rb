class PhotoTagging < ApplicationRecord

  belongs_to :photo
  belongs_to :photo_tag
  
end
