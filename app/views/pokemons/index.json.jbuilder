json.array!(@pokemons) do |pokemon|
  json.extract! pokemon, :id, :user_id, :dex_number, :type_1, :type_2, :name, :level
  json.url pokemon_url(pokemon, format: :json)
end
