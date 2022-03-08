class BreweryWithBeerSerializer < ActiveModel::Serializer
  attributes :id,
             :brewery_name,
             :brewery_website,
             :brewery_logo,
             :brewery_address,
             :is_favorite,
             :brewery_phone_number,
             :flagship_beers
  has_many :beers
end
