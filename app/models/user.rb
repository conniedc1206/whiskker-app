class User < ApplicationRecord
    has_many :meow_posts 
    
    has_many :comments
    has_many :commented_posts, through: :comments, source: 'MeowPost'

    has_many :catpanions
    has_many :meow_mails

    # give us all the catpanion instances where I am the initiator
    has_many :initiated_catpanions, foreign_key: :initiator_id, class_name: 'Catpanion'
    has_many :receivers, through: :initiated_catpanions, source: :receiver

    # give us all the catpanion instances where I am the receiver
    has_many :received_catpanions, foreign_key: :receiver_id, class_name: 'Catpanion' 
    has_many :initiators, through: :received_catpanions, source: :initiator
end
