class CreateBreweries < ActiveRecord::Migration[6.1]
  def change
    create_table :breweries do |t|
      t.string :brewery_name
      t.string :brewery_logo
      t.string :beer_types
      t.integer :flagship_beers
      t.string :brewery_website
      t.references :beer

      t.timestamps
    end
  end
end
