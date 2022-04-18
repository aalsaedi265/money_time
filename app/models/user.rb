class User < ApplicationRecord
    has_many :transactions

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
