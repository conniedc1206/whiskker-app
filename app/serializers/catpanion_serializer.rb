class CatpanionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :friend_id
  
  # has_one :requestor
  # has_one :requestee
end
