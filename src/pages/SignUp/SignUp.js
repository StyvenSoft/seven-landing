import React from 'react';
import { InfoSection } from '../../components';
import { homeObjFour, homeObjTwo } from '../HomePage/Data';

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default SignUp;