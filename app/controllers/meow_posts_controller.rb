class MeowPostsController < ApplicationController
    skip_before_action :authenticate_user

    # GET "/meow_posts"
    # Fetch this route in the NewsFeed component to display ALL MEOW POSTS. The MeowPosts class contains instances
    # of EVERY MeowPost regardless of who made the post. A users profile page DOES NOT need to know about this route.

    def index
        meowposts = MeowPost.all
        render json: meowposts, status: :ok
    end

    # GET "/meow_posts/:id"
    # Fetch this route when you are trying to view the details of a specific MeowPost.

    def show
        meowpost = MeowPost.find(params[:id])
        render json: meowpost, serializer: MeowPostShowSerializer, status: :ok
    end

    # POST "/meow_posts"
    # Fetch this route when the CURRENT_USER creates a new MeowPost

    def create
        meowpost = MeowPost.create!(meow_post_params)
        render json: meowpost, status: :created
    end

    # PATCH "/meow_posts/:id"
    # Fetch this route to update a users account settings

    def update
        meowpost = MeowPost.find(params[:id])
        meowpost.update!(meow_post_params)
        render json: meowpost, serializer: MeowPostShowSerializer, render: :accepted
    end

    # DELETE "/meow_posts/:id"
    # Fetch this route to delete a MeowPost

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




# fetch("users/:id")

# const user;

# profile component

# meow_posts.map(post => {
#     return <component />
# })