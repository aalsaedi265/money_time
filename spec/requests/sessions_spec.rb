require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  describe "GET /—no-test-framework" do
    it "returns http success" do
      get "/sessions/—no-test-framework"
      expect(response).to have_http_status(:success)
    end
  end

end
