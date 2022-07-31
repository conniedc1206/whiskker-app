class MeowMailSerializer < ActiveModel::Serializer

  # Included :created_at so the users can see when there message was sent

  attributes :id, :message, :created_at, :catpanion_id, :user_id
  has_one :user
  has_one :catpanion

end
