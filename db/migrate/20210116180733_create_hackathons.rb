class CreateHackathons < ActiveRecord::Migration[6.0]
  def change
    create_table :hackathons do |t|
      t.string :name
      t.boolean :active
      t.float :date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
