class MeowMailsController < ApplicationController
    skip_before_action :authenticate_user

    # GET "/meow_mails"

    # Show all messages between two CATPANIONS.

    #EXAMPLE: If I send a message to a user with the ID of 10:
    # - My messages: Display all SENT messages where the RECIPIENT_ID is 10
    # - Thier messages: Display all RECIEVED messages where the SENDER_ID is 10
    # MY ID DOES NOT MATTER FOR MY MESSAGES

    def index
        meowmails = MeowMail.all
        render json: meowmails, status: :ok
    end

    # POST "/meow_mails"

    # Create a new message and send it to a specific catpanion

    # NOTE: Create a message is SENDING a message, not creating the UI that is seen to send the message. When a user wants to send 
    # a message to a specific user, we may need some sort of custom method or function that finds the specific catpanion. When a
    # user clicks on a catpanion to send or view messages, they see the name, but the data is loaded via the catpanion and user IDs

    def create
        meowmail = MeowMail.create!(meow_mail_params)
        render json: meowmail, status: :created
    end

    # DESTROY "/meow_mails/:id"
    # Delete a message. This will only delete ONE MESSAGE, with no dependencies associated to it.

    def destroy
        meowmail = MeowMail.find(params[:id])
        meowmail.destroy
        head :no_content
    end

    private

    def meow_mail_params
        params.permit(:message, :recipient_id, :sender_id)
    end

end
