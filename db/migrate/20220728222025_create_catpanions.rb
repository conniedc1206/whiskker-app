class CreateCatpanions < ActiveRecord::Migration[6.1]
  def change
    create_table :catpanions do |t|
      t.integer :requestor_id, foreign_key: true
      t.integer :requestee_id, foreign_key: true

      t.timestamps
    end
  end
end
