class Catpanion < ApplicationRecord

  belongs_to :user
  belongs_to :friend, class_name: "User"

  # belongs_to :requestor, class_name: 'User', foreign_key: "requestor_id"
  # belongs_to :requestee, class_name: 'User', foreign_key: "requestee_id"

  # validates :friend_id, uniqueness: true

  # CUSTOM VALIDATIONS

  # validate :already_in_requestors

  # def already_in_requestors
  #   requestor.any? { |x| x[:requestee_id] == :requestor_id }
  # end

end

# Custom validation, check to see if requestor exists in requestees catpanions

# When sending a request, check to see if the requestee_id is already in your requestors
# If not, send the request. If so, throw error

# Evey user should have a list of friends rather than a list of requestors and requestees, that way you can check for uniqueness in that list