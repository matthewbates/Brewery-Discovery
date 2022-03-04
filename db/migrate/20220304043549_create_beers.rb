class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :beer_name
      t.float :beer_abv
      t.float :beer_ibu
      t.integer :beer_rating
      t.string :beer_description
      t.boolean :is_year_round_beer

      t.timestamps
    end
  end
end
