class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.string :image
      t.string :gender
      t.integer :fluffiness
      t.timestamps
    end
  end
end
