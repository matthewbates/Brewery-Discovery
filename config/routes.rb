Rails.application.routes.draw do
  resources :users
  resources :brewery_users
  resources :beers, only: %i[index show]
  resources :breweries, only: %i[index show]
  # log in 
  post '/login', to: 'sessions#create'
  # log out 
  delete '/logout', to: 'sessions#destroy'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
