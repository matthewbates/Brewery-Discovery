class BeersController < ApplicationController
  skip_before_action :authorized, only: %i[index show]

  def index
    render json: Beer.all
  end

  def show
    beer = find_beer
    render json: beer, serializer: BeerWithBrewerySerializer, status: :ok
  end

  private

  def find_beer
    Beer.find(params[:id])
  end
end
