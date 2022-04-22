class TransactionsController < ApplicationController
    skip_before_action :authorize, only: :create
    def index
        render json: Transaction.all
    end

    def show
        transaction = find_transaction
        render json: transaction, status: 200
    end

    def create
        
        transaction = Transaction.create!(transaction_params )
        byebug
        render json: transaction, status: 200
    end

    def destroy
        transaction = find_transaction
        transaction.destroy
        head :no_content
    end

    private

    def transaction_params
        params.permit(:deposit, :expenditure,:discription)
    end

    def find_transaction
        Transaction.find(params[:id])
    end
    
end
