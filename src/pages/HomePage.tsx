import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px',
      }}
    >
      <Show above='lg'>
        <GridItem area='aside' paddingY={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameHeading />
        <Box paddingLeft={2}>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
