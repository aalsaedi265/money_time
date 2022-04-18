class UserWithTransactionsSerializer < ActiveModel::Serializer
    attributes :id, :username, :image_url
    has_many :transactions
  end