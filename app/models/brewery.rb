class Brewery < ApplicationRecord
  has_many :brewery_users
  has_many :beers
  has_many :users, through: :brewery_users
end
