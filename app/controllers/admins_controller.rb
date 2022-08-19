class AdminsController < ApplicationController
    skip_before_action :authorized, only: [:create]
    def create
        admin = Admin.create!(admin_params)
        admin.update(is_owner: false)
        render json: admin, status: :created
    end

    def show
        current_admin = Admin.find(session[:admin_id])
        render json: current_admin, status: 200
    end

    private

    def admin_params
        params.permit(:username, :password)
    end
end
