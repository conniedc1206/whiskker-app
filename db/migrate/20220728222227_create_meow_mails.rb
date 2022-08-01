class CreateMeowMails < ActiveRecord::Migration[6.1]
  def change
    create_table :meow_mails do |t|
      t.string :message
      t.integer :sender_id
      t.integer :recipient_id

      t.timestamps
    end
  end
end
