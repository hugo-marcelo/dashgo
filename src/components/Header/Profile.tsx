import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Hugo Marcelo</Text>
          <Text color="gray.300" fontSize="small">
            hugomarcelo91@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Hugo Marcelo"
        src="https://github.com/hugo-marcelo.png"
      />
    </Flex>
  );
}
