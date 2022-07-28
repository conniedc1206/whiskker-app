class MeowMailSerializer < ActiveModel::Serializer
  attributes :id, :message
  has_one :catpanion
end
