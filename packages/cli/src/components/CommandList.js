import React from 'react'
import { Text, Box } from 'ink'

const CommandList = ({ commands }) => {
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box marginBottom={1}>
        <Text bold>Commands</Text>
      </Box>
      {commands.map(({ commandProps: { name, description, hidden } }) => {
        // Redwood has some commands that are not exposed in the menu. These are
        // commands that are for developers working on Redwood.
        if (hidden) {
          return null
        }

        return (
          <Box key={`command-${name}`}>
            <Box justifyContent="flex-end" marginX={2}>
              <Box width={10}>
                <Text>{name}</Text>
              </Box>
            </Box>
            <Box flex={1}>{description}</Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default CommandList
