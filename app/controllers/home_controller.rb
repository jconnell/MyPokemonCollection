class HomeController < ApplicationController
  before_filter :authenticate_user!
  def index
    @pokemons = current_user.pokemon.to_a.sort! { |a,b| a.dex_number <=> b.dex_number }
  end
end
