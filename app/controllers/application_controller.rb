class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  # Record_not_found for show, update, and delete

  def record_not_found(exception)
    render json: { error: "#{exception.model} not found." }, status: :not_found
  end

  # Record_invalid for create, update, and delete (if user needs to verify account information to delete)

  def record_invalid(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end