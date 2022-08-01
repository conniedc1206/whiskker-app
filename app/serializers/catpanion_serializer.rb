class CatpanionSerializer < ActiveModel::Serializer
  attributes :id, :requestee_id, :requestee, :requestor_id, :requestor
  # has_one :requestor
  # has_one :requestee
end
