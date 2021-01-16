class Api::TeamsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_hackathon
  before_action :set_team, only: [:show, :update, :destroy]

  def index
    render json: @hackathon.teams
  end

  def show
    render json: @team
  end

  def create
    team = @hackathon.team.new(team_params)
     if team.save
      render json: team
     else
      render json: {errors: team.errors}, status: 422
  end

  def update
    @team.update(team_params)
    render json: @team
  end

  def destroy
    @team.destroy
    render json: @team
  end

  private 

  def set_team 
    @team = @hackathon.teams.find(params[:id])
  end

  def team_params
    params.require(:team).permit(:name, :total_points, :course)
  end

  def set_hackathon
    @hackathon = current_user.hackathons.find(params[:hackathon_id])
  end

end
