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
    { requestor_id: 1, requestee_id: 10 },
    { requestor_id: 1, requestee_id: 9 },
    { requestor_id: 2, requestee_id: 8 },
    { requestor_id: 3, requestee_id: 7 },
    { requestor_id: 4, requestee_id: 6 },
    { requestor_id: 5, requestee_id: 2 },
    { requestor_id: 6, requestee_id: 1 },
    { requestor_id: 7, requestee_id: 10 },
    { requestor_id: 8, requestee_id: 9 },
    { requestor_id: 9, requestee_id: 3 },
    { requestor_id: 10, requestee_id: 5 }
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