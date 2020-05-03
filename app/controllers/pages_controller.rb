class PagesController < ApplicationController
  def home
    if user_signed_in?
      @logs = current_user.timer_logs.all #.where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day)
      p @logs
    end
  end
end
