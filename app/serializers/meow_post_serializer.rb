class MeowPostSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :like, :created_at
  has_one :user
end
