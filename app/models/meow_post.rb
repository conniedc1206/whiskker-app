class MeowPost < ApplicationRecord
  belongs_to :user

  has_many :comments
  has_many :commented_users, through: :comments, source: :user

  validates :description, presence: true, length: { maximum: 250 }
  validates :image, presence: true
end
