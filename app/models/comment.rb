class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :meow_post
end
