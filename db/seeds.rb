# require 'faker'

puts "Destroying previous data..."
MeowMail.destroy_all
MeowMail.reset_pk_sequence
Catpanion.destroy_all
Catpanion.reset_pk_sequence
Comment.destroy_all
Comment.reset_pk_sequence
MeowPost.destroy_all
MeowPost.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence

puts "Seeding users..."
10.times do
    User.create(
        username: Faker::Name.last_name,
        password: Faker::Internet.password,
        purrfile_picture: Faker::LoremFlickr.image,
        bio: Faker::Lorem.sentence,
        full_name: Faker::Name.name
    )
end

puts "Adding MeowPosts..."
20.times do
    MeowPost.create(
        description: Faker::Lorem.sentence, 
        image: Faker::LoremFlickr.image,
        like: rand(1...20),
        user_id: User.ids.sample
    )
end

puts "Adding Comments..."
20.times do
    Comment.create(
        comment: Faker::Lorem.sentence, 
        user_id: User.ids.sample,
        meow_post_id: MeowPost.ids.sample
    )
end

puts "Connecting Catpanions..."
Catpanion.create([
    { initiator_id: 1, receiver_id: 10 },
    { initiator_id: 1, receiver_id: 9 },
    { initiator_id: 2, receiver_id: 8 },
    { initiator_id: 3, receiver_id: 7 },
    { initiator_id: 4, receiver_id: 6 },
    { initiator_id: 5, receiver_id: 2 },
    { initiator_id: 6, receiver_id: 1 },
    { initiator_id: 7, receiver_id: 10 },
    { initiator_id: 8, receiver_id: 9 },
    { initiator_id: 9, receiver_id: 3 },
    { initiator_id: 10, receiver_id: 5 }
])

puts "Generating Meowmails..."
20.times do
    MeowMail.create(
        message: Faker::Lorem.sentence,
        catpanion_id: Catpanion.ids.sample,
        user_id: User.ids.sample
    )
end

puts "Done seeding!"