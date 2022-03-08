class BreweriesController < ApplicationController
  skip_before_action :authorized, only: %i[index show]
  
  def index
    render json: Brewery.all, status: :ok
  end

  def show
    brewery = find_brewery
    render json: brewery, serializer: BreweryWithBeerSerializer,  status: :ok
  end

  private

  def find_brewery
    Brewery.find(params[:id])
  end
end
