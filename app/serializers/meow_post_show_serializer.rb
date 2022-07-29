class MeowPostShowSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :like, :created_at, :comments
  has_one :user
end
