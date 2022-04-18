class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.float :deposit
      t.float :expenditure

      t.timestamps
    end
  end
end
