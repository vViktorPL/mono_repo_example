// @flow
import React, { PureComponent } from 'react';
import * as styles from './pokemon-details.module.scss';

export type PokemonDetailsProps = {
  name: string,
  id: number,
  types: { type: { name: string } }[],
  sprites: { front_default: string },
};

export class PokemonDetails extends PureComponent<PokemonDetailsProps> {
  formattedTypes = () => this.props.types.map(type => type.type.name).join(' / ');

  render() {
    const { id, name, sprites } = this.props;
    return (
      <div className={styles.details}>
        {sprites.front_default && (
          <div className={styles.imageWrapper}>
            <img src={sprites.front_default} alt="pokemon" className={styles.image} />
          </div>
        )}
        <div className={styles.pokemonInfo}>
          <div className={styles.types}>{this.formattedTypes()}</div>
          <div className={styles.id}>{id}</div>
          <div className={styles.name}>{name}</div>
        </div>
      </div>
    );
  }
}
