class CatpanionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :initiator
  has_one :receiver
end
