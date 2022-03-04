class BeerWithBrewerySerializer < ActiveModel::Serializer
  attributes :id, :beer_name, :beer_abv, :beer_type

  belongs_to :brewery
end
