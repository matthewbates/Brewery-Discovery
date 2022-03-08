class CreateBreweries < ActiveRecord::Migration[6.1]
  def change
    create_table :breweries do |t|
      t.string :brewery_name
      t.string :brewery_logo
      t.string :beer_types
      t.integer :flagship_beers
      t.string :brewery_website
      t.string :brewery_address
      t.boolean :is_favorite
      t.string :brewery_phone_number
      t.string :brewery_state
      t.string :brewery_image

      t.timestamps
    end
  end
end
