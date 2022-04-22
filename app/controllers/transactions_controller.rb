class TransactionsController < ApplicationController
    
    def index
        render json: Transaction.all
    end

    def show
        transaction = find_transaction
        render json: transaction, status: 200
    end

    def create
        transaction = @current_user.transactions.create!(transaction_params)
        render json: transaction, status: 200
    end

    def destroy
        transaction = find_transaction
        transaction.destroy
        head :no_content
    end

    private

    def transaction_params
        params.permit(:deposit, :expenditure,:description,:user_id)
    end

    def find_transaction
        Transaction.find(params[:id])
    end
    
end
