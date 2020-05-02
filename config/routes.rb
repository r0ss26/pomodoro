Rails.application.routes.draw do
  devise_for :users
  get '/', to: "pages#home", as: "root"
  post '/', to: "timer_logs#create", as: "create_log"
end
