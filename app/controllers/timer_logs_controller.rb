class TimerLogsController < ApplicationController 
  skip_before_action :verify_authenticity_token

  def create
    if user_signed_in?
      puts params
      timer_log_params = params.permit(:timer_type, :duration)
      current_user.timer_logs.create(timer_log_params)
    end
  end
end