# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Account.create([
    { first_name: "Wiley", last_name: "Jones", username: "Wiles", email: "wiley@example.com", password:"password"},
    { first_name: "Mia", last_name: "Duong", username: "Mia", email: "mia@example.com", password:"password"},
    { first_name: "Button", last_name: "Tao", username: "Button", email: "button@example.com", password:"password"},
    { first_name: "Sparky", last_name: "Kwong", username: "Spark", email: "sparky@example.com", password:"password"},
    { first_name: "Benny", last_name: "Luu", username: "Ben", email: "benny@example.com", password:"password"}
])