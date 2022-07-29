class MeowMail < ApplicationRecord
  belongs_to :catpanion
  belongs_to :user

  # these work:
  # meowmail.catpanion.initiator => gives the user that was the initiator
  # meowmail.catpanion.receiver => gives the user that was the receiver

  # make sure that user = either initiator or receiver in the catpanion!!!
end
