Rails.application.routes.draw do

  resources :restaurants do
    resources :noms
  end

    resources :noms, only: [] do
      resources :photos
    end

  resources :events

  root 'site#index'
  get '/album' => 'site#album'
  get '/places' => 'site#places'

end
