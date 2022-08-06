class SessionsController < ApplicationController
  skip_before_action :authorized
    def create
      admin = Admin.find_by(username: params[:username])
      session[:admin_id] = admin.id
      render json: admin
    end
  end