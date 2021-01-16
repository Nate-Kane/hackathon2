class AddJudgestToHackathons < ActiveRecord::Migration[6.0]
  def change
    add_column :hackathons, :judges, :string
  end
end
