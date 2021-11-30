import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-pokedex',
  styleUrl: 'style.css',
  shadow: true,
})
export class HeaderPokedex {
  render() {
    return (
      <div class="container">
        <a href="/pokemon">Pokemon</a>
        <a href="/mypokemon">MyPokemon</a>
        <a href="/">Logout</a>
      </div>
    );
  }
}
