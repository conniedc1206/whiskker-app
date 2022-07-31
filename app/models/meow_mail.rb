class MeowMail < ApplicationRecord
  belongs_to :recipient, class_name: "User"
  belongs_to :sender, class_name: "User"

  validates :message, presence: true

  # these work:
  # meowmail.catpanion.initiator => gives the user that was the initiator
  # meowmail.catpanion.receiver => gives the user that was the receiver

  # make sure that user = either initiator or receiver in the catpanion!!!
end
