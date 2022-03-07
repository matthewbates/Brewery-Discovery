class UsersController < ApplicationController
  skip_before_action :authorized, only: :create
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_params

  def show
    current_user = User.find(session[:user_id])
    render json: current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  private

  #errors
  def invalid_params(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end

  # params
  def user_params
    params.permit(:username, :password)
  end
end
