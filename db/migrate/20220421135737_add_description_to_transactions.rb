class AddDescriptionToTransactions < ActiveRecord::Migration[6.1]
  def change
    add_column :transactions, :discription, :string
  end
end
