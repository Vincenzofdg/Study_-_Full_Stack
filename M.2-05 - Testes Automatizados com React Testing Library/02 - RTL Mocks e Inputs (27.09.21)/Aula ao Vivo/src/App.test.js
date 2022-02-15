import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const PokemonMock = { cards: [{
  "id": "xyp-XY174",
  "name": "Pikachu-EX",
  "nationalPokedexNumber": 25,
  "imageUrl": "https://images.pokemontcg.io/xyp/XY174.png",
  "imageUrlHiRes": "https://images.pokemontcg.io/xyp/XY174_hires.png",
  "types": [
    "Lightning"
  ],
  "supertype": "Pokémon",
  "subtype": "EX",
  "hp": "130",
  "retreatCost": [
    "Colorless"
  ],
  "convertedRetreatCost": 1,
  "number": "XY174",
  "artist": "5ban Graphics",
  "rarity": "Common",
  "series": "XY",
  "set": "XY Black Star Promos",
  "setCode": "xyp",
  "text": [
    "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Thunder Shock",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
      "damage": "30",
      "convertedEnergyCost": 2
    },
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Mega Thunderbolt",
      "text": "Discard all Energy attached to this Pokémon.",
      "damage": "160",
      "convertedEnergyCost": 3
    }
  ],
  "resistances": [
    {
      "type": "Metal",
      "value": "-20"
    }
  ],
  "weaknesses": [
    {
      "type": "Fighting",
      "value": "×2"
    }
  ]
}]}

describe('PokemonCards test', () => {
  test('Exibe a logo e o texto "Pesquisar"', () => {
    render(<App/>);

    const logoImg = screen.getByRole('img');
    expect(logoImg).toBeInTheDocument();

    const textTitle = screen.getByRole('heading', { 
      level: 3,
      name: /Pokemon/i,
    });
    expect(textTitle).toBeInTheDocument();
  });

  test('Verifica se o input e o botão estão sendo renderizados', () => {
    render(<App/>);

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument();

    const searchButton = screen.getByRole('button', {
      name: "Pesquisar",
    })
    expect(searchButton).toBeInTheDocument();
  });

  test('verifica se o input recebe entrada de dados', () => {
    render(<App/>);

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument();

    userEvent.type(inputText, 'oi');
    expect(inputText).toHaveValue('oi');
  });

  test('Aparece o card quando o pokemon é pesquisado', async () => {
    global.fetch = jest.fn(function (url) { // Mesmas entradas
      // chama a api, faz umas coisas
      return Promise.resolve({
        json: () => Promise.resolve(PokemonMock) // retornar a mesma saíd
      })
    });

    render(<App/>);

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument();
    userEvent.type(inputText, 'pikachu');

    const searchButton = screen.getByRole('button', {
      name: "Pesquisar",
    })
    userEvent.click(searchButton);

    const pikachuName = await screen.findByRole('heading', { 
      level: 3,
      name: 'Pikachu-EX',
    })
    expect(pikachuName).toBeInTheDocument();
  });
});




// Anotações Fetch implementation

// fetch(url) { // Mesmas entradas
//   // chama a api, faz umas coisas
//   return Promise.resolve({
//     json: () => Promise.resolve({ cards: 'Pikachu' }) // retornar a mesma saíd
//   })
// }

// fetch(url) 
//   .then(response) => response.json()
//   .then(response) => console.log(response)