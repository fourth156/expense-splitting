import { Pane, Text } from 'evergreen-ui';
import React from 'react';

const Test = () => <Pane
  height={120}
  width={240}
  display="flex"
  alignItems="center"
  justifyContent="center"
  border="default"
>
  <Text>Pane</Text>
</Pane>;

export default Test;