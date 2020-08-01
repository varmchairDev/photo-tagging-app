class AddTagNameToPhotoTags < ActiveRecord::Migration[5.2]
  def change
    add_column :photo_tags, :tag_name, :string
    remove_column :photo_tags, :photo_tag
  end
end
