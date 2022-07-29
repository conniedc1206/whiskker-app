class MeowMailSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id
  has_one :catpanion
  has_one :user
end
