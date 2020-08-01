class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name
      t.string :PosX1
      t.string :PosX2
      t.string :PosY1
      t.string :PosY2

      t.timestamps
    end
  end
end
