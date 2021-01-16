class CreateObjectives < ActiveRecord::Migration[6.0]
  def change
    create_table :objectives do |t|
      t.string :name
      t.integer :points
      t.boolean :bonus
      t.belongs_to :hackathon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
