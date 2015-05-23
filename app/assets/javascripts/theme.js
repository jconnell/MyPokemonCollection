$(document).ready(function() {
    $(function () {
function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#password-confirm").val();
    if (password != confirmPassword) {
	$("#password-confirm-label").attr('class', 'login-field-icon fui-cross');
    } else {
	$("#password-confirm-label").attr('class', 'login-field-icon fui-check');
    }
}

var names = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.name); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 4,
    local: [
	{ name: 'Abomasnow' },
	{ name: 'Abra' },
	{ name: 'Absol' },
	{ name: 'Accelgor' },
	{ name: 'Aegislash' },
	{ name: 'Aerodactyl' },
	{ name: 'Aggron' },
	{ name: 'Aipom' },
	{ name: 'Alakazam' },
	{ name: 'Alomomola' },
	{ name: 'Altaria' },
	{ name: 'Amaura' },
	{ name: 'Ambipom' },
	{ name: 'Amoonguss' },
	{ name: 'Ampharos' },
	{ name: 'Anorith' },
	{ name: 'Arbok' },
	{ name: 'Arcanine' },
	{ name: 'Arceus' },
	{ name: 'Archen' },
	{ name: 'Archeops' },
	{ name: 'Ariados' },
	{ name: 'Armaldo' },
	{ name: 'Aromatisse' },
	{ name: 'Aron' },
	{ name: 'Articuno' },
	{ name: 'Audino' },
	{ name: 'Aurorus' },
	{ name: 'Avalugg' },
	{ name: 'Axew' },
	{ name: 'Azelf' },
	{ name: 'Azumarill' },
	{ name: 'Azurill' },
	{ name: 'Bagon' },
	{ name: 'Baltoy' },
	{ name: 'Banette' },
	{ name: 'Barbaracle' },
	{ name: 'Barboach' },
	{ name: 'Basculin' },
	{ name: 'Bastiodon' },
	{ name: 'Bayleef' },
	{ name: 'Beartic' },
	{ name: 'Beautifly' },
	{ name: 'Beedrill' },
	{ name: 'Beheeyem' },
	{ name: 'Beldum' },
	{ name: 'Bellossom' },
	{ name: 'Bellsprout' },
	{ name: 'Bergmite' },
	{ name: 'Bibarel' },
	{ name: 'Bidoof' },
	{ name: 'Binacle' },
	{ name: 'Bisharp' },
	{ name: 'Blastoise' },
	{ name: 'Blaziken' },
	{ name: 'Blissey' },
	{ name: 'Blitzle' },
	{ name: 'Boldore' },
	{ name: 'Bonsly' },
	{ name: 'Bouffalant' },
	{ name: 'Braixen' },
	{ name: 'Braviary' },
	{ name: 'Breloom' },
	{ name: 'Bronzong' },
	{ name: 'Bronzor' },
	{ name: 'Budew' },
	{ name: 'Buizel' },
	{ name: 'Bulbasaur' },
	{ name: 'Buneary' },
	{ name: 'Bunnelby' },
	{ name: 'Burmy' },
	{ name: 'Butterfree' },
	{ name: 'Cacnea' },
	{ name: 'Cacturne' },
	{ name: 'Camerupt' },
	{ name: 'Carbink' },
	{ name: 'Carnivine' },
	{ name: 'Carracosta' },
	{ name: 'Carvanha' },
	{ name: 'Cascoon' },
	{ name: 'Castform' },
	{ name: 'Caterpie' },
	{ name: 'Celebi' },
	{ name: 'Chandelure' },
	{ name: 'Chansey' },
	{ name: 'Charizard' },
	{ name: 'Charmander' },
	{ name: 'Charmeleon' },
	{ name: 'Chatot' },
	{ name: 'Cherrim' },
	{ name: 'Cherubi' },
	{ name: 'Chesnaught' },
	{ name: 'Chespin' },
	{ name: 'Chikorita' },
	{ name: 'Chimchar' },
	{ name: 'Chimecho' },
	{ name: 'Chinchou' },
	{ name: 'Chingling' },
	{ name: 'Cinccino' },
	{ name: 'Clamperl' },
	{ name: 'Clauncher' },
	{ name: 'Clawitzer' },
	{ name: 'Claydol' },
	{ name: 'Clefable' },
	{ name: 'Clefairy' },
	{ name: 'Cleffa' },
	{ name: 'Cloyster' },
	{ name: 'Cobalion' },
	{ name: 'Cofagrigus' },
	{ name: 'Combee' },
	{ name: 'Combusken' },
	{ name: 'Conkeldurr' },
	{ name: 'Corphish' },
	{ name: 'Corsola' },
	{ name: 'Cottonee' },
	{ name: 'Cradily' },
	{ name: 'Cranidos' },
	{ name: 'Crawdaunt' },
	{ name: 'Cresselia' },
	{ name: 'Croagunk' },
	{ name: 'Crobat' },
	{ name: 'Croconaw' },
	{ name: 'Crustle' },
	{ name: 'Cryogonal' },
	{ name: 'Cubchoo' },
	{ name: 'Cubone' },
	{ name: 'Cyndaquil' },
	{ name: 'Darkrai' },
	{ name: 'Darmanitan' },
	{ name: 'Darumaka' },
	{ name: 'Dedenne' },
	{ name: 'Deerling' },
	{ name: 'Deino' },
	{ name: 'Delcatty' },
	{ name: 'Delibird' },
	{ name: 'Delphox' },
	{ name: 'Deoxys' },
	{ name: 'Dewgong' },
	{ name: 'Dewott' },
	{ name: 'Dialga' },
	{ name: 'Diancie' },
	{ name: 'Diggersby' },
	{ name: 'Diglett' },
	{ name: 'Ditto' },
	{ name: 'Dodrio' },
	{ name: 'Doduo' },
	{ name: 'Donphan' },
	{ name: 'Doublade' },
	{ name: 'Dragalge' },
	{ name: 'Dragonair' },
	{ name: 'Dragonite' },
	{ name: 'Drapion' },
	{ name: 'Dratini' },
	{ name: 'Drifblim' },
	{ name: 'Drifloon' },
	{ name: 'Drilbur' },
	{ name: 'Drowzee' },
	{ name: 'Druddigon' },
	{ name: 'Ducklett' },
	{ name: 'Dugtrio' },
	{ name: 'Dunsparce' },
	{ name: 'Duosion' },
	{ name: 'Durant' },
	{ name: 'Dusclops' },
	{ name: 'Dusknoir' },
	{ name: 'Duskull' },
	{ name: 'Dustox' },
	{ name: 'Dwebble' },
	{ name: 'Eelektrik' },
	{ name: 'Eelektross' },
	{ name: 'Eevee' },
	{ name: 'Ekans' },
	{ name: 'Electabuzz' },
	{ name: 'Electivire' },
	{ name: 'Electrike' },
	{ name: 'Electrode' },
	{ name: 'Elekid' },
	{ name: 'Elgyem' },
	{ name: 'Emboar' },
	{ name: 'Emolga' },
	{ name: 'Empoleon' },
	{ name: 'Entei' },
	{ name: 'Escavalier' },
	{ name: 'Espeon' },
	{ name: 'Espurr' },
	{ name: 'Excadrill' },
	{ name: 'Exeggcute' },
	{ name: 'Exeggutor' },
	{ name: 'Exploud' },
	{ name: "Farfetch'd" },
	{ name: 'Fearow' },
	{ name: 'Feebas' },
	{ name: 'Fennekin' },
	{ name: 'Feraligatr' },
	{ name: 'Ferroseed' },
	{ name: 'Ferrothorn' },
	{ name: 'Finneon' },
	{ name: 'Flaaffy' },
	{ name: 'Flabébé' },
	{ name: 'Flareon' },
	{ name: 'Fletchinder' },
	{ name: 'Fletchling' },
	{ name: 'Floatzel' },
	{ name: 'Floette' },
	{ name: 'Florges' },
	{ name: 'Flygon' },
	{ name: 'Foongus' },
	{ name: 'Forretress' },
	{ name: 'Fraxure' },
	{ name: 'Frillish' },
	{ name: 'Froakie' },
	{ name: 'Frogadier' },
	{ name: 'Froslass' },
	{ name: 'Furfrou' },
	{ name: 'Furret' },
	{ name: 'Gabite' },
	{ name: 'Gallade' },
	{ name: 'Galvantula' },
	{ name: 'Garbodor' },
	{ name: 'Garchomp' },
	{ name: 'Gardevoir' },
	{ name: 'Gastly' },
	{ name: 'Gastrodon' },
	{ name: 'Genesect' },
	{ name: 'Gengar' },
	{ name: 'Geodude' },
	{ name: 'Gible' },
	{ name: 'Gigalith' },
	{ name: 'Girafarig' },
	{ name: 'Giratina' },
	{ name: 'Glaceon' },
	{ name: 'Glalie' },
	{ name: 'Glameow' },
	{ name: 'Gligar' },
	{ name: 'Gliscor' },
	{ name: 'Gloom' },
	{ name: 'Gogoat' },
	{ name: 'Golbat' },
	{ name: 'Goldeen' },
	{ name: 'Golduck' },
	{ name: 'Golem' },
	{ name: 'Golett' },
	{ name: 'Golurk' },
	{ name: 'Goodra' },
	{ name: 'Goomy' },
	{ name: 'Gorebyss' },
	{ name: 'Gothita' },
	{ name: 'Gothitelle' },
	{ name: 'Gothorita' },
	{ name: 'Gourgeist' },
	{ name: 'Granbull' },
	{ name: 'Graveler' },
	{ name: 'Greninja' },
	{ name: 'Grimer' },
	{ name: 'Grotle' },
	{ name: 'Groudon' },
	{ name: 'Grovyle' },
	{ name: 'Growlithe' },
	{ name: 'Grumpig' },
	{ name: 'Gulpin' },
	{ name: 'Gurdurr' },
	{ name: 'Gyarados' },
	{ name: 'Happiny' },
	{ name: 'Hariyama' },
	{ name: 'Haunter' },
	{ name: 'Hawlucha' },
	{ name: 'Haxorus' },
	{ name: 'Heatmor' },
	{ name: 'Heatran' },
	{ name: 'Heliolisk' },
	{ name: 'Helioptile' },
	{ name: 'Heracross' },
	{ name: 'Herdier' },
	{ name: 'Hippopotas' },
	{ name: 'Hippowdon' },
	{ name: 'Hitmonchan' },
	{ name: 'Hitmonlee' },
	{ name: 'Hitmontop' },
	{ name: 'Ho-oh' },
	{ name: 'Honchkrow' },
	{ name: 'Honedge' },
	{ name: 'Hoopa' },
	{ name: 'Hoothoot' },
	{ name: 'Hoppip' },
	{ name: 'Horsea' },
	{ name: 'Houndoom' },
	{ name: 'Houndour' },
	{ name: 'Huntail' },
	{ name: 'Hydreigon' },
	{ name: 'Hypno' },
	{ name: 'Igglybuff' },
	{ name: 'Illumise' },
	{ name: 'Infernape' },
	{ name: 'Inkay' },
	{ name: 'Ivysaur' },
	{ name: 'Jellicent' },
	{ name: 'Jigglypuff' },
	{ name: 'Jirachi' },
	{ name: 'Jolteon' },
	{ name: 'Joltik' },
	{ name: 'Jumpluff' },
	{ name: 'Jynx' },
	{ name: 'Kabuto' },
	{ name: 'Kabutops' },
	{ name: 'Kadabra' },
	{ name: 'Kakuna' },
	{ name: 'Kangaskhan' },
	{ name: 'Karrablast' },
	{ name: 'Kecleon' },
	{ name: 'Keldeo' },
	{ name: 'Kingdra' },
	{ name: 'Kingler' },
	{ name: 'Kirlia' },
	{ name: 'Klang' },
	{ name: 'Klefki' },
	{ name: 'Klink' },
	{ name: 'Klinklang' },
	{ name: 'Koffing' },
	{ name: 'Krabby' },
	{ name: 'Kricketot' },
	{ name: 'Kricketune' },
	{ name: 'Krokorok' },
	{ name: 'Krookodile' },
	{ name: 'Kyogre' },
	{ name: 'Kyurem' },
	{ name: 'Lairon' },
	{ name: 'Lampent' },
	{ name: 'Landorus' },
	{ name: 'Lanturn' },
	{ name: 'Lapras' },
	{ name: 'Larvesta' },
	{ name: 'Larvitar' },
	{ name: 'Latias' },
	{ name: 'Latios' },
	{ name: 'Leafeon' },
	{ name: 'Leavanny' },
	{ name: 'Ledian' },
	{ name: 'Ledyba' },
	{ name: 'Lickilicky' },
	{ name: 'Lickitung' },
	{ name: 'Liepard' },
	{ name: 'Lileep' },
	{ name: 'Lilligant' },
	{ name: 'Lillipup' },
	{ name: 'Linoone' },
	{ name: 'Litleo' },
	{ name: 'Litwick' },
	{ name: 'Lombre' },
	{ name: 'Lopunny' },
	{ name: 'Lotad' },
	{ name: 'Loudred' },
	{ name: 'Lucario' },
	{ name: 'Ludicolo' },
	{ name: 'Lugia' },
	{ name: 'Lumineon' },
	{ name: 'Lunatone' },
	{ name: 'Luvdisc' },
	{ name: 'Luxio' },
	{ name: 'Luxray' },
	{ name: 'Machamp' },
	{ name: 'Machoke' },
	{ name: 'Machop' },
	{ name: 'Magby' },
	{ name: 'Magcargo' },
	{ name: 'Magikarp' },
	{ name: 'Magmar' },
	{ name: 'Magmortar' },
	{ name: 'Magnemite' },
	{ name: 'Magneton' },
	{ name: 'Magnezone' },
	{ name: 'Makuhita' },
	{ name: 'Malamar' },
	{ name: 'Mamoswine' },
	{ name: 'Manaphy' },
	{ name: 'Mandibuzz' },
	{ name: 'Manectric' },
	{ name: 'Mankey' },
	{ name: 'Mantine' },
	{ name: 'Mantyke' },
	{ name: 'Maractus' },
	{ name: 'Mareep' },
	{ name: 'Marill' },
	{ name: 'Marowak' },
	{ name: 'Marshtomp' },
	{ name: 'Masquerain' },
	{ name: 'Mawile' },
	{ name: 'Medicham' },
	{ name: 'Meditite' },
	{ name: 'Meganium' },
	{ name: 'Meloetta' },
	{ name: 'Meowstic' },
	{ name: 'Meowth' },
	{ name: 'Mesprit' },
	{ name: 'Metagross' },
	{ name: 'Metang' },
	{ name: 'Metapod' },
	{ name: 'Mew' },
	{ name: 'Mewtwo' },
	{ name: 'Mienfoo' },
	{ name: 'Mienshao' },
	{ name: 'Mightyena' },
	{ name: 'Milotic' },
	{ name: 'Miltank' },
	{ name: 'Mime' },
	{ name: 'Jr.' },
	{ name: 'Minccino' },
	{ name: 'Minun' },
	{ name: 'Misdreavus' },
	{ name: 'Mismagius' },
	{ name: 'Moltres' },
	{ name: 'Monferno' },
	{ name: 'Mothim' },
	{ name: 'Mr.' },
	{ name: 'Mime' },
	{ name: 'Mudkip' },
	{ name: 'Muk' },
	{ name: 'Munchlax' },
	{ name: 'Munna' },
	{ name: 'Murkrow' },
	{ name: 'Musharna' },
	{ name: 'Natu' },
	{ name: 'Nidoking' },
	{ name: 'Nidoqueen' },
	{ name: 'Nidoran♀' },
	{ name: 'Nidoran♂' },
	{ name: 'Nidorina' },
	{ name: 'Nidorino' },
	{ name: 'Nincada' },
	{ name: 'Ninetales' },
	{ name: 'Ninjask' },
	{ name: 'Noctowl' },
	{ name: 'Noibat' },
	{ name: 'Noivern' },
	{ name: 'Nosepass' },
	{ name: 'Numel' },
	{ name: 'Nuzleaf' },
	{ name: 'Octillery' },
	{ name: 'Oddish' },
	{ name: 'Omanyte' },
	{ name: 'Omastar' },
	{ name: 'Onix' },
	{ name: 'Oshawott' },
	{ name: 'Pachirisu' },
	{ name: 'Palkia' },
	{ name: 'Palpitoad' },
	{ name: 'Pancham' },
	{ name: 'Pangoro' },
	{ name: 'Panpour' },
	{ name: 'Pansage' },
	{ name: 'Pansear' },
	{ name: 'Paras' },
	{ name: 'Parasect' },
	{ name: 'Patrat' },
	{ name: 'Pawniard' },
	{ name: 'Pelipper' },
	{ name: 'Persian' },
	{ name: 'Petilil' },
	{ name: 'Phanpy' },
	{ name: 'Phantump' },
	{ name: 'Phione' },
	{ name: 'Pichu' },
	{ name: 'Pidgeot' },
	{ name: 'Pidgeotto' },
	{ name: 'Pidgey' },
	{ name: 'Pidove' },
	{ name: 'Pignite' },
	{ name: 'Pikachu' },
	{ name: 'Piloswine' },
	{ name: 'Pineco' },
	{ name: 'Pinsir' },
	{ name: 'Piplup' },
	{ name: 'Plusle' },
	{ name: 'Politoed' },
	{ name: 'Poliwag' },
	{ name: 'Poliwhirl' },
	{ name: 'Poliwrath' },
	{ name: 'Ponyta' },
	{ name: 'Poochyena' },
	{ name: 'Porygon' },
	{ name: 'Porygon-Z' },
	{ name: 'Porygon2' },
	{ name: 'Primeape' },
	{ name: 'Prinplup' },
	{ name: 'Probopass' },
	{ name: 'Psyduck' },
	{ name: 'Pumpkaboo' },
	{ name: 'Pupitar' },
	{ name: 'Purrloin' },
	{ name: 'Purugly' },
	{ name: 'Pyroar' },
	{ name: 'Quagsire' },
	{ name: 'Quilava' },
	{ name: 'Quilladin' },
	{ name: 'Qwilfish' },
	{ name: 'Raichu' },
	{ name: 'Raikou' },
	{ name: 'Ralts' },
	{ name: 'Rampardos' },
	{ name: 'Rapidash' },
	{ name: 'Raticate' },
	{ name: 'Rattata' },
	{ name: 'Rayquaza' },
	{ name: 'Regice' },
	{ name: 'Regigigas' },
	{ name: 'Regirock' },
	{ name: 'Registeel' },
	{ name: 'Relicanth' },
	{ name: 'Remoraid' },
	{ name: 'Reshiram' },
	{ name: 'Reuniclus' },
	{ name: 'Rhydon' },
	{ name: 'Rhyhorn' },
	{ name: 'Rhyperior' },
	{ name: 'Riolu' },
	{ name: 'Roggenrola' },
	{ name: 'Roselia' },
	{ name: 'Roserade' },
	{ name: 'Rotom' },
	{ name: 'Rufflet' },
	{ name: 'Sableye' },
	{ name: 'Salamence' },
	{ name: 'Samurott' },
	{ name: 'Sandile' },
	{ name: 'Sandshrew' },
	{ name: 'Sandslash' },
	{ name: 'Sawk' },
	{ name: 'Sawsbuck' },
	{ name: 'Scatterbug' },
	{ name: 'Sceptile' },
	{ name: 'Scizor' },
	{ name: 'Scolipede' },
	{ name: 'Scrafty' },
	{ name: 'Scraggy' },
	{ name: 'Scyther' },
	{ name: 'Seadra' },
	{ name: 'Seaking' },
	{ name: 'Sealeo' },
	{ name: 'Seedot' },
	{ name: 'Seel' },
	{ name: 'Seismitoad' },
	{ name: 'Sentret' },
	{ name: 'Serperior' },
	{ name: 'Servine' },
	{ name: 'Seviper' },
	{ name: 'Sewaddle' },
	{ name: 'Sharpedo' },
	{ name: 'Shaymin' },
	{ name: 'Shedinja' },
	{ name: 'Shelgon' },
	{ name: 'Shellder' },
	{ name: 'Shellos' },
	{ name: 'Shelmet' },
	{ name: 'Shieldon' },
	{ name: 'Shiftry' },
	{ name: 'Shinx' },
	{ name: 'Shroomish' },
	{ name: 'Shuckle' },
	{ name: 'Shuppet' },
	{ name: 'Sigilyph' },
	{ name: 'Silcoon' },
	{ name: 'Simipour' },
	{ name: 'Simisage' },
	{ name: 'Simisear' },
	{ name: 'Skarmory' },
	{ name: 'Skiddo' },
	{ name: 'Skiploom' },
	{ name: 'Skitty' },
	{ name: 'Skorupi' },
	{ name: 'Skrelp' },
	{ name: 'Skuntank' },
	{ name: 'Slaking' },
	{ name: 'Slakoth' },
	{ name: 'Sliggoo' },
	{ name: 'Slowbro' },
	{ name: 'Slowking' },
	{ name: 'Slowpoke' },
	{ name: 'Slugma' },
	{ name: 'Slurpuff' },
	{ name: 'Smeargle' },
	{ name: 'Smoochum' },
	{ name: 'Sneasel' },
	{ name: 'Snivy' },
	{ name: 'Snorlax' },
	{ name: 'Snorunt' },
	{ name: 'Snover' },
	{ name: 'Snubbull' },
	{ name: 'Solosis' },
	{ name: 'Solrock' },
	{ name: 'Spearow' },
	{ name: 'Spewpa' },
	{ name: 'Spheal' },
	{ name: 'Spinarak' },
	{ name: 'Spinda' },
	{ name: 'Spiritomb' },
	{ name: 'Spoink' },
	{ name: 'Spritzee' },
	{ name: 'Squirtle' },
	{ name: 'Stantler' },
	{ name: 'Staraptor' },
	{ name: 'Staravia' },
	{ name: 'Starly' },
	{ name: 'Starmie' },
	{ name: 'Staryu' },
	{ name: 'Steelix' },
	{ name: 'Stoutland' },
	{ name: 'Stunfisk' },
	{ name: 'Stunky' },
	{ name: 'Sudowoodo' },
	{ name: 'Suicune' },
	{ name: 'Sunflora' },
	{ name: 'Sunkern' },
	{ name: 'Surskit' },
	{ name: 'Swablu' },
	{ name: 'Swadloon' },
	{ name: 'Swalot' },
	{ name: 'Swampert' },
	{ name: 'Swanna' },
	{ name: 'Swellow' },
	{ name: 'Swinub' },
	{ name: 'Swirlix' },
	{ name: 'Swoobat' },
	{ name: 'Sylveon' },
	{ name: 'Taillow' },
	{ name: 'Talonflame' },
	{ name: 'Tangela' },
	{ name: 'Tangrowth' },
	{ name: 'Tauros' },
	{ name: 'Teddiursa' },
	{ name: 'Tentacool' },
	{ name: 'Tentacruel' },
	{ name: 'Tepig' },
	{ name: 'Terrakion' },
	{ name: 'Throh' },
	{ name: 'Thundurus' },
	{ name: 'Timburr' },
	{ name: 'Tirtouga' },
	{ name: 'Togekiss' },
	{ name: 'Togepi' },
	{ name: 'Togetic' },
	{ name: 'Torchic' },
	{ name: 'Torkoal' },
	{ name: 'Tornadus' },
	{ name: 'Torterra' },
	{ name: 'Totodile' },
	{ name: 'Toxicroak' },
	{ name: 'Tranquill' },
	{ name: 'Trapinch' },
	{ name: 'Treecko' },
	{ name: 'Trevenant' },
	{ name: 'Tropius' },
	{ name: 'Trubbish' },
	{ name: 'Turtwig' },
	{ name: 'Tympole' },
	{ name: 'Tynamo' },
	{ name: 'Typhlosion' },
	{ name: 'Tyranitar' },
	{ name: 'Tyrantrum' },
	{ name: 'Tyrogue' },
	{ name: 'Tyrunt' },
	{ name: 'Umbreon' },
	{ name: 'Unfezant' },
	{ name: 'Unown' },
	{ name: 'Ursaring' },
	{ name: 'Uxie' },
	{ name: 'Vanillish' },
	{ name: 'Vanillite' },
	{ name: 'Vanilluxe' },
	{ name: 'Vaporeon' },
	{ name: 'Venipede' },
	{ name: 'Venomoth' },
	{ name: 'Venonat' },
	{ name: 'Venusaur' },
	{ name: 'Vespiquen' },
	{ name: 'Vibrava' },
	{ name: 'Victini' },
	{ name: 'Victreebel' },
	{ name: 'Vigoroth' },
	{ name: 'Vileplume' },
	{ name: 'Virizion' },
	{ name: 'Vivillon' },
	{ name: 'Volbeat' },
	{ name: 'Volcarona' },
	{ name: 'Voltorb' },
	{ name: 'Vullaby' },
	{ name: 'Vulpix' },
	{ name: 'Wailmer' },
	{ name: 'Wailord' },
	{ name: 'Walrein' },
	{ name: 'Wartortle' },
	{ name: 'Watchog' },
	{ name: 'Weavile' },
	{ name: 'Weedle' },
	{ name: 'Weepinbell' },
	{ name: 'Weezing' },
	{ name: 'Whimsicott' },
	{ name: 'Whirlipede' },
	{ name: 'Whiscash' },
	{ name: 'Whismur' },
	{ name: 'Wigglytuff' },
	{ name: 'Wingull' },
	{ name: 'Wobbuffet' },
	{ name: 'Woobat' },
	{ name: 'Wooper' },
	{ name: 'Wormadam' },
	{ name: 'Wurmple' },
	{ name: 'Wynaut' },
	{ name: 'Xatu' },
	{ name: 'Xerneas' },
	{ name: 'Yamask' },
	{ name: 'Yanma' },
	{ name: 'Yanmega' },
	{ name: 'Yveltal' },
	{ name: 'Zangoose' },
	{ name: 'Zapdos' },
	{ name: 'Zebstrika' },
	{ name: 'Zekrom' },
	{ name: 'Zigzagoon' },
	{ name: 'Zoroark' },
	{ name: 'Zorua' },
	{ name: 'Zubat' },
	{ name: 'Zweilous' },
	{ name: 'Zygarde' },
    ]
});

// initialize the bloodhound suggestion engine
names.initialize();

	// Checkboxes and Radio buttons
	$(':checkbox').radiocheck();
	$('[data-toggle="checkbox"]').radiocheck();
	$('[data-toggle="radio"]').radiocheck();
	// Password match
	$("#password").keyup(checkPasswordMatch);
	$("#password-confirm").keyup(checkPasswordMatch);
	// instantiate the typeahead UI
	$('#typeahead-pokemon').typeahead(null, {
	    name: 'names',
	    displayKey: 'name',
	    source: names.ttAdapter()
	});
    });
});
