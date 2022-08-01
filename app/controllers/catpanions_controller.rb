class CatpanionsController < ApplicationController
    # check if catpanion exist already

    # Show all your current catpanions

    def index
        catpanions = Catpanion.all
        render json: catpanions, status: :ok
    end

    def create
        if (@current_user.friends.ids.include?(params[:friend_id]))
            render json: { error: "This cat is already your furriend" }, status: :forbidden
        else
            catpanion = Catpanion.create!(catpanion_params)
            render json: catpanion, status: :created
        end
    end

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