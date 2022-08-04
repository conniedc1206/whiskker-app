class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :username, :purrfile_picture, :bio, :full_name, :meow_posts, :friends
  
  # :sent_messages, :received_messages, :created_at
end
