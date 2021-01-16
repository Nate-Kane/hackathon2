class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :total_points
      t.string :course
      t.belongs_to :hackathon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
