Rails.application.routes.draw do
  
  get '/photos/:id', to: "photos#show"
  get '/upload', to: "uploads#new"
  post '/upload', to: "uploads#create"
  
end
