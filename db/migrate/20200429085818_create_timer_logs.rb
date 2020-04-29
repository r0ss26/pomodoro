class CreateTimerLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :timer_logs do |t|
      t.references :user, foreign_key: true
      t.string :timer_type
      t.integer :duration

      t.timestamps
    end
  end
end
