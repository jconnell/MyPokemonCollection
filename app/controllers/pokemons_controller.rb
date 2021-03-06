# coding: utf-8
class PokemonsController < ApplicationController
  before_action :set_pokemon, only: [:show, :edit, :update, :destroy]

  # GET /pokemons
  # GET /pokemons.json
  def index
    @pokemons = current_user.pokemon.to_a.sort! { |a,b| a.dex_number <=> b.dex_number }
  end

  # GET /pokemons/1
  # GET /pokemons/1.json
  def show
    @pokemon_info = JSON.parse(Pokegem.get('pokemon', @pokemon.dex_number))
    @sprite_number = @pokemon_info['sprites'][0]['resource_uri'].split('/')[-1]
    @sprite_url = 'http://pokeapi.co/' + JSON.parse(Pokegem.get('sprite', @sprite_number))['image']
  end

  # GET /pokemons/new
  def new
    @pokemon = Pokemon.new
  end

  # GET /pokemons/1/edit
  def edit
  end

  # POST /pokemons
  # POST /pokemons.json
  def create
    @pokemon = Pokemon.new(pokemon_params)

    pokedex = JSON.parse(Pokegem.get('pokedex', 1))['pokemon']

    # First try to grab a pokemon with a name equal to name supplied
    # by the user. Replace sex characters for nidoran.
    pokemon_name = @pokemon.name.gsub(/♀/, '-f').gsub(/♂/, '-m').downcase
    selected_pokemon = pokedex.select{|hash| hash["name"] == pokemon_name }

    # If we couldn't match the name outright, let's match is with a
    # regular expression.
    if selected_pokemon.nil? || selected_pokemon.empty?
      selected_pokemon = pokedex.select{|hash| /#{@pokemon.name.downcase}/ =~ hash["name"] }
    end

    # Sort the array of pokemon with matching names by their pokedex
    # number and blindly take the first pokemon in the list.
    pokemon = selected_pokemon.sort_by { |hash| hash['resource_uri'].split('/')[-1].to_i }[0]

    dex_number = pokemon['resource_uri'].split('/')[-1].to_i

    pokemon_info = JSON.parse(Pokegem.get('pokemon', dex_number))
    @pokemon.type_1 = pokemon_info['types'][0]['name'].capitalize
    @pokemon.type_2 = pokemon_info['types'].length > 1 ? pokemon_info['types'][1]['name'].capitalize : nil
    @pokemon.dex_number = dex_number

    respond_to do |format|
      if @pokemon.save
        format.html { redirect_to @pokemon, notice: 'Pokemon was successfully created.' }
        format.json { render :show, status: :created, location: @pokemon }
      else
        format.html { render :new }
        format.json { render json: @pokemon.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pokemons/1
  # PATCH/PUT /pokemons/1.json
  def update
    respond_to do |format|
      if @pokemon.update(pokemon_params)
        format.html { redirect_to @pokemon, notice: 'Pokemon was successfully updated.' }
        format.json { render :show, status: :ok, location: @pokemon }
      else
        format.html { render :edit }
        format.json { render json: @pokemon.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pokemons/1
  # DELETE /pokemons/1.json
  def destroy
    @pokemon.destroy
    respond_to do |format|
      format.html { redirect_to '/', notice: 'Pokemon was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_pokemon
    @pokemon = Pokemon.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def pokemon_params
    params.require(:pokemon).permit(:user_id, :dex_number, :type_1, :type_2, :name, :level)
  end
end
