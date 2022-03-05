class User < ApplicationRecord
  has_many :brewery_users
  has_many :beer_likes
  has_many :breweries, through: :brewery_users
  has_many :beers, through: :beer_likes
end
