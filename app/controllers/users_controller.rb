class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user, serializer: UserWithTransactionsSerializer, status: 200
    end

    def create
        user = User.create!(user_params)
        render json: user, status: 200
    end

    def update
        user = find_user
        render json: user.update(user_params), status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :picture)
    end

    def find_user
        User.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
      end
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
end
