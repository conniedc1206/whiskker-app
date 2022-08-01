class MeowMailSerializer < ActiveModel::Serializer

  # Included :created_at so the users can see when there message was sent

  attributes :id, :message, :created_at, :sender_id, :sender, :recipient_id, :recipient
  # has_one :user

end
