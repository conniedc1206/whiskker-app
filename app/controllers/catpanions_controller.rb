class CatpanionsController < ApplicationController
    # check if catpanion exist already

    # Show all your current catpanions

    def index
        catpanions = Catpanion.all
        render json: catpanions, status: :ok
    end

    def create
        if (Catpanion.exists?)
            render json: { error: "They are already your catpanion!"}, status: :forbidden
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
        params.permit(:requestor_id, :requestee_id)
    end

end