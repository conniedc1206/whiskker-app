class CatpanionsController < ApplicationController
    # check if catpanion exist already

    # GET "/catpanions"
    # Fetch this route if you want to display a list of all the current users catpanions

    def index
        catpanions = Catpanion.all
        render json: catpanions, status: :ok
    end

    # POST "/catpanions"
    # Fetch this route to create a new catpanion. This will work ONLY IF PERSON BEING ADDED DOES 
    # NOT EXIST IN A CURRENT_USERS FRIENDS LIST ALREADY. If they exist, create will throw an error

    def create
        if (@current_user.friends.ids.include?(params[:friend_id]))
            render json: { error: "This cat is already your furriend" }, status: :forbidden
        else
            catpanion = Catpanion.create!(catpanion_params)
            render json: catpanion, status: :created
        end
    end

    # DESTROY "/catpanions/:id"
    # Fetch this route if you want to remove a user from your catpanions

    def destroy
        catpanion = Catpanion.find(params[:id])
        catpanion.destroy
        head :no_content
    end

    private

    def catpanion_params
        params.permit(:user_id, :friend_id)
    end

end