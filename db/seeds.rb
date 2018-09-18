# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nb_one = Notebook.create(title: "Decomposition Book", author_id: 1)
nb_two = Notebook.create(title: "Legal Pad", author_id: 1)
nb_three = Notebook.create(title: "Literally a Binder", author_id: 1)

nb_four = Notebook.create(title: "Necronomicon", author_id: 7)
nb_five = Notebook.create(title: "Steve Martin: Masterclass", author_id: 7)
nb_six = Notebook.create(title: "Cereal Podcast Notes", author_id: 7)

nb_seven = Notebook.create(title: "Plant Notes", author_id: 8)
nb_eight = Notebook.create(title: "Comic Con", author_id: 8)
nb_nine = Notebook.create(title: "Overwatch Tips", author_id: 8)
