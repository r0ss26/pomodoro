class ApplicationController < ActionController::Base
  layout :layout_by_resource

  # @initials = current_user.

  private

  def layout_by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end
end
