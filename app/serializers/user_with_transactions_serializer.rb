class UserWithTransactionsSerializer < ActiveModel::Serializer
    attributes :id, :username, :password, :picture
    has_many :transactions
  end