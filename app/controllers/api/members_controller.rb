class Api::MembersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_hackathon
  before_action :set_team
  before_action :set_member, only [:show, :update, :destroy]

  def index
    render json: @team.members
  end

  def show
    render json: @member
  end

  def create
    member = @team.members.new(member_params)
     if member.save
      render json: member
     else
      render json: {errors: member.errors}, status: 422
     end
  end

  def update
    @member.update(member_params)
    render json: @member
  end

  def destroy
    @member.destroy
    render json: @member
  end

  private

  def set_member
    @member = @team.members.find(params[:id])
  end

  def member_params
    params.require(:member).permit(:name)
  end

  def set_team 
    @team = @hackathon.teams.find(params[:team_id])
  end

  def set_hackathon
    @hackathon = current_user.hackathons.find(params[:hackathon_id])
  end
end
