Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # devise_scope :user do
  #   get 'sign_in', :to => 'devise/sessions#new', :as => :new_user_session
  #   get 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  #   post '/login' => 'devise/sessions#create', as: :user_session
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:new, :create]
    resources :notebooks
    resource :session, only: [:new, :create, :destroy]
    resources :notes
    resources :tags
    resources :taggings, only: [:create, :destroy]

    post 'tags/add_tagging', to: 'tags#add_tagging'
    delete '/remove_tagging', to: 'tags#remove_tagging'
  end
end
