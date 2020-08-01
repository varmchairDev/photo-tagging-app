class CreatePhotoTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_taggings do |t|
      t.references :photo, foreign_key: true
      t.references :photo_tag, foreign_key: true

      t.timestamps
    end
  end
end
