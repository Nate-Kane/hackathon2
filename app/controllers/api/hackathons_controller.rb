class Api::HackathonsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_hackathon, only: [:update, :destroy, :show]
  
  def index
    render json: current_user.hackathons.all
  end

  def all_hackathons
    render json: Hackathon.all
  end
  
  def show
    render json: @hackathon
  end
  
  def create
    hackathon = current_user.hackathons.new(hackathon_params)
     if hackathon.save
      render json: hackathon
    #  else
    #   render json {errors: hackathon.errors}, status: 422
     end
  end
  
  def update
    @hackathon.update(hackathon_params)
    render json: @hackathon
  end
  
  def destroy
    @hackathon.destroy
    render json: @hackathon
  end
  
  private
  
  def hackathon_params
    params.require(:hackathon).permit(:name, :active, :date)
  end
  
  def set_hackathon
    @hackathon = current_user.hackathons.find(params[:id])
  end
  
end