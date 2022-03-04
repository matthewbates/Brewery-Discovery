class BeerSerializer < ActiveModel::Serializer
  attributes :id, :beer_name, :beer_abv, :beer_ibu, :beer_rating, :beer_description, :is_year_round_beer
end
