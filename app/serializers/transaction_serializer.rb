class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :deposit, :expenditure, :description
end
