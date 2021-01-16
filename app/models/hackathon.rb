class Hackathon < ApplicationRecord
  belongs_to :user
  has_many :teams, dependent: :destroy
  has_many :objectives, dependent: :destroy
end
