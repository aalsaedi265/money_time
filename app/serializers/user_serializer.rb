class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :picture
end
