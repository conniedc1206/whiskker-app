class UsersController < ApplicationController

    # Show all of the users. This can be used in the friends list search filter when looking for new friends to add

    def index
        users = User.all
        render json: users, status: :ok
    end

    # Show one user. This can be used to see the profile of an individual user

    def show
        user = User.find(params[:id])
        render json: user, serializer: :UserShowSerializer, status: :ok 
    end

    # Create a user when they sign up on the front end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    # Update a user, potentially in account settings

    # def update
    #     user = User.find(params[:id])
    #     user.update!(user_params)
    #     render json: user, status: :accepted
    # end

    # Delete account (user) in account settings

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    # ERRORS FOR INVALIDE AND RECORD NOT FOUND ARE IN APP CONTROLLER

    def user_params
        params.permit(:username, :password, :purrfile_picture, :bio, :full_name)
    end

end