class CreateBreweryUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :brewery_users do |t|
      t.references :brewery
      t.references :user

      t.timestamps
    end
  end
end
