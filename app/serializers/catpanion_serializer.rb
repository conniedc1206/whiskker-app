class CatpanionSerializer < ActiveModel::Serializer
  attributes :id, :receiver_id, :receiver, :initiator_id, :initiator
  has_one :initiator
  has_one :receiver
end
