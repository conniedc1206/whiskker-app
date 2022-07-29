class CreateMeowMails < ActiveRecord::Migration[6.1]
  def change
    create_table :meow_mails do |t|
      t.string :message
      t.belongs_to :catpanion, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
