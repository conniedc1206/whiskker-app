class CreateMeowPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :meow_posts do |t|
      t.string :description
      t.string :image
      t.integer :like
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
