class AddStaffLevelToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :staff_level, :string
  end
end
