class BeerSerializer < ActiveModel::Serializer
  attributes :id, :beer_name, :beer_abv, :beer_type
end
