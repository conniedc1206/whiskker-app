class User < ApplicationRecord
    has_secure_password
    
    has_many :comments
    has_many :meow_posts, through: :comments
    has_many :commented_posts, through: :comments, source: :meow_post
    # example of how to use alias name: has_many :alias_name, through: :model_name, source: :initial_name

    has_many :initiated_relationships, foreign_key: :initiator_id, class_name: 'Catpanion'
    has_many :receivers, through: :initiated_relationships

    has_many :receiver_of_relationships, foreign_key: :receiver_id, class_name: 'Catpanion'
    has_many :initiators, through: :receiver_of_relationships

    has_secure_password
    # Potentially add inclusions to this to make sure that username has only letters and numbers
    validates :username, presence: true, uniqueness: true, length: { maximum: 30 }
    # Potentially add inclusions to this to make sure that username has only letters
    validates :full_name, presence: true, length: { maximum: 30 }
    validates :bio, length: { maximum: 75 }

end
