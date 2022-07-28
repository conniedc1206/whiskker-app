class Catpanion < ApplicationRecord
  belongs_to :initiator, foreign_key: :initiator_id, class_name: 'Catpanion'
  belongs_to :receiver, foreign_key: :receiver_id, class_name: 'Catpanion'
end
