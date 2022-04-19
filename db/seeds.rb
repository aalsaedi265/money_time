puts "Creating test users.."

User.create!(username: "Troy", password: "onetwo", image_url: "https://picsum.photos/id/237/200/300")

puts "Creating test transactions.."

Transaction.create!(deposit: 50.50, expenditure: 2.50, user_id: 1)

puts "Seeding done!"