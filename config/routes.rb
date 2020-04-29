Rails.application.routes.draw do
  get '/', to: "pages#home", as: "home"
end
