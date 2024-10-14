import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function Practice1() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color='error' > Primary</Button>
      <Button disabled >Disabled</Button>
      <Button href="#text-buttons" color="warning" size="small">Link</Button>
    </Stack>
  );
}
export default Practice1;