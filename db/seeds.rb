puts "Creating test users.."

u1 = User.create!(username: "Troy", password: "onetwo", image_url: "https://picsum.photos/id/237/200/300")

puts "Creating test transactions.."
Transaction.create!(expenditure:154.69, user_id: u1.id,description: "Groceries")
Transaction.create!(deposit: Faker::Commerce.price, user_id: u1.id,description: "Sold some old clothes")
Transaction.create!(deposit: 650, user_id: u1.id,description: "PayCheck")
Transaction.create!(expenditure:14.99, user_id: u1.id,description: "Netflix")
Transaction.create!(expenditure:35, user_id: u1.id,description: "Birthday Gifts")
Transaction.create!(expenditure:55, user_id: u1.id,description: "Gym Membership")
Transaction.create!(expenditure:5, user_id: u1.id,description: "Notebooks")
Transaction.create!(expenditure:90, user_id: u1.id,description: "Internet Bill")


puts "Seeding done!"