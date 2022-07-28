class CreateCatpanions < ActiveRecord::Migration[6.1]
  def change
    create_table :catpanions do |t|
      t.belongs_to :initiator, null: false, foreign_key: true
      t.belongs_to :receiver, null: false, foreign_key: true

      t.timestamps
    end
  end
end
