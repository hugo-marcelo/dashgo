import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Hugo Marcelo</Text>
        <Text color="gray.300" fontSize="small">
          hugomarcelo91@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Hugo Marcelo"
        src="https://github.com/hugo-marcelo.png"
      />
    </Flex>
  );
}
