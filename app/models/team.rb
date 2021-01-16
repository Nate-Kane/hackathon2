class Team < ApplicationRecord
  belongs_to :hackathon
  has_many :members, dependent: :destroy
end
