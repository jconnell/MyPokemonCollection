class HomeController < ApplicationController
  before_filter :authenticate_user!
  def index
    @pokemons = current_user.pokemon
  end
end
