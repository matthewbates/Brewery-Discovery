class BrewerySerializer < ActiveModel::Serializer
  attributes :id,
             :brewery_name,
             :beer_names,
             :beers_on_tap,
             :hours_of_operation,
             :is_open,
             :boolean
end
