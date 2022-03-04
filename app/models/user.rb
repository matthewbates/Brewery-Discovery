class User < ApplicationRecord
  has_many :brewery_users
  has_many :breweries, through: :brewery_users
end
