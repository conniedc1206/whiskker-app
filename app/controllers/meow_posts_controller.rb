class MeowPostsController < ApplicationController
    skip_before_action :authenticate_user

    # Show all posts on the home page. User CANNOT see comments until the click the comments button, which will bring them to an
    # individual post where the comments will be visible. See SHOW CUSTOM SERIALIZER
    # GET "/meow_posts"
    def index
        meowposts = MeowPost.all
        render json: meowposts, status: :ok
    end

    # User can view a post to see the comments that are associated with the post. See CUSTOM SERIALIZER
    # GET "/meow_posts/:id"
    def show
        meowpost = MeowPost.find(params[:id])
        render json: meowpost, serializer: MeowPostShowSerializer, status: :ok
    end

    # User creates a post with an image and description
    # POST "/meow_posts"
    def create
        meowpost = MeowPost.create!(meow_post_params)
        render json: meowpost, status: :created
    end

    # User edits a post's image or description
    # PATCH "/meow_posts/:id"
    def update
        meowpost = MeowPost.find(params[:id])
        meowpost.update!(meow_post_params)
        render json: meowpost, serializer: MeowPostShowSerializer, render: :accepted
    end

    # User deletes a post. It's associated COMMENTS should also be destroyed
    # DELETE "/meow_posts/:id"
    def destroy # DESTROY DEPENDENCIES
        meowpost = MeowPost.find(params[:id])
        meowpost.destroy
        head :no_content
    end

    private

    # ERRORS FOR INVALID AND RECORD NOT FOUND ARE IN APP CONTROLLER

    def meow_post_params
        params.permit(:description, :image, :like, :user_id)        
    end

end
