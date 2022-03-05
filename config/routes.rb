Rails.application.routes.draw do
  resources :users
  resources :brewery_users
  resources :beers, only: %i[index show]
  resources :breweries, only: %i[index show]
# login route
post "/login", to: "sessions#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
