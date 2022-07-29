class Catpanion < ApplicationRecord
  belongs_to :initiator, class_name: 'User'
  belongs_to :receiver, class_name: 'User'

  has_many :meow_mails
end
