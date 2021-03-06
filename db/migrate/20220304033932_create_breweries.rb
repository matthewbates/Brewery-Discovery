class CreateBreweries < ActiveRecord::Migration[6.1]
  def change
    create_table :breweries do |t|
      t.string :brewery_name
      t.string :brewery_logo
      t.string :beer_types
      t.string :brewery_website
      t.string :brewery_address
      t.string :brewery_phone_number
      t.string :brewery_state
      t.string :brewery_image
      t.string :brewery_lat
      t.string :brewery_lon

      t.timestamps
    end
  end
end
