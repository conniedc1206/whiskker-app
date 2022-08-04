class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :purrfile_picture, :bio, :full_name, :sent_messages, :received_messages, :friends, :meow_posts

  # created_at
end