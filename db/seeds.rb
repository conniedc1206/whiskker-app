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
    { user_id: 1, friend_id: 10 },
    { user_id: 1, friend_id: 9 },
    { user_id: 2, friend_id: 8 },
    { user_id: 3, friend_id: 7 },
    { user_id: 4, friend_id: 6 },
    { user_id: 5, friend_id: 2 },
    { user_id: 6, friend_id: 1 },
    { user_id: 7, friend_id: 10 },
    { user_id: 8, friend_id: 9 },
    { user_id: 9, friend_id: 3 },
    { user_id: 10, friend_id: 5 }
])


puts "Generating Meowmails..."
20.times do
    MeowMail.create(
        message: Faker::Lorem.sentence,
        recipient_id: User.ids.sample,
        sender_id: User.ids.sample
    )
end

puts "Done seeding!"