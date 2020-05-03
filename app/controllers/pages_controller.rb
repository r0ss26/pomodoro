class PagesController < ApplicationController
  def home
    @logs = current_user.timer_logs.order(:created_at)
    @ordered_logs = {}
    for log in @logs
      if @ordered_logs.has_key?(log.created_at)
        @ordered_logs[log.created_at].push(log)
      else
        @ordered_logs[log.created_at] = [log]
      end
    end
    p "ORDERED LOGS: #{@ordered_logs}"
  end
end
