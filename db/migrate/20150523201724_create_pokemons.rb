class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.integer :user_id
      t.integer :dex_number
      t.string :type_1
      t.string :type_2
      t.string :name
      t.integer :level

      t.timestamps null: false
    end
  end
end
