require 'test_helper'

class Api::HackathonsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_hackathons_index_url
    assert_response :success
  end

  test "should get show" do
    get api_hackathons_show_url
    assert_response :success
  end

  test "should get create" do
    get api_hackathons_create_url
    assert_response :success
  end

  test "should get update" do
    get api_hackathons_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_hackathons_destroy_url
    assert_response :success
  end

end
