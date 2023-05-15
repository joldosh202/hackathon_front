import { Button, Input } from '@chakra-ui/react';
import React from 'react';

const UpdateBalance = () => {
  return (
    <div>
      <Input type="number" placeholder="balance" />
      <Button>update</Button>
    </div>
  );
};

export default UpdateBalance;
