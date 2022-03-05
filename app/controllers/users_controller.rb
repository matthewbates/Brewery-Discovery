class UsersController < ApplicationController
    wrap_parameters format: []
rescue_from ActiveRecord::RecordInvalid, with: :invalid_params

    def create
        byebug
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private
    #errors
    def invalid_params(invalid)
        render json:{errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    # params
    def user_params
        params.permit(:username, :password)
    end 
end
