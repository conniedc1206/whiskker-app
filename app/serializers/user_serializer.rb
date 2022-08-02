class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :purrfile_picture, :bio, :full_name, :created_at, :sent_messages, :received_messages, :friends, :meow_posts
end