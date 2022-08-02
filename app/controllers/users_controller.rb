class UsersController < ApplicationController
    # skip_before_action :authenticate_user, only: [:create, :index]

    # GET "/users"
    # Fetch this route to see a list of all users that currently have an account

    def index
        users = User.all
        render json: users, status: :ok
    end

    # GET "/users/:id"
    # Fetch this route if you are trying to display ANY INFORMATION ABOUT A SINGLE USER. This could be: MeowPosts,
    # Catpanions, Messages

    def show
        user = User.find(params[:id])
        render json: user, serializer: UserShowSerializer, status: :ok
    end

    # POST "/users"
    # Fetch this route to create a user (see user params to know what's required in the form)

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
        # error: unprocessable_entity in app controller
    end

    # Update a user, potentially in account settings
    # def update
    #     user = User.find(params[:id])
    #     user.update!(user_params)
    #     render json: user, status: :accepted
    # end

    # DESTROY "/users/:id"
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