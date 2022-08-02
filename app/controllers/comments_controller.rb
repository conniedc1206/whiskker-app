class CommentsController < ApplicationController

    # GET "/comments"

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    # POST "/comments"

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    # DELETE "/comments/:id"

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:comment, :user_id, :meow_post_id)
    end

end
