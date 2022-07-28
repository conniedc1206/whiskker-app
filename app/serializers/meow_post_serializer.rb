class MeowPostSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :like
  has_one :user
end
