import { Grid } from "@theme-ui/components";
import PokemonCard from "../PokemonCard/PokemonCard";
const PokemonList = () => {
  return (
    <Grid sx={{ gap: "5px" }}>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </Grid>
  );
};

export default PokemonList;
