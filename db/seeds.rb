# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create(
    username: "guest",
    email: "guest@guest.com",
    password: "password",
)

may = User.create(username:"may", email: "may@may.com", password:"password")
june = User.create(username:"june", email: "june@june.com", password:"password")
april = User.create(username:"april", email: "april@april.com", password:"password")
david = User.create(username:"david", email: "david@david.com", password:"password")
mike = User.create(username:"mike", email: "mike@mike.com", password:"password")
chole = User.create(username:"chole", email: "chole@chole.com", password:"password")
rob = User.create(username:"rob", email: "rob@rob.com", password:"password")
andrew = User.create(username:"andrew", email: "andrew@andrew.com", password:"password")
nick = User.create(username:"Nick", email: "nick@nick.com", password:"password")
kat = User.create(username:"kat", email: "kat@kat.com", password:"password")
bill = User.create(username:"bill", email: "bill@bill.com", password:"password")
fred = User.create(username:"fred", email: "fred@fred.com", password:"password")
fredy = User.create(username:"fredy", email: "fredy@fredy.com", password:"password")
chi = User.create(username:"chi", email: "chi@chi.com", password:"password")


Friendship.destroy_all

may_june = Friendship.create(user_id: may.id, friend_id: june.id)
may_april = Friendship.create(user_id: may.id, friend_id: april.id)
may_david = Friendship.create(user_id: may.id, friend_id: david.id)
may_bill = Friendship.create(user_id: may.id, friend_id: bill.id)
may_chole = Friendship.create(user_id: may.id, friend_id: chole.id)
may_kat = Friendship.create(user_id: may.id, friend_id: kat.id)
may_fredy = Friendship.create(user_id: may.id, friend_id: fredy.id)
may_fred = Friendship.create(user_id: may.id, friend_id: fred.id)
may_chi = Friendship.create(user_id: may.id, friend_id: chi.id)


Bill.destroy_all

# may and june
bill_one = Bill.create(author_id: may.id, nums_splits: 2, amount:30, category: "food", description:"Dinner", bill_date: '2021-5-5')

# may and april and david
bill_two = Bill.create(author_id: may.id, nums_splits: 3, amount:30.00, category: "food", description: "Lunch", bill_date: '2021-5-5')

# june and april and david
bill_three = Bill.create(author_id: june.id, nums_splits: 3, amount:33.33, category: "food", description: "Breakfast", bill_date: '2021-5-5')

# june and may and april and david
bill_four = Bill.create(author_id: june.id, nums_splits: 4, amount:44.44, category: "food", description: "Breakfast", bill_date: '2021-5-5')

# may and june and april PAID
bill_five = Bill.create(author_id: may.id, paid: true, nums_splits: 3, amount:21.00, category: "food", description: "Breakfast", bill_date: '2021-5-5')

# june and may and april PARTIAL-PAID
bill_six = Bill.create(author_id: june.id, paid: false, nums_splits: 3, amount:30.00, category: "food", description: "Breakfast", bill_date: '2021-5-5')

# may and chole
bill_seven = Bill.create(author_id: may.id, paid: false, nums_splits: 2, amount: 44.44, category: "food", description: "Breakfast", bill_date: '2021-5-5')

# kat and may
bill_eight = Bill.create(author_id: kat.id, paid: false, nums_splits: 2, amount: 50.44, category: "food", description: "Breakfast", bill_date: '2021-5-5')

# bill and may
bill_nine = Bill.create(author_id: bill.id, paid: false, nums_splits: 2, amount: 60.44, category: "food", description: "Breakfast", bill_date: '2021-5-5')

# david and may
bill_ten = Bill.create(author_id: david.id, paid: false, nums_splits: 2, amount: 60.44, category: "food", description: "Breakfast", bill_date: '2021-5-5')


Billsplit.destroy_all

# may and june
bs_1 = Billsplit.create(bill_id: bill_one.id, recipient_id: june.id, splited_bill_amount: 15)

# may and april and david
bs_2 = Billsplit.create(bill_id: bill_two.id, recipient_id: april.id, splited_bill_amount: 10)
bs_3 = Billsplit.create(bill_id: bill_two.id, recipient_id: david.id, splited_bill_amount: 10)

