class SessionsController < ApplicationController
    def create
      admin = Admin.find_by(username: params[:username])
      session[:admin_id] = admin.id
      render json: admin
    end
  end