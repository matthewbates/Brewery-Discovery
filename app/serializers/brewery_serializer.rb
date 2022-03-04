class BrewerySerializer < ActiveModel::Serializer
  attributes :id,
             :brewery_name,
             :brewery_logo,
             :flagship_beers,
             :brewery_website,
             :brewery_address,
             :is_favorite,
             :brewery_phone_number
end