# june and april and david
bs_4 = Billsplit.create(bill_id: bill_three.id, recipient_id: april.id, splited_bill_amount: 11.11)
bs_5 = Billsplit.create(bill_id: bill_three.id, recipient_id: david.id, splited_bill_amount: 11.11)

# june and may and april and david
bs_6 = Billsplit.create(bill_id: bill_four.id, recipient_id: may.id, splited_bill_amount: 11.11)
bs_7 = Billsplit.create(bill_id: bill_four.id, recipient_id: april.id, splited_bill_amount: 11.11)
bs_8 = Billsplit.create(bill_id: bill_four.id, recipient_id: david.id, splited_bill_amount: 11.11)

# may and june and april PAID
bs_9 = Billsplit.create(bill_id: bill_five.id, recipient_paid: true, recipient_id: june.id, splited_bill_amount: 7)
bs_10 = Billsplit.create(bill_id: bill_five.id, recipient_paid: true, recipient_id: april.id, splited_bill_amount: 7)

# june and may and april PARTIAL-PAID
bs_11 = Billsplit.create(bill_id: bill_six.id, recipient_paid: true, recipient_id: june.id, splited_bill_amount: 10)
bs_12 = Billsplit.create(bill_id: bill_six.id, recipient_paid: false, recipient_id: april.id, splited_bill_amount: 10)

# may and chole
bs_13 = Billsplit.create(bill_id: bill_seven.id, recipient_paid: false, recipient_id: chole.id, splited_bill_amount: 22.22)

# kat and may
bs_14 = Billsplit.create(bill_id: bill_eight.id, recipient_paid: false, recipient_id: may.id, splited_bill_amount: 25.22)

# bill and may
bs_15 = Billsplit.create(bill_id: bill_nine.id, recipient_paid: false, recipient_id: may.id, splited_bill_amount: 30.22)

# david and may
bs_16 = Billsplit.create(bill_id: bill_ten.id, recipient_paid: false, recipient_id: may.id, splited_bill_amount: 30.22)




[#<Billsplit id: 2, bill_id: 2, recipient_id: 4, splited_bill_amount: 10.0, created_at: "2021-05-20 02:40:34", updated_at: "2021-05-20 02:40:34", recipient_paid: false>, 
#<Billsplit id: 4, bill_id: 3, recipient_id: 4, splited_bill_amount: 11.11, created_at: "2021-05-20 02:40:34", updated_at: "2021-05-20 02:40:34", recipient_paid: false>, 
#<Billsplit id: 7, bill_id: 4, recipient_id: 4, splited_bill_amount: 11.11, created_at: "2021-05-20 02:40:34", updated_at: "2021-05-20 02:40:34", recipient_paid: false>, 
#<Billsplit id: 12, bill_id: 6, recipient_id: 4, splited_bill_amount: 10.0, created_at: "2021-05-20 02:40:34", updated_at: "2021-05-20 02:40:34", recipient_paid: false>]

[#<Bill id: 3, amount: 33.33, description: "Breakfast", bill_date: "2021-05-05", author_id: 3, paid: false, category: "food", 
# created_at: "2021-05-20 02:40:34", updated_at: "2021-05-20 02:40:34", nums_splits: 3, note: nil>, 
#<Bill id: 4, amount: 44.44, description: "Breakfast", bill_date: "2021-05-05", author_id: 3, paid: false, category: "food", 
# created_at: "2021-05-20 02:40:34", updated_at: "2021-05-20 02:40:34", nums_splits: 4, note: nil>, 
#<Bill id: 6, amount: 30.0, description: "Breakfast", bill_date: "2021-05-05", author_id: 3, paid: false, category: "food", 
# created_at: "2021-05-20 02:40:34", updated_at: "2021-05-20 02:40:34", nums_splits: 3, note: nil>, 
#<Bill id: 11, amount: 30.0, description: "Dinner", bill_date: "2016-12-01", author_id: 3, paid: false, category: "food", 
# created_at: "2021-05-20 14:45:46", updated_at: "2021-05-20 14:45:46", nums_splits: 2, note: nil>]