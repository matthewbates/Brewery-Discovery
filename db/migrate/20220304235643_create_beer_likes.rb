class CreateBeerLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :beer_likes do |t|
      t.references :beer
      t.references :user

      t.timestamps
    end
  end
end
