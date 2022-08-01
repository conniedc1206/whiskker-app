class UserShowSerializer < ActiveModel::Serializer

  attributes :id, :username, :password_digest, :purrfile_picture, :bio, :full_name, :created_at, :meow_posts, :sent_messages, :received_messages

end
