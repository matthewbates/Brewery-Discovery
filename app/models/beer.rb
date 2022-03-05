class Beer < ApplicationRecord
  belongs_to :brewery
  has_many :beer_likes
  has_many :users, through: :beer_likes
end
