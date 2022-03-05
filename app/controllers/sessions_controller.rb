class SessionsController < ApplicationController

    def create
        byebug
        user = User.find(username: params[:username])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
        else
            render json: { error: "Invalid Username or Password"}, status: :not_found
        end
    end
end
